
import { Request, Response } from "express";
import Sql from "@lt/sources/Sql";
import Res from "@util/http/responses";

import Player from "@lt/models/Player";
import Generator from "@util/Generator";

class Players
{
  private sql: Sql;

  constructor(p: { sql: Sql })
  {
    this.sql = p.sql;
  }

  async top(req: Request, res: Response)
  {
    return null;
  }

  async getList(req: Request, res: Response)
  {
    const { team_id } = req.query;
    const result = await this.sql.getPlayerList({
      teamId: team_id
    });
    return Res.sendList(res, result);
  }

  async update(req: Request, res: Response)
  {
    const id = req.params.id;
    const { team_id } = req.body;
    const result = await this.sql.setPlayer(id, {
      teamId: team_id
    });
    return Res.sendModel(res, result);
  }
}

export default Players;
