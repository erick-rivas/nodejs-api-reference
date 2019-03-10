import Util from "@support/controllers/generators/Util"
import Executor from './Executor';
import
{
  REPO_TEMPLATE, REPO_GET_LIST_TEMPLATE,
  REPO_GET_DETAILS_TEMPLATE, REPO_SAVE_TEMPLATE,
  REPO_SET_TEMPLATE, REPO_DELETE_TEMPLATE
} from "@support/controllers/generators/Templates";

class GenerateRepository extends Executor
{
  async generateTs()
  {
    let res = REPO_TEMPLATE.toString().trim();
    let imports = "";
    let content = "";

    for (let r of this.resources) {
      let cn = Util.snakeToCamel(this.classes[r]);
      let cN = Util.iniToUpper(cn);
      imports += `import ${cN} from "@lt/models/${cN}";\n`;
    }

    content += `${this.getQueries("GET", this.queries["GET"])}\n`;
    content += `${this.getQueries("GET_LIST", this.queries["GET_LIST"])}\n`;
    content += `${this.getQueries("POST", this.queries["POST"])}\n`;
    content += `${this.getQueries("PUT", this.queries["PUT"])}\n`;
    content += `${this.getQueries("DELETE", this.queries["DELETE"])}\n`;

    imports = imports.trim();
    content = content.trim();

    res = res.replace(new RegExp('#imports#', 'g'), imports);
    res = res.replace(new RegExp('#content#', 'g'), content);

    super.generateFile("", "Sql.ts", res);
  }

  getQueries(method: string, query: any[])
  {
    let res = "";
    for (let c in query) {
      let cn = Util.snakeToCamel(c);
      let route = `${Util.sp(2)}${this.getQuery(method, cn)}\n`;
      res += route;
    }
    return res;
  }

  getQuery(method: string, className: string)
  {
    let cn = className;
    let cN = Util.iniToUpper(cn);

    let res = "";
    if (method == "GET")
      res = REPO_GET_DETAILS_TEMPLATE;
    else if (method == "GET_LIST")
      res = REPO_GET_LIST_TEMPLATE;
    else if (method == "POST")
      res = REPO_SAVE_TEMPLATE;
    else if (method == "PUT")
      res = REPO_SET_TEMPLATE;
    else if (method == "DELETE")
      res = REPO_DELETE_TEMPLATE;

    res = res.trim();
    res = res.replace(new RegExp('#model#', 'g'), cn);
    res = res.replace(new RegExp('#Model#', 'g'), cN);
    return res;
  }
}

export default GenerateRepository;