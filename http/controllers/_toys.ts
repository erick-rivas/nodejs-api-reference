import { Request, Response } from "express";
import Mocks from "@models/_Mocks"

import Util from "./util";

class Pets
{
  constructor() { }

  async getToys(req: Request, res: Response)
  {
    return Util.sendList(res, Mocks.Toys());
  }
}

export default Pets;