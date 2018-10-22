import { Request, Response } from "express";
import Mocks from "@models/_Mocks"
import Res from "@http/controllers/util";

class Toys
{
  constructor() { }

  async getList(req: Request, res: Response)
  {
    const result = Mocks.Toys();
    return Res.sendList(res, result);
  }
}

export default Toys;