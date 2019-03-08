import Util from "@support/controllers/generators/Util"
import Executor from './Executor';
import { FACTORY_TEMPLATE, FACTORY_ITEM_TEMPLATE } from "@support/controllers/generators/Templates"

class GenerateRoutes extends Executor
{
  async generateTs()
  {
    let res = FACTORY_TEMPLATE.toString().trim();
    let imports = "";
    let content = "";

    for (let r of this.resources) {
      let rn = Util.snakeToCamel(r);
      let rN = Util.iniToUpper(rn);
      imports += `import ${rN} from "@controllers/${rN}";\n`;

      let create = FACTORY_ITEM_TEMPLATE.toString().trim();
      create = create.replace(new RegExp('#Resource#', 'g'), rN);
      content += `${Util.sp(2)}${create}\n\n`;
    }

    imports = imports.trim();
    content = content.trim();

    res = res.replace(new RegExp('#imports#', 'g'), imports);
    res = res.replace(new RegExp('#content#', 'g'), content);

    super.generateFile("/", "Factory.ts", res);
  }
}

export default GenerateRoutes;