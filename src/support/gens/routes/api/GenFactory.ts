import Util from "@support/gens/Util"
import Executor from '@support/gens/routes/Executor';
import { FACTORY_TEMPLATE, FACTORY_ITEM_TEMPLATE } from "@support/gens/routes/api/Templates"

class GenerateFactory extends Executor
{
  async generate()
  {
    let res = FACTORY_TEMPLATE.toString().trim();
    let imports = "";
    let content = "";

    for (let r of this.resources) {
      let rn = Util.snakeToCamel(r);
      let rN = Util.iniToUpper(rn);
      imports += `import ${rN} from "@lt/controllers/${rN}";\n`;

      let create = FACTORY_ITEM_TEMPLATE.toString().trim();
      create = create.replace(new RegExp('#Resource#', 'g'), rN);
      content += `${Util.sp(2)}${create}\n\n`;
    }

    imports = imports.trim();
    content = content.trim();

    res = res.replace(new RegExp('#imports#', 'g'), imports);
    res = res.replace(new RegExp('#content#', 'g'), content);

    super.generateFile("/controllers", "Factory.ts", res);
  }
}

export default GenerateFactory;