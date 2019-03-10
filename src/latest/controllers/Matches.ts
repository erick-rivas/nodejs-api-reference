
import { Request, Response } from "express";
import Sql from "@lt/sources/Sql";
import Res from "@util/http/responses";

import Match from "@lt/models/Match";
import Generator from "@util/Generator";

class Matches
{
  private sql: Sql;

  constructor(sql: Sql)
  {
    this.sql = sql;
  }

  async getList(req: Request, res: Response)
  {
    // TODO CHECK FILTERS
    const { } = req.query;
    const result = await this.sql.getMatchList();
    return Res.sendList(res, result);
  }

  async save(req: Request, res: Response)
  {
    // TODO CHECK BUILD
    const match = new Match(Generator.getId());

    const result = await this.sql.saveMatch(match);
    return Res.sendModel(res, result);
  }

  async update(req: Request, res: Response)
  {
    //TODO CHECK ARGS
    const id = req.params.id;
    const { } = req.body;
    const result = await this.sql.setMatch(
      id
    );
    return Res.sendModel(res, result);
  }

  async delete(req: Request, res: Response)
  {
    const id = req.params.id;
    await this.sql.deleteMatch(id);
    return Res.sendOk(res);
  }
}

export default Matches;
