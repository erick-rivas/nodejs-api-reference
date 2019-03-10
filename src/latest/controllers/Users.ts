
import { Request, Response } from "express";
import Sql from "@lt/sources/Sql";
import Res from "@util/http/responses";

import User from "@lt/models/User";
import Generator from "@util/Generator";

class Users
{
  private sql: Sql;

  constructor(sql: Sql)
  {
    this.sql = sql;
  }

  async getDetails(req: Request, res: Response)
  {
    const id = req.params.id;
    const result = await this.sql.getUserDetails(id);
    return Res.sendModel(res, result);
  }

  async auth(req: Request, res: Response)
  {
    return null;
  }
}

export default Users;
