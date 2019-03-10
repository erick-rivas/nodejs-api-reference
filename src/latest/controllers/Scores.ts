
import { Request, Response } from "express";
import Sql from "@lt/sources/Sql";
import Res from "@util/http/responses";

import Score from "@lt/models/Score";
import Generator from "@util/Generator";
import Player from "@lt/models/Player";

class Scores
{
  private sql: Sql;

  constructor(sql: Sql)
  {
    this.sql = sql;
  }

  async save(req: Request, res: Response)
  {
    const { min, match_id, player_id } = req.body;
    const score = new Score(Generator.getId())
      .build(
        min,
        match_id,
        new Player(player_id)
      );

    const result = await this.sql.saveScore(score);
    return Res.sendModel(res, result);
  }
}

export default Scores;
