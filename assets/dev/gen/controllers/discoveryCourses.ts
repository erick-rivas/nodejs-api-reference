

import { Request, Response } from "express";
import Sql from "@repositories/sql";
import Res from "@http-util/responses";

import Generator from "@src-util/Generator"

class DiscoveryCourses
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
      const result = await this.sql.getDiscoveryCourseList(
);
      return Res.sendModel(res, result);
      */
      return null;
    }

  async save(req: Request, res: Response)
    {
      /*
      //TODO CHECK SAVE
      const discoveryCourse = new DiscoveryCourse(Generator.getId())
        .build(
        );
      const result = this.sql.saveDiscoveryCourse(discoveryCourse);
      return Res.sendModel(res, result);
      */
     return null;
    }

  async getDetails(req: Request, res: Response)
    {
      /*
      const id = req.params.id;
      const result = await this.sql.getDiscoveryCourseDetails(id);
      return Res.sendModel(res, result);
      */
      return null;
    }

  async update(req: Request, res: Response)
    {
      /*
      const id = req.params.id;
      const { l_name } = req.body;
      //TODO CHECK QUERY ARGS
      const result = await this.sql.setDiscoveryCourse(
        id,
        l_name
        );
      return Res.sendModel(res, result);
      */
      return null;
    }

  async delete(req: Request, res: Response)
    {
      /*
      const id = req.params.id;
      await this.sql.deleteDiscoveryCourse(id);
      return Res.sendOk(res);
      */
      return null;
    }
}

export default DiscoveryCourses;
  