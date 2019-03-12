
import { Request, Response } from "express";
import Sql from "@lt/sources/Sql";
import Res from "@util/http/responses";

import Team from "@lt/models/Team";
import Generator from "@util/Generator";

class Teams
{
  private sql: Sql;

  constructor(p: { sql: Sql })
  {
    this.sql = p.sql;
  }

  async getDetails(req: Request, res: Response)
  {
    const id = req.params.id;
    const result = await this.sql.getTeamDetails(id);
    return Res.sendModel(res, result);
  }

  async getList(req: Request, res: Response)
  {
    const { user_id } = req.query;
    const result = await this.sql.getTeamList({
      userId: user_id
    });
    return Res.sendList(res, result);
  }
}

export default Teams;
