
import { Request, Response } from "express";
import Sql from "@lt/repositories/Sql";
import Res from "@util/http/responses";

import Player from "@lt/models/Player";
import Generator from "@util/Generator";

class Players
{
  private sql: Sql;

  constructor(sql: Sql)
  {
    this.sql = sql;
  }

  async top(req: Request, res: Response)
  {
    return null;
  }

  async getList(req: Request, res: Response)
  {
    const { team_id } = req.query;
    const result = await this.sql.getPlayerList(team_id);
    return Res.sendList(res, result);
  }

  async update(req: Request, res: Response)
  {
    const id = req.params.id;
    const { team_id } = req.body;
    const result = await this.sql.setPlayer(
      id,
      team_id
    );
    return Res.sendModel(res, result);
  }
}

export default Players;
