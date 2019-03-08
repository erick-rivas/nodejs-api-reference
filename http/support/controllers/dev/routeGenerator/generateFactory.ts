import * as fs from 'fs';
import Executor from './executor';

class GenerateRoutes extends Executor
{
  async generateTs()
  {
    let dir = `${super.getDir()}`;
    let res = this.FACTORY_TEMPLATE.toString().trim();
    let imports = "";
    let content = "";

    for (let r of this.resources) {
      let rn = super.snakeToCamel(r);
      let rN = rn.charAt(0).toUpperCase() + rn.slice(1);
      imports += `import ${rN} from "@controllers/${rN}";\n`;

      let create = this.CREATE_TEMPLATE.toString().trim();
      create = create.replace(new RegExp('_resource', 'g'), rN);

      content += create + "\n\n";
    }

    imports = imports.trim();
    content = content.trim();

    res = res.replace(new RegExp('_imports', 'g'), imports);
    res = res.replace(new RegExp('_content', 'g'), content);

    fs.writeFileSync(`${dir}/factory.ts`, res);
  }

  private FACTORY_TEMPLATE = `

import Sql from "@sql/Source";
_imports

class Controllers
{
  _content
}

export default Controllers;
  `;

  private CREATE_TEMPLATE = `

  static create_resource()
  {
    return new _resource(
      Sql.getInstance());
  }
  `;
}

export default GenerateRoutes;