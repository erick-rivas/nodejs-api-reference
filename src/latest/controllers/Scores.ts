
import { Request, Response } from "express";
import Sql from "@lt/sources/Sql";
import Res from "@util/http/responses";

import Score from "@lt/models/Score";
import Generator from "@util/Generator";

class Scores
{
  private sql: Sql;

  constructor(sql: Sql)
  {
    this.sql = sql;
  }

  async save(req: Request, res: Response)
  {
    // TODO CHECK BUILD
    const score = new Score(Generator.getId());

    const result = await this.sql.saveScore(score);
    return Res.sendModel(res, result);
  }
}

export default Scores;
