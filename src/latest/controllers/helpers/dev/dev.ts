import { Request, Response } from "express";
import Res from "@controllers/helpers/util";

import GenerateModels from "@controllers/helpers/dev/generateModels";
import InitDb from "@controllers/helpers/dev/initDb";


class Dev
{
  async initDb(req: Request, res: Response)
  {
    const initDb = new InitDb();
    await initDb.execute();
    return Res.sendOk(res);
  }

  async generateModels(req: Request, res: Response)
  {
    const input = req.query.input;
    const type = req.query.type ? req.query.type : "ts";
    const generateModels = new GenerateModels(input, type);
    await generateModels.execute();
    return Res.sendOk(res);
  }
}


export default Dev;