import Util from "@support/controllers/generators/Util"
import Executor from './Executor';
import
{
  SRC_TEMPLATE, SRC_GET_LIST_TEMPLATE,
  SRC_GET_DETAILS_TEMPLATE, SRC_SAVE_TEMPLATE,
  SRC_SET_TEMPLATE, SRC_DELETE_TEMPLATE
} from "@support/controllers/generators/Templates"

class GenerateRoutes extends Executor
{
  async generateTs()
  {
    let res = SRC_TEMPLATE.toString().trim();
    let imports = "";
    let content = "";

    for (let r of this.resources) {
      let cn = Util.snakeToCamel(this.classes[r]);
      let cN = Util.iniToUpper(cn);
      imports += `import ${cN} from "@lt/models/${cN}";\n`;

      for (let e of this.endpoints[r]) {
        let route = `${Util.sp(2)}${this.getQuery(cn, e)}\n\n`;
        content += route;
      }
    }

    imports = imports.trim();
    content = content.trim();

    res = res.replace(new RegExp('#imports#', 'g'), imports);
    res = res.replace(new RegExp('#content#', 'g'), content);

    super.generateFile("", "Source.ts", res);
  }

  getQuery(className: string, endpointData: string)
  {
    let endpoint = endpointData.split("|")[0];
    let method = endpointData.split("|")[1].toLowerCase();
    let cn = className;
    let cN = Util.iniToUpper(cn);
    let ini = cn.charAt(0);

    let res = "";
    if (method == "get") {
      if (endpoint.endsWith("/:id"))
        res = SRC_GET_DETAILS_TEMPLATE;
      else
        res = SRC_GET_LIST_TEMPLATE;
    } else if (method == "post")
      res = SRC_SAVE_TEMPLATE;
    else if (method == "put")
      res = SRC_SET_TEMPLATE;
    else if (method == "delete")
      res = SRC_DELETE_TEMPLATE;


    res = res.trim();
    res = res.replace(new RegExp('#i#', 'g'), ini);
    res = res.replace(new RegExp('#Model#', 'g'), cN);
    res = res.replace(new RegExp('#model#', 'g'), cn);
    res = res.replace(new RegExp('#model_n#', 'g'), Util.camelToSnake(cn));

    return res;
  }
}

export default GenerateRoutes;