
import { Request, Response } from "express";
import Sql from "@lt/sources/Sql";
import Res from "@util/http/responses";

import Score from "@lt/models/Score";
import Generator from "@util/Generator";

class Scores
{
  private sql: Sql;

  constructor(p: { sql: Sql })
  {
    this.sql = p.sql;
  }

  async save(req: Request, res: Response)
  {
    const { min, match_id, player_id } = req.body;
    const result = await this.sql.saveScore({
      min: min,
      matchId: match_id,
      playerId: player_id
    });
    return Res.sendModel(res, result);
  }
}

export default Scores;
