import Util from "@support/gens/Util"
import Executor from '@support/gens/routes/Executor';
import
{
  CTRL_TEMPLATE, CTRL_GET_LIST_TEMPLATE, CTRL_CUSTOM_TEMPLATE,
  CTRL_GET_DETAILS_TEMPLATE, CTRL_SAVE_TEMPLATE,
  CTRL_UPDATE_TEMPLATE, CTRL_DELETE_TEMPLATE
} from "@support/gens/routes/api/Templates"

class GenerateControllers extends Executor
{
  async generate()
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
        let args = endpoint.split("/")[2];
        if (!args)
          route = CTRL_GET_LIST_TEMPLATE;
        else if (args == ":id")
          route = CTRL_GET_DETAILS_TEMPLATE;
        else {
          route = CTRL_CUSTOM_TEMPLATE;
          let func = Util.snakeToCamel(args);
          route = route.replace(new RegExp('#func#', 'g'), func);
        }
      } else if (method == "post")
        route = CTRL_SAVE_TEMPLATE;
      else if (method == "put")
        route = CTRL_UPDATE_TEMPLATE;
      else if (method == "delete")
        route = CTRL_DELETE_TEMPLATE;

      let args = "";
      let assigns = "";
      for (let p of this.params[e]) {
        args += `${p}, `;
        assigns += `${Util.sp(6)}${Util.snakeToCamel(p)}: ${p},\n`;
      }
      args = args.trim().slice(0, -1);
      assigns = assigns.trim().slice(0, -1);

      route = route.trim();
      route = route.replace(new RegExp('#model#', 'g'), cn);
      route = route.replace(new RegExp('#Model#', 'g'), cN);
      route = route.replace(new RegExp('#args#', 'g'), args);
      route = route.replace(new RegExp('#assigns#', 'g'), assigns);


      content += `  ${route}\n\n`;
    }

    className = Util.iniToUpper(resName);
    content = content.trim();

    res = res.replace(new RegExp('#Model#', 'g'), cN);
    res = res.replace(new RegExp('#ClassName#', 'g'), className);
    res = res.replace(new RegExp('#content#', 'g'), content);
    return res;
  }
}

export default GenerateControllers;