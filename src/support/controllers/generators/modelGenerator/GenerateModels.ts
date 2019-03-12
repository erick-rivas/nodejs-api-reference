import Executor from './Executor';
import Util from "@support/controllers/generators/Util"
import { MODEL_TEMPLATE } from "@support/controllers/generators/modelGenerator/Templates";

class GenerateModels extends Executor
{
  async generateTs()
  {
    for (let c of this.classes) {
      let t = this.getTs(c, this.attrs[c], this.models[c], this.consts[c]);
      super.generateFile("/models", `${c}.ts`, t);
    }
  }

  getTs(className: string, attributes: any[], models: any[], consts: any[]): string
  {
    let res = MODEL_TEMPLATE.toString().trim();
    let modelName = Util.iniToUpper(className);
    let attrs = "";
    let args = "";
    let assigns = "";
    let toJson = "";
    let imports = "";
    let gets = "";

    toJson += `${Util.sp(6)}id: this.id,\n`;
    for (let a of attributes) {
      attrs += `${Util.sp(2)}${a.name}: ${a.type};\n`;
      args += `${a.name}: ${a.type}, `;
      assigns += `${Util.sp(4)}this.${a.name} = attrs.${a.name};\n`;
      toJson += `${Util.sp(6)}${Util.camelToSnake(a.name)}: this.${a.name},\n`;
    }

    for (let m in models)
      imports += `import ${m} from "@lt/models/${m}";\n`;

    let hasConst = false;
    for (let c in consts) {
      let collection = consts[c].slice(1, -1).split(",");
      imports += `import { ${c} } from "@lt/models/helpers/Const";\n`;
      gets += `\n${Util.sp(2)}static get${c} = (val: string): ${c} => getEnum(${c}, val, ${c}.${collection[0]});\n`;
      hasConst = true;
    }
    if (hasConst)
      imports += `import { getEnum } from "@util/Const";\n`;


    attrs = attrs.trim();
    args = args.trim().slice(0, -1);
    assigns = assigns.trim();
    toJson = toJson.trim().slice(0, -1);
    imports = imports.trim() + "\n";

    res = res.replace(new RegExp('#Model#', 'g'), modelName);
    res = res.replace(new RegExp('#attrs#', 'g'), attrs);
    res = res.replace(new RegExp('#args#', 'g'), args);
    res = res.replace(new RegExp('#assigns#', 'g'), assigns);
    res = res.replace(new RegExp('#toJSON#', 'g'), toJson);
    res = res.replace(new RegExp('#imports#', 'g'), imports);
    res = res.replace(new RegExp('#gets#', 'g'), gets);
    return res;
  }
}

export default GenerateModels;