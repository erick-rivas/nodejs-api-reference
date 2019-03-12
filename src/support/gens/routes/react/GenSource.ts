import Util from "@support/gens/Util"
import Executor from '@support/gens/routes/Executor';
import
{
  SRC_TEMPLATE, SRC_GET_LIST_TEMPLATE,
  SRC_GET_DETAILS_TEMPLATE, SRC_SAVE_TEMPLATE,
  SRC_SET_TEMPLATE, SRC_DELETE_TEMPLATE
} from "@support/gens/routes/react/Templates"

class GenerateRoutes extends Executor
{
  async generate()
  {
    let res = SRC_TEMPLATE.toString().trim();
    let imports = "";
    let content = "";

    for (let r of this.resources) {
      let cn = Util.snakeToCamel(this.classes[r]);
      let cN = Util.iniToUpper(cn);
      imports += `import ${cN} from "models/${cN}";\n`;
    }

    content += `${this.getQueries("GET_LIST", this.queries["GET_LIST"])}\n\n`;
    content += `${this.getQueries("GET", this.queries["GET"])}\n\n`;
    content += `${this.getQueries("POST", this.queries["POST"])}\n\n`;
    content += `${this.getQueries("PUT", this.queries["PUT"])}\n\n`;
    content += `${this.getQueries("DELETE", this.queries["DELETE"])}\n\n`;

    imports = imports.trim();
    content = content.trim();

    res = res.replace(new RegExp('#imports#', 'g'), imports);
    res = res.replace(new RegExp('#content#', 'g'), content);

    super.generateDir("/sources");
    super.generateFile("/sources/api", "Source.ts", res);
  }

  getQueries(method: string, query: any[])
  {
    let res = "";
    for (let c in query) {
      let cn = Util.snakeToCamel(c);
      let params = this.queries[method][c];
      let route = `${Util.sp(2)}${this.getQuery(method, cn, params)}\n\n`;
      res += route;
    }
    return res;
  }

  getQuery(method: string, className: string, params: string[])
  {
    let res = "";
    let cn = className;
    let cN = Util.iniToUpper(cn);
    let c_n = Util.camelToSnake(cn);
    let ini = cn.charAt(0);
    let args = "";
    let filters = "";
    let attrs = "";
    let columns = "";

    if (method == "GET")
      res = SRC_GET_DETAILS_TEMPLATE;
    else if (method == "GET_LIST")
      res = SRC_GET_LIST_TEMPLATE;
    else if (method == "POST")
      res = SRC_SAVE_TEMPLATE;
    else if (method == "PUT")
      res = SRC_SET_TEMPLATE;
    else if (method == "DELETE")
      res = SRC_DELETE_TEMPLATE;

    for (let p of params) {
      let pc = Util.snakeToCamel(p);
      filters += `${Util.sp(4)}if (fs.${pc}) filter.push(new Pair("${ini}.${p}", fs.${pc}));\n`;
      attrs += `${Util.sp(4)}attrs.push(new Pair("${p}", args.${pc}));\n`;
      columns += `${Util.sp(4)}if (args.${pc}) columns.push(new Pair("${p}", args.${pc}));\n`;
    }

    filters = filters.trim();
    attrs = attrs.trim();
    columns = columns.trim();

    for (let p of params) {
      if (method == "POST")
        args += `${Util.snakeToCamel(p)}, `;
      else
        args += `${Util.snakeToCamel(p)}?, `;
    }
    args = args.trim().slice(0, -1);

    res = res.trim();
    res = res.replace(new RegExp('#i#', 'g'), ini);
    res = res.replace(new RegExp('#Model#', 'g'), cN);
    res = res.replace(new RegExp('#model#', 'g'), cn);
    res = res.replace(new RegExp('#model_n#', 'g'), c_n);
    res = res.replace(new RegExp('#args#', 'g'), args);
    res = res.replace(new RegExp('#filters#', 'g'), filters);
    res = res.replace(new RegExp('#attrs#', 'g'), attrs);
    res = res.replace(new RegExp('#columns#', 'g'), columns);

    return res;
  }
}

export default GenerateRoutes;