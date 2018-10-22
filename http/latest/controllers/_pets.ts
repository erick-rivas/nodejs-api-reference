import { Request, Response } from "express";
import Sql from "@repositories/_sql";
import Res from "@http/controllers/util";
import Mocks from "@models/_Mocks";


class Pets
{
  private sql: Sql;

  constructor(sql: Sql)
  {
    this.sql = sql;
  }

  async getDetails(req: Request, res: Response)
  {
    const id = req.params.id;
    const result = await this.sql.getPetDetails(id);
    return Res.sendModel(res, result);
  }

  async getList(req: Request, res: Response)
  {
    const result = await this.sql.getPetList();
    return Res.sendList(res, result);
  }

  async save(req: Request, res: Response)
  {
    const result = Mocks.Pets()[0];
    return Res.sendModel(res, result);
  }

  async update(req: Request, res: Response)
  {
    const result = Mocks.Pets()[0];
    return Res.sendModel(res, result);
  }

  async delete(req: Request, res: Response)
  {
    return Res.sendOk(res);
  }
}

export default Pets;