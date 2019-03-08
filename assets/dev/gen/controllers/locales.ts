

import { Request, Response } from "express";
import Sql from "@repositories/sql";
import Res from "@http-util/responses";

import Generator from "@src-util/Generator"

class Locales
{
  private sql: Sql;

  constructor(sql: Sql)
  {
    this.sql = sql;
  }

  async getList(req: Request, res: Response)
    {
      /*
      const { lang } = req.query;
      //TODO CHECK QUERY ARGS
      const result = await this.sql.getLocaleList(lang
);
      return Res.sendModel(res, result);
      */
      return null;
    }

  async save(req: Request, res: Response)
    {
      /*
      //TODO CHECK SAVE
      const locale = new Locale(Generator.getId())
        .build(
        );
      const result = this.sql.saveLocale(locale);
      return Res.sendModel(res, result);
      */
     return null;
    }

  async getDetails(req: Request, res: Response)
    {
      /*
      const id = req.params.id;
      const result = await this.sql.getLocaleDetails(id);
      return Res.sendModel(res, result);
      */
      return null;
    }

  async delete(req: Request, res: Response)
    {
      /*
      const id = req.params.id;
      await this.sql.deleteLocale(id);
      return Res.sendOk(res);
      */
      return null;
    }

  async update(req: Request, res: Response)
    {
      /*
      const id = req.params.id;
      const { value,lang_id } = req.body;
      //TODO CHECK QUERY ARGS
      const result = await this.sql.setLocale(
        id,
        value,
        lang_id
        );
      return Res.sendModel(res, result);
      */
      return null;
    }
}

export default Locales;
  