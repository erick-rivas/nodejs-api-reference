

import { Request, Response } from "express";
import Sql from "@repositories/sql";
import Res from "@http-util/responses";

import Generator from "@src-util/Generator"

class DiscoverySections
{
  private sql: Sql;

  constructor(sql: Sql)
  {
    this.sql = sql;
  }

  async getList(req: Request, res: Response)
    {
      /*
      const { course_id } = req.query;
      //TODO CHECK QUERY ARGS
      const result = await this.sql.getDiscoverySectionList(course_id
);
      return Res.sendModel(res, result);
      */
      return null;
    }

  async save(req: Request, res: Response)
    {
      /*
      //TODO CHECK SAVE
      const discoverySection = new DiscoverySection(Generator.getId())
        .build(
        );
      const result = this.sql.saveDiscoverySection(discoverySection);
      return Res.sendModel(res, result);
      */
     return null;
    }

  async getDetails(req: Request, res: Response)
    {
      /*
      const id = req.params.id;
      const result = await this.sql.getDiscoverySectionDetails(id);
      return Res.sendModel(res, result);
      */
      return null;
    }

  async update(req: Request, res: Response)
    {
      /*
      const id = req.params.id;
      const { index,l_name,l_description,course_id } = req.body;
      //TODO CHECK QUERY ARGS
      const result = await this.sql.setDiscoverySection(
        id,
        index,
        l_name,
        l_description,
        course_id
        );
      return Res.sendModel(res, result);
      */
      return null;
    }

  async delete(req: Request, res: Response)
    {
      /*
      const id = req.params.id;
      await this.sql.deleteDiscoverySection(id);
      return Res.sendOk(res);
      */
      return null;
    }
}

export default DiscoverySections;
  