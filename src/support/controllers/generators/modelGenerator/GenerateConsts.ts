import Executor from './Executor';
import Util from "@support/controllers/generators/Util"
import { CONST_TEMPLATE } from "@support/controllers/generators/modelGenerator/Templates"

class GenerateConsts extends Executor
{
  async generateTs()
  {
    let res = CONST_TEMPLATE.toString().trim();
    let content = "";
    let defs = "";

    for (let c of this.classes) {
      for (let co in this.consts[c]) {
        defs += `${co}, `;
        let collection = this.consts[c][co].slice(1, -1).split(",");
        let constant = `enum ${co}\n{\n`;
        for (let col in collection) {
          let item = collection[col].trim();
          constant += `${Util.sp(2)}${item} = "${item}",\n`;
        }
        constant = constant.trim().slice(0, -1);
        constant += "\n}\n\n"
        content += constant;
      }
    }

    content = content.trim();
    defs = defs.trim().slice(0, -1);

    res = res.replace(new RegExp('#content#', 'g'), content);
    res = res.replace(new RegExp('#defs#', 'g'), defs);

    super.generateFile("/models/helpers", "Const.ts", res);
  }
}

export default GenerateConsts;