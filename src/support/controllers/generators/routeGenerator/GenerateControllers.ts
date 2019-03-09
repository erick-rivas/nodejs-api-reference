import Util from "@support/controllers/generators/Util"
import Executor from './Executor';
import
{
  CTRL_TEMPLATE, CTRL_GET_LIST_TEMPLATE,
  CTRL_GET_DETAILS_TEMPLATE, CTRL_SAVE_TEMPLATE,
  CTRL_UPDATE_TEMPLATE, CTRL_DELETE_TEMPLATE
} from "@support/controllers/generators/Templates"

class GenerateControllers extends Executor
{
  async generateTs()
  {
    for (let r of this.resources) {
      let resName = Util.snakeToCamel(r);
      let t = this.getTs(resName, this.classes[r], this.endpoints[r]);
      super.generateFile("/controllers", `${Util.iniToUpper(resName)}.ts`, t);
    }
  }

  getTs(resName: string, className: string, endpoints: any[]): string
  {
    let res = CTRL_TEMPLATE;
    let content = "";

    let cn = Util.snakeToCamel(className);
    let cN = cn.charAt(0).toUpperCase() + cn.slice(1);

    for (let e of endpoints) {
      let route = "";
      let endpoint = e.split("|")[0];
      let method = e.split("|")[1].toLowerCase();

      if (method == "get") {
        if (endpoint.endsWith("/:id"))
          route = CTRL_GET_DETAILS_TEMPLATE;
        else
          route = CTRL_GET_LIST_TEMPLATE;
      } else if (method == "post")
        route = CTRL_SAVE_TEMPLATE;
      else if (method == "put")
        route = CTRL_UPDATE_TEMPLATE;
      else if (method == "delete")
        route = CTRL_DELETE_TEMPLATE;

      route = route.trim();
      route = route.replace(new RegExp('#model#', 'g'), cn);
      route = route.replace(new RegExp('#Model#', 'g'), cN);

      content += `  ${route}\n\n`;
    }

    className = Util.iniToUpper(resName);
    content = content.trim();

    res = res.replace(new RegExp('#ClassName#', 'g'), className);
    res = res.replace(new RegExp('#content#', 'g'), content);
    return res;
  }
}

export default GenerateControllers;