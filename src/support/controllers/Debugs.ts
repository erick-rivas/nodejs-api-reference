import { Request, Response } from "express";
import Res from "@util/http/Responses";
import Errors from "@util/http/Errors";

import InitDb from "@support/controllers/debugs/InitDb";

class Debugs
{
  async initDb(req: Request, res: Response)
  {
    const isDebug = process.env.IS_DEBUG == null ||
      process.env.IS_DEBUG.toLowerCase() == "true";
    
    //Validation
    if (!isDebug) {
      let key = req.query.key;
      if (key != process.env.DEV_SECRET)
        return Errors.sendUnauthorized(res);
    }

    const initDb = new InitDb();
    await initDb.execute();
    return Res.sendOk(res);
  }
}

export default Debugs;