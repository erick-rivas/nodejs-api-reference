import { Request, Response } from "express";
import Mocks from "@models/_Mocks"

import Res from "./responses";

class Pets
{
  async getList(req: Request, res: Response)
  {
    return Res.sendList(res, Mocks.Toys());
  }
}

export default Pets;