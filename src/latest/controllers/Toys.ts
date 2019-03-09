import { Request, Response } from "express";
import Mocks from "@lt/models/helpers/Mocks"
import Res from "@util/http/Responses";

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