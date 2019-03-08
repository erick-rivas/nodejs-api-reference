import * as fs from 'fs';
import * as path from "path";
import * as zip from "node-zip";
import Executor from './executor';

class GenerateModels extends Executor
{
  async generateTs()
  {
    let dir = `${super.getDir()}/models`;
    if (!fs.existsSync(dir))
      fs.mkdirSync(dir);

    for (let c of this.classes) {
      let t = this.getTs(c, this.attrs[c], this.models[c], this.consts[c]);
      let fn = `${dir}/${c}.ts`;
      fs.writeFileSync(fn, t);
    }
  }

  getTs(className: string, attributes: any[], models: any[], consts: any[]): string
  {
    let res = this.CLASS_TEMPLATE.toString().trim();
    let attrs = "";
    let args = "";
    let assigns = "";
    let toJson = "";
    let imports = "";
    let gets = "";

    toJson += `      id: this.id,\n`;
    for (let a of attributes) {
      attrs += `  ${a.name}: ${a.type};\n`;
      args += `${a.name}: ${a.type},`;
      assigns += `    this.${a.name} = ${a.name};\n`;
      toJson += `      ${this.camelToSnake(a.name)}: this.${a.name},\n`;
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
    toJson = toJson.trim().slice(0, -1);
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

  private CLASS_TEMPLATE = `

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
}

export default GenerateModels;