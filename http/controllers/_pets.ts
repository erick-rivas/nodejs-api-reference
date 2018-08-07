import { Request, Response } from "express";
import { Generator } from "@models/Util";

import Sql from "@sql/_Source";
import Res from "./responses";


class Pets
{
  private sql: Sql;

  constructor()
  {
    this.sql = Sql.getInstance();
  }

  async getDetails(req: Request, res: Response)
  {
    const id = req.params.id;
    const pet = await this.sql.getPetDetails(id);
    return Res.sendModel(res, pet);
  }

  async getList(req: Request, res: Response)
  {
    const pets = await this.sql.getPetList();
    return Res.sendList(res, pets);
  }

  async save(req: Request, res: Response)
  {
    return Res.sendModel(res, null);
  }

  async update(req: Request, res: Response)
  {
    return Res.sendModel(res, null);
  }

  async delete(req: Request, res: Response)
  {
    return Res.sendOk(res);
  }
}

export default Pets;