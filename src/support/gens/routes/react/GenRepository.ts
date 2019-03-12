import Util from "@support/gens/Util"
import Executor from '@support/gens/routes/Executor';
import
{
  REPO_TEMPLATE, REPO_GET_LIST_TEMPLATE,
  REPO_GET_DETAILS_TEMPLATE, REPO_SAVE_TEMPLATE,
  REPO_SET_TEMPLATE, REPO_DELETE_TEMPLATE
} from "@support/gens/routes/api/Templates"

class GenerateRepository extends Executor
{
  protected queriesAllGet = false;

  async generate()
  {
    let res = REPO_TEMPLATE.toString().trim();
    let imports = "";
    let content = "";

    for (let r of this.resources) {
      let cn = Util.snakeToCamel(this.classes[r]);
      let cN = Util.iniToUpper(cn);
      imports += `import ${cN} from "models/${cN}";\n`;
    }

    content += `${this.getQueries("GET_LIST", this.queries["GET_LIST"])}\n`;
    content += `${this.getQueries("GET", this.queries["GET"])}\n`;
    content += `${this.getQueries("POST", this.queries["POST"])}\n`;
    content += `${this.getQueries("PUT", this.queries["PUT"])}\n`;
    content += `${this.getQueries("DELETE", this.queries["DELETE"])}\n`;

    imports = imports.trim();
    content = content.trim();

    res = res.replace(new RegExp('#imports#', 'g'), imports);
    res = res.replace(new RegExp('#content#', 'g'), content);

    super.generateFile("/sources", "Api.ts", res);
  }

  getQueries(method: string, query: any[])
  {
    let res = "";
    for (let c in query) {
      let cn = Util.snakeToCamel(c);
      let params = this.queries[method][c];
      let route = `${Util.sp(2)}${this.getQuery(method, cn, params)}\n`;
      res += route;
    }
    return res;
  }

  getQuery(method: string, className: string, params: string[])
  {
    let res = "";
    let cn = className;
    let cN = Util.iniToUpper(cn);
    let args = "";

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

    for (let p of params) {
      if (method == "POST")
        args += `${Util.snakeToCamel(p)}, `;
      else
        args += `${Util.snakeToCamel(p)}?, `;
    }
    args = args.trim().slice(0, -1);

    res = res.trim();
    res = res.replace(new RegExp('#model#', 'g'), cn);
    res = res.replace(new RegExp('#Model#', 'g'), cN);
    res = res.replace(new RegExp('#args#', 'g'), args);
    return res;
  }
}

export default GenerateRepository;