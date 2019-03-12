
import { Request, Response } from "express";
import Sql from "@lt/sources/Sql";
import Res from "@util/http/responses";

import Match from "@lt/models/Match";
import Generator from "@util/Generator";

class Matches
{
  private sql: Sql;

  constructor(p: { sql: Sql })
  {
    this.sql = p.sql;
  }

  async getList(req: Request, res: Response)
  {
    const { team_id } = req.query;
    const result = await this.sql.getMatchList({
      teamId: team_id
    });
    return Res.sendList(res, result);
  }

  async save(req: Request, res: Response)
  {
    const { date, type, visitor_id, local_id } = req.body;
    const result = await this.sql.saveMatch({
      date: date,
      type: type,
      visitorId: visitor_id,
      localId: local_id
    });
    return Res.sendModel(res, result);
  }

  async update(req: Request, res: Response)
  {
    const id = req.params.id;
    const { type } = req.body;
    const result = await this.sql.setMatch(id, {
      type: type
    });
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
