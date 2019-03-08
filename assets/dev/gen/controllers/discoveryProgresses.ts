

import { Request, Response } from "express";
import Sql from "@repositories/sql";
import Res from "@http-util/responses";

import Generator from "@src-util/Generator"

class DiscoveryProgresses
{
  private sql: Sql;

  constructor(sql: Sql)
  {
    this.sql = sql;
  }

  async getList(req: Request, res: Response)
    {
      /*
      const {  } = req.query;
      //TODO CHECK QUERY ARGS
      const result = await this.sql.getDiscoveryProgressList(
);
      return Res.sendModel(res, result);
      */
      return null;
    }

  async save(req: Request, res: Response)
    {
      /*
      //TODO CHECK SAVE
      const discoveryProgress = new DiscoveryProgress(Generator.getId())
        .build(
        );
      const result = this.sql.saveDiscoveryProgress(discoveryProgress);
      return Res.sendModel(res, result);
      */
     return null;
    }

  async getDetails(req: Request, res: Response)
    {
      /*
      const id = req.params.id;
      const result = await this.sql.getDiscoveryProgressDetails(id);
      return Res.sendModel(res, result);
      */
      return null;
    }

  async delete(req: Request, res: Response)
    {
      /*
      const id = req.params.id;
      await this.sql.deleteDiscoveryProgress(id);
      return Res.sendOk(res);
      */
      return null;
    }

  async update(req: Request, res: Response)
    {
      /*
      const id = req.params.id;
      const { value } = req.body;
      //TODO CHECK QUERY ARGS
      const result = await this.sql.setDiscoveryProgress(
        id,
        value
        );
      return Res.sendModel(res, result);
      */
      return null;
    }
}

export default DiscoveryProgresses;
  