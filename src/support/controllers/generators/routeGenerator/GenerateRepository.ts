import Util from "@support/controllers/generators/Util"
import Executor from './Executor';
import
{
  REPO_TEMPLATE, REPO_GET_LIST_TEMPLATE,
  REPO_GET_DETAILS_TEMPLATE, REPO_SAVE_TEMPLATE,
  REPO_SET_TEMPLATE, REPO_DELETE_TEMPLATE
} from "@support/controllers/generators/Templates";

class GenerateRoutes extends Executor
{
  async generateTs()
  {
    let res = REPO_TEMPLATE.toString().trim();
    let imports = "";
    let content = "";

    for (let r of this.resources) {
      let cn = Util.snakeToCamel(this.classes[r]);
      let cN = Util.iniToUpper(cn);
      imports += `import ${cN} from "@models/${cN}";\n`;

      for (let e of this.endpoints[r]) {
        let route = `${Util.sp(2)}${this.getQuery(cn, e)}\n`;
        content += route;
      }
    }

    imports = imports.trim();
    content = content.trim();

    res = res.replace(new RegExp('#imports#', 'g'), imports);
    res = res.replace(new RegExp('#content#', 'g'), content);

    super.generateFile("", "Sql.ts", res);
  }

  getQuery(className: string, endpointData: string)
  {
    let endpoint = endpointData.split("|")[0];
    let method = endpointData.split("|")[1].toLowerCase();
    let cn = className;
    let cN = Util.iniToUpper(cn);

    let res = "";
    if (method == "get") {
      if (endpoint.endsWith("/:id"))
        res = REPO_GET_DETAILS_TEMPLATE;
      else
        res = REPO_GET_LIST_TEMPLATE;
    } else if (method == "post")
      res = REPO_SAVE_TEMPLATE;
    else if (method == "put")
      res = REPO_SET_TEMPLATE;
    else if (method == "delete")
      res = REPO_DELETE_TEMPLATE;

    res = res.trim();
    res = res.replace(new RegExp('#model#', 'g'), cn);
    res = res.replace(new RegExp('#Model#', 'g'), cN);
    return res;
  }
}

export default GenerateRoutes;