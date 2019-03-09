import { Request, Response } from "express";
import Res from "@util/http/Responses";
import InitDb from "@support/controllers/debugs/InitDb";

class Debugs
{
  async initDb(req: Request, res: Response)
  {
    const initDb = new InitDb();
    await initDb.execute();
    return Res.sendOk(res);
  }
}


export default Debugs;