import { Request, Response } from "express";
import Mocks from "@models/helpers/Mocks"
import Res from "@http-util/Responses";


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