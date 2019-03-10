
import { Request, Response } from "express";
import Sql from "@lt/sources/Sql";
import Res from "@util/http/responses";

import Team from "@lt/models/Team";
import Generator from "@util/Generator";

class Teams
{
  private sql: Sql;

  constructor(sql: Sql)
  {
    this.sql = sql;
  }

  async getDetails(req: Request, res: Response)
  {
    const id = req.params.id;
    const result = await this.sql.getTeamDetails(id);
    return Res.sendModel(res, result);
  }

  async getList(req: Request, res: Response)
  {
    // TODO CHECK FILTERS
    const { } = req.query;
    const result = await this.sql.getTeamList();
    return Res.sendList(res, result);
  }
}

export default Teams;
