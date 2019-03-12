
import { Request, Response } from "express";
import Sql from "@lt/sources/Sql";
import Res from "@util/http/responses";

import User from "@lt/models/User";
import Generator from "@util/Generator";

class Users
{
  private sql: Sql;

  constructor(p: { sql: Sql })
  {
    this.sql = p.sql;
  }

  async auth(req: Request, res: Response)
  {
    const { email, password } = req.query;
    const result = await this.sql.getUserAuth(email, password);
    return Res.sendModel(res, result);
  }

  async getDetails(req: Request, res: Response)
  {
    const id = req.params.id;
    const result = await this.sql.getUserDetails(id);
    return Res.sendModel(res, result);
  }
}

export default Users;
