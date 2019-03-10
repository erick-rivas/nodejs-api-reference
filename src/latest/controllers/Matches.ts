
import { Request, Response } from "express";
import Sql from "@lt/sources/Sql";
import Res from "@util/http/responses";

import Match from "@lt/models/Match";
import Generator from "@util/Generator";
import Team from "@lt/models/Team";

class Matches
{
  private sql: Sql;

  constructor(sql: Sql)
  {
    this.sql = sql;
  }

  async getList(req: Request, res: Response)
  {
    const { team_id } = req.query;
    const result = await this.sql.getMatchList(team_id);
    return Res.sendList(res, result);
  }

  async save(req: Request, res: Response)
  {
    const { date, type, visitor_id, local_id } = req.body;
    const match = new Match(Generator.getId())
      .build(
        date,
        Match.getMType(type),
        new Team(visitor_id),
        new Team(local_id),
        []
      );
    const result = await this.sql.saveMatch(match);
    return Res.sendModel(res, result);
  }

  async update(req: Request, res: Response)
  {
    const id = req.params.id;
    const { type } = req.body;
    const result = await this.sql.setMatch(
      id,
      Match.getMType(type)
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
