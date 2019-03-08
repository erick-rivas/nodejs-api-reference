import * as fs from 'fs';
import Executor from './executor';

class GenerateControllers extends Executor
{
  async generateTs()
  {
    let dir = `${super.getDir()}/controllers`;
    if (!fs.existsSync(dir))
      fs.mkdirSync(dir);

    for (let r of this.resources) {
      let resName = super.snakeToCamel(r);
      let t = this.getTs(resName, this.classes[r], this.endpoints[r], this.params[r]);
      let fn = `${dir}/${resName}.ts`;
      fs.writeFileSync(fn, t);
    }
  }

  getTs(resName: string, className: string, endpoints: any[], params: any[]): string
  {
    let res = this.CONTROLLER_TEMPLATE;
    let resNameN = resName.charAt(0).toUpperCase() + resName.slice(1);
    let fileName = "";
    let cn = super.snakeToCamel(className);
    let cN = cn.charAt(0).toUpperCase() + cn.slice(1);
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
      let args = "";
      for (let p of this.params[e]) {
        params += `${p},`;
        args += `        ${p},\n`
      }

      route = route.trim();
      params = params.slice(0, -1);
      args = args.trim().slice(0, -1);

      route = route.replace(new RegExp('_model', 'g'), cn);
      route = route.replace(new RegExp('_Model', 'g'), cN);
      route = route.replace(new RegExp('_params', 'g'), params);
      route = route.replace(new RegExp('_args', 'g'), args);

      content += `  ${route}\n\n`;
    }

    fileName = resName.charAt(0).toUpperCase() + resName.slice(1);
    content = content.trim();

    res = res.replace(new RegExp('_className', 'g'), fileName);
    res = res.replace(new RegExp('_content', 'g'), content);
    return res;
  }


  private CONTROLLER_TEMPLATE = `

import { Request, Response } from "express";
import Sql from "@repositories/sql";
import Res from "@http-util/responses";

import Generator from "@src-util/Generator"

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
      const result = await this.sql.get_ModelDetails(id);
      return Res.sendModel(res, result);
      */
      return null;
    }
  `;

  private GET_LIST_TEMPLATE = `
  
    async getList(req: Request, res: Response)
    {
      /*
      const { _params } = req.query;
      //TODO CHECK QUERY ARGS
      const result = await this.sql.get_ModelList(_params
);
      return Res.sendModel(res, result);
      */
      return null;
    }
  `;

  private SAVE_TEMPLATE = `
  
    async save(req: Request, res: Response)
    {
      /*
      //TODO CHECK SAVE
      const _model = new _Model(Generator.getId())
        .build(
        );
      const result = this.sql.save_Model(_model);
      return Res.sendModel(res, result);
      */
     return null;
    }
  `;

  private UPDATE_TEMPLATE = `
    
    async update(req: Request, res: Response)
    {
      /*
      const id = req.params.id;
      const { _params } = req.body;
      //TODO CHECK QUERY ARGS
      const result = await this.sql.set_Model(
        id,
        _args
        );
      return Res.sendModel(res, result);
      */
      return null;
    }
  `;

  private DELETE_TEMPLATE = `
    
    async delete(req: Request, res: Response)
    {
      /*
      const id = req.params.id;
      await this.sql.delete_Model(id);
      return Res.sendOk(res);
      */
      return null;
    }
  `;

}

export default GenerateControllers;