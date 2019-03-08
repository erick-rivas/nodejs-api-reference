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
        let route = `    ${this.getQuery(cn, e, this.params[e])}\n\n`;
        content += route;
      }
    }

    imports = imports.trim();
    content = content.trim();

    res = res.replace(new RegExp('_imports', 'g'), imports);
    res = res.replace(new RegExp('_content', 'g'), content);

    fs.writeFileSync(`${dir}/Source.ts`, res);
  }

  getQuery(className: string, endpointData: string, params: string[])
  {
    let endpoint = endpointData.split("|")[0];
    let method = endpointData.split("|")[1].toLowerCase();
    let cn = className;
    let cN = cn.charAt(0).toUpperCase() + cn.slice(1);
    let ini = cn.charAt(0);

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
    res = res.replace(new RegExp('_ini', 'g'), ini);
    res = res.replace(new RegExp('_model', 'g'), cn);
    res = res.replace(new RegExp('_cmodel', 'g'), super.camelToSnake(cn));
    res = res.replace(new RegExp('_Model', 'g'), cN);

    return res;
  }

  private REPOSITORY_TEMPLATE = `

import Repository from "@repositories/sql";
import { Pair } from "@src-util/Util";
_imports

import Executor from "@sql/Executor";
import * as Mapper from "@sql/Mappers";

class Source extends Executor implements Repository
{
  _content

  private static instance: Source;
  private constructor() { super(); }
  static getInstance(): Source { return this.instance || (this.instance = new this()); }
}

export default Source;
  `;

  private GET_LIST_TEMPLATE = `
    async get_ModelList(_args): Promise<_Model[]>
    {
      const query =
        \`SELECT _ini.* FROM _cmodel _ini\`;
      const filter = [];
      //TODO FILTERS
      const res = await this.get(query, filter, new Mapper._ModelMapper());
      return res; 
    }
  `;


  private GET_DETAILS_TEMPLATE = `
    async get_ModelDetails(_modelId: number): Promise<_Model>
    {
      const query =
        \`SELECT _ini.* FROM _cmodel _ini WHERE _ini._cmodel_id = ?\`;
      const params = [_modelId];
      const res = await this.getDetails(query, params, new Mapper._ModelMapper());
      return res[0];
    }
  `;

  private SAVE_TEMPLATE = `
    async save_Model(_model: _Model): Promise<_Model>
    {
      //TODO
    }
  `;

  private SET_TEMPLATE = `
    async set_Model(_modelId: number, _args): Promise<_Model>
    {
      const query = "UPDATE _cmodel";
      const columns = [];
      //TODO COLUMNS
      await this.set(query, columns, "_cmodel_id", _modelId);
      return this.get_ModelDetails(_modelId);
    }
  `;

  private DELETE_TEMPLATE = `
    async delete_Model(_modelId: number): Promise<void>
    {
      const query =
        "DELETE FROM _cmodel WHERE _cmodel_id = ?;"
      const params = [_modelId];
      return this.delete(query, params);
    }
  `;
}

export default GenerateRoutes;