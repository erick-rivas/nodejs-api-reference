import * as fs from 'fs';
import Executor from './executor';

class GenerateRoutes extends Executor
{
  async generateTs()
  {
    let dir = `${super.getDir()}`;
    let res = this.REPOSITORY_TEMPLATE.toString().trim();
    let imports = "";
    let content = "";

    for (let r of this.resources) {
      let cn = super.snakeToCamel(this.classes[r]);
      let cN = cn.charAt(0).toUpperCase() + cn.slice(1);
      imports += `import ${cN} from "@models/${cN}";\n`;

      for (let e of this.endpoints[r]) {
        let route = `    ${this.getQuery(cn, e, this.params[e])}\n`;
        content += route;
      }
    }

    imports = imports.trim();
    content = content.trim();

    res = res.replace(new RegExp('_imports', 'g'), imports);
    res = res.replace(new RegExp('_content', 'g'), content);

    fs.writeFileSync(`${dir}/Sql.ts`, res);
  }

  getQuery(className: string, endpointData: string, params: string[])
  {
    let endpoint = endpointData.split("|")[0];
    let method = endpointData.split("|")[1].toLowerCase();
    let cn = className;
    let cN = cn.charAt(0).toUpperCase() + cn.slice(1);

    let res = "";
    if (method == "get") {
      if (endpoint.endsWith("/:id"))
        res = this.GET_DETAILS_TEMPLATE;
      else
        res = this.GET_LIST_TEMPLATE;
    } else if (method == "post")
      res = this.SAVE_TEMPLATE;
    else if (method == "put")
      res = this.SET_TEMPLATE;
    else if (method == "delete")
      res = this.DELETE_TEMPLATE;

    let args = "";
    for (let p of params)
      args += `${super.snakeToCamel(p)},`

    res = res.trim();
    args = args.slice(0, -1);

    res = res.replace(new RegExp('_args', 'g'), args);
    res = res.replace(new RegExp('_model', 'g'), cn);
    res = res.replace(new RegExp('_Model', 'g'), cN);

    return res;
  }

  private REPOSITORY_TEMPLATE = `

  _imports
  
  interface Sql
  {
    _content
  }
  
  export default Sql;
  `;

  private GET_LIST_TEMPLATE = `
    get_ModelList(_args): Promise<_Model[]>;
  `;

  private GET_DETAILS_TEMPLATE = `
    get_ModelDetails(_modelId: number): Promise<_Model>;
  `;

  private SAVE_TEMPLATE = `
    save_Model(_model: _Model): Promise<_Model>;
  `;

  private SET_TEMPLATE = `
    set_Model(_modelId: number, _args): Promise<_Model>;
  `;

  private DELETE_TEMPLATE = `
    delete_Model(_modelId: number): Promise<void>;
  `;

}

export default GenerateRoutes;