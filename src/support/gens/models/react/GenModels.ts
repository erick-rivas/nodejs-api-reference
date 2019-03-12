import Util from "@support/gens/Util"
import Executor from '@support/gens/models/Executor';
import { MODEL_TEMPLATE } from "@support/gens/models/react/Templates";

class GenerateModels extends Executor
{
  async generate()
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
    let imports = "";
    let gets = "";

    for (let a of attributes) {
      attrs += `${Util.sp(2)}${a.name}: ${a.type};\n`;
      args += `${a.name}: ${a.type}, `;
      assigns += `${Util.sp(4)}this.${a.name} = attrs.${a.name};\n`;
    }

    for (let m in models)
      imports += `import ${m} from "models/${m}";\n`;

    let hasConst = false;
    for (let c in consts) {
      let collection = consts[c].slice(1, -1).split(",");
      imports += `import { ${c} } from "models/util/Const";\n`;
      gets += `\n${Util.sp(2)}static get${c} = (val: string): ${c} => getEnum(${c}, val, ${c}.${collection[0]});\n`;
      hasConst = true;
    }
    if (hasConst)
      imports += `import { getEnum } from "models/util/Const";\n`;

    attrs = attrs.trim();
    args = args.trim().slice(0, -1);
    assigns = assigns.trim();
    imports = imports.trim();
    if (imports != "") imports += "\n";

    res = res.replace(new RegExp('#Model#', 'g'), modelName);
    res = res.replace(new RegExp('#attrs#', 'g'), attrs);
    res = res.replace(new RegExp('#args#', 'g'), args);
    res = res.replace(new RegExp('#assigns#', 'g'), assigns);
    res = res.replace(new RegExp('#imports#', 'g'), imports);
    res = res.replace(new RegExp('#gets#', 'g'), gets);
    return res;
  }
}

export default GenerateModels;