import * as fs from 'fs';
import * as parse from 'csv-parse/lib/sync';
import * as path from "path";
import { Generator } from "@models/helpers/Util";


const TS_CLASS_TEMPLATE = `

import Model from "@models/Model";
_imports

class _className extends Model
{
  _gets

  id: number;
  _attrs

  constructor(id: number)
  {
    super();
    this.id = id;
  }

  build(_args): _className
  {
    _assigns
    return this;
  }

  toJSON()
  {
    return {
      _toJSON
    };
  }
}

export default _className;`;

const TS_MOCK_TEMPLATE = `

_imports
import { Generator } from "@models/helpers/Util";

class Mocks
{
  _mocks
}

export default Mocks;
`;

const TS_MOCK_ITEM = `

static _className()
  {
    return [
      _data
    ];
  }
`;


class GenerateModels
{
  private input: string;
  private type: string;

  constructor(input: string, type: string)
  {
    this.input = input;
    this.type = type;
  }

  async execute(): Promise<any>
  {

    //Extract data

    let classes = [];
    let levels = [];
    let attrs = [];
    let models = [];
    let consts = [];

    const dataSet = parse(this.input, {
      columns: true
    });

    for (let data of dataSet) {
      if (classes.indexOf(data.class_name) == -1) {
        classes.push(data.class_name);
        levels[data.class_name] = data.class_level;
        attrs[data.class_name] = [];
        models[data.class_name] = [];
        consts[data.class_name] = [];
      }
      attrs[data.class_name].push({
        name: data.attribute,
        type: data.type,
        description: data.description,
        collection: data.collection
      });
      if (data.description == "_MODEL") {
        if (data.type.endsWith("[]"))
          models[data.class_name][data.type.slice(0, -2)] = 0;
        else
          models[data.class_name][data.type] = 0;

      }
      else if (data.description == "_CONST")
        consts[data.class_name][data.type] = data.collection;
    }

    //Generate files

    if (this.type == "ts")
      this.generateTs(classes, levels, attrs, models, consts);

  }

  generateTs(classes: string[], levels: any[], attrs: any[], models: any[], consts: any[])
  {
    let dir = `${path.dirname(require.main.filename)}/../assets/dev/gen`;
    for (let c of classes) {
      let t = this.getTsTemplate(c, attrs[c], models[c], consts[c]);
      fs.writeFileSync(`${dir}/${c}.ts`, t);
    }
    let mocks = this.getTsMocks(classes, levels, attrs, consts);
    fs.writeFileSync(`${dir}/Mocks.ts`, mocks);
  }

  getTsTemplate(className: string, attributes: any[], models: any[], consts: any[]): string
  {
    let res = TS_CLASS_TEMPLATE.toString().trim();
    let attrs = "";
    let args = "";
    let assigns = "";
    let toJson = "";
    let imports = "";
    let gets = "";

    for (let a of attributes) {
      attrs += `  ${a.name}: ${a.type}\n`;
      args += `${a.name}: ${a.type},`;
      assigns += `    this.${a.name} = ${a.name};\n`;
      toJson += `      ${this.camelToSnake(a.name)}: ${a.name}\n`;
    }

    for (let m in models)
      imports += `import ${m} from "@models/${m}";\n`;

    for (let c in consts) {
      let collection = consts[c].slice(1, -1).split(",");
      imports += `import { ${c} } from "@models/helpers/Const";\n`;
      gets += `  static get${c} = (val: string): ${c} => getEnum(${c}, val, ${c}.${collection[0]});\n`;
    }

    attrs = attrs.trim();
    args = args.trim().slice(0, -1);
    assigns = assigns.trim();
    toJson = toJson.trim();
    imports = imports.trim();
    gets = gets.trim();

    res = res.replace(new RegExp('_className', 'g'), className);
    res = res.replace(new RegExp('_attrs', 'g'), attrs);
    res = res.replace(new RegExp('_args', 'g'), args);
    res = res.replace(new RegExp('_assigns', 'g'), assigns);
    res = res.replace(new RegExp('_toJSON', 'g'), toJson);
    res = res.replace(new RegExp('_imports', 'g'), imports);
    res = res.replace(new RegExp('_gets', 'g'), gets);
    return res;
  }

  getTsMocks(classes: string[], levels: any[], attrs: any[], consts: any[]): string
  {
    let mockT = TS_MOCK_TEMPLATE.toString().trim();
    let mocks = "";
    let imports = "";

    for (let c of classes)
      mocks += `  ${this.getTsMockItem(c, levels, attrs[c])}\n\n`;

    for (let c of classes)
      imports += `import ${c} from "@models/${c}";\n`;

    mocks = mocks.trim();
    imports = imports.trim();

    mockT = mockT.replace(new RegExp('_mocks', 'g'), mocks);
    mockT = mockT.replace(new RegExp('_imports', 'g'), imports);

    return mockT;
  }

  getTsMockItem(className: string, levels: any[], attributes: any[]): string
  {
    let res = TS_MOCK_ITEM.toString().trim();
    let it = Math.pow(2, +levels[className] + 3);
    let data = "";


    for (let i = 0; i < it; i++) {

      let attrs = "";
      data += `      new ${className}(${Generator.getId()}).build(`;

      //Attributes

      for (let a of attributes) {

        //Const

        if (a.description == "_CONST") {
          let collection = a.collection.slice(1, -1).split(",");
          attrs += `${a.type}.${collection[Generator.getNum(collection.length)]},`;
        }

        //Models

        else if (a.description == "_MODEL") {
          let type = a.type.endsWith("[]") ? a.type.slice(0, -2) : a.type;
          let typeIts = Math.pow(2, +levels[type] + 3);
          if (a.type.endsWith("[]")) {
            attrs += "[";
            let numEle = Generator.getNum(2) + 1;
            for (let j = 0; j < numEle; j++)
              attrs += `this.${type}()[${Generator.getNum(typeIts)}],`;
            attrs = attrs.slice(0, -1);
            attrs += "],";
          } else
            attrs += `this.${type}()[${Generator.getNum(typeIts)}],`;
        }

        //Other

        else {
          if (a.description == "name")
            attrs += `"${Generator.getName()}",`;
          else if (a.description == "noun")
            attrs += `"${Generator.getNoun()}",`;
          else if (a.description == "imageUrl")
            attrs += `"${Generator.getImageUrl()}",`;
        }
      }

      attrs = attrs.slice(0, -1);
      data += `${attrs}),\n`;
    }

    data = data.trim().slice(0, -1);
    res = res.replace(new RegExp('_className', 'g'), className);
    res = res.replace(new RegExp('_data', 'g'), data);
    return res;
  }

  camelToSnake(s: string): string
  {
    return s.replace(/(?:^|\.?)([A-Z])/g, function (x, y) { return "_" + y.toLowerCase() }).replace(/^_/, "");
  }
}

export default GenerateModels;