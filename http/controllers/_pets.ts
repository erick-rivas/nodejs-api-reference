import { Request, Response } from "express";
import { Generator } from "@models/Util";

import Sql from "@sql/_Source";

import Util from "./util";


class Pets
{
  private sql: Sql;

  constructor()
  {
    this.sql = Sql.getInstance();
  }

  async getPet(req: Request, res: Response)
  {
    const id = req.params.id;
    const pet = await this.sql.getPetDetails(id);
    return Util.sendModel(res, pet);
  }

  async getPets(req: Request, res: Response)
  {
    const pets = await this.sql.getPetList();
    return Util.sendList(res, pets);
  }

  async savePet(req: Request, res: Response)
  {
    return Util.sendModel(res, null);
  }

  async updatePet(req: Request, res: Response)
  {
    return Util.sendModel(res, null);
  }

  async deletePet(req: Request, res: Response)
  {
    return Util.sendOk(res);
  }
}

export default Pets;