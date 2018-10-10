import { Request, Response, Next } from "express";
import Res from "@middlewares/responses";

class Authentication
{
  constructor() { }

  async authenticate(req: Request, res: Response, next: Next)
  {
    Res.next(next);
  }
}

export default Authentication;