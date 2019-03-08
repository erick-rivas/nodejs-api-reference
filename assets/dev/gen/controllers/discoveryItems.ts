

import { Request, Response } from "express";
import Sql from "@repositories/sql";
import Res from "@http-util/responses";

import Generator from "@src-util/Generator"

class DiscoveryItems
{
  private sql: Sql;

  constructor(sql: Sql)
  {
    this.sql = sql;
  }

  async getList(req: Request, res: Response)
    {
      /*
      const { course_id,section_id } = req.query;
      //TODO CHECK QUERY ARGS
      const result = await this.sql.getDiscoveryItemList(course_id,section_id
);
      return Res.sendModel(res, result);
      */
      return null;
    }

  async save(req: Request, res: Response)
    {
      /*
      //TODO CHECK SAVE
      const discoveryItem = new DiscoveryItem(Generator.getId())
        .build(
        );
      const result = this.sql.saveDiscoveryItem(discoveryItem);
      return Res.sendModel(res, result);
      */
     return null;
    }

  async getDetails(req: Request, res: Response)
    {
      /*
      const id = req.params.id;
      const result = await this.sql.getDiscoveryItemDetails(id);
      return Res.sendModel(res, result);
      */
      return null;
    }

  async update(req: Request, res: Response)
    {
      /*
      const id = req.params.id;
      const { index,video_url,video_id,source,section_index,l_text,l_title } = req.body;
      //TODO CHECK QUERY ARGS
      const result = await this.sql.setDiscoveryItem(
        id,
        index,
        video_url,
        video_id,
        source,
        section_index,
        l_text,
        l_title
        );
      return Res.sendModel(res, result);
      */
      return null;
    }

  async delete(req: Request, res: Response)
    {
      /*
      const id = req.params.id;
      await this.sql.deleteDiscoveryItem(id);
      return Res.sendOk(res);
      */
      return null;
    }
}

export default DiscoveryItems;
  