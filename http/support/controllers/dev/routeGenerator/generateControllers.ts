import * as fs from 'fs';
import * as path from "path";
import * as zip from "node-zip";

import Executor from './executor';

class GenerateControllers extends Executor
{

  async execute(): Promise<string[]>
  {
    await super.loadData();
    await super.extractData();
    return this.generateTs();
  }

  async generateTs(): Promise<string[]>
  {
    let dir = `${path.dirname(require.main.filename)}/../assets/public/resources/controllers`;
    let paths = [];
    if (!fs.existsSync(dir))
      fs.mkdirSync(dir);

    for (let r of this.resources) {
      let resName = super.snakeToCamel(r);
      let t = this.getTs(resName, this.endpoints[r], this.params[r]);
      let fn = `${dir}/${resName}.ts`;
      paths.push(`/controllers/${resName}.ts`)
      fs.writeFileSync(fn, t);
    }
    return paths;
  }

  getTs(resName: string, endpoints: any[], params: any[]): string
  {
    let res = this.CONTROLLER_TEMPLATE;
    let resNameN = resName.charAt(0).toUpperCase() + resName.slice(1);
    let className = "";
    let content = "";

    for (let e of endpoints) {
      let route = "";
      let endpoint = e.split("|")[0];
      let method = e.split("|")[1].toLowerCase();

      if (method == "get") {
        if (endpoint.endsWith("/:id"))
          route = this.GET_DETAILS_TEMPLATE;
        else
          route = this.GET_LIST_TEMPLATE;
      } else if (method == "post")
        route = this.SAVE_TEMPLATE;
      else if (method == "put")
        route = this.UPDATE_TEMPLATE;
      else if (method == "delete")
        route = this.DELETE_TEMPLATE;

      let params = "";
      for (let p of this.params[e])
        params += `${p},`;

      route = route.trim();
      params = params.slice(0, -1);

      route = route.replace(new RegExp('_resource', 'g'), resNameN);
      route = route.replace(new RegExp('_params', 'g'), params);
      content += `  ${route}\n\n`;
    }

    className = resName.charAt(0).toUpperCase() + resName.slice(1);
    content = content.trim();

    res = res.replace(new RegExp('_className', 'g'), className);
    res = res.replace(new RegExp('_content', 'g'), content);
    return res;
  }


  private CONTROLLER_TEMPLATE = `

import { Request, Response } from "express";
import Sql from "@repositories/sql";
import Res from "@http-util/responses";

class _className
{
  private sql: Sql;

  constructor(sql: Sql)
  {
    this.sql = sql;
  }

  _content
}

export default _className;
    `;

  private GET_DETAILS_TEMPLATE = `

    async getDetails(req: Request, res: Response)
    {
      /*
      const id = req.params.id;
      const result = await this.sql.get_resourceDetails(id);
      return Res.sendModel(res, result);
      */
      return null;
    }
    `

  private GET_LIST_TEMPLATE = `
  
    async getList(req: Request, res: Response)
    {
      /*
      const { _params } = req.query;
      //TODO CHECK QUERY ARGS
      const result = await this.sql.get_resourceList();
      return Res.sendModel(res, result);
      */
      return null;
    }
    `
  private SAVE_TEMPLATE = `
  
    async save(req: Request, res: Response)
    {
      /*
      //TODO CHECK SAVE
      const result = this.sql.save_resource();
      return Res.sendModel(res, result);
      */
     return null;
    }
    `

  private UPDATE_TEMPLATE = `
    
    async update(req: Request, res: Response)
    {
      /*
      const id = req.params.id;
      const { _params } = req.body;
      //TODO CHECK QUERY ARGS
      const result = await this.sql.set_resource();
      return Res.sendModel(res, result);
      */
      return null;
    }
    `

  private DELETE_TEMPLATE = `
    
    async delete(req: Request, res: Response)
    {
      /*
      const id = req.params.id;
      await this.sql.delete_resource(id);
      return Res.sendOk(res);
      */
      return null;
    }
    `
}

export default GenerateControllers;