import { Request, Response } from "express";
import Res from "@controllers/util";

import GenerateModels from "@extensions/dev/generateModels";
import RestartDb from "@extensions/dev/restartDb";


class Dev
{
  async restart(req: Request, res: Response)
  {
    const restartDb = new RestartDb();
    await restartDb.execute();
    return Res.sendOk(res);
  }

  async generate(req: Request, res: Response)
  {
    const input = req.query.input;
    const type = req.query.type ? req.query.type : "ts";
    const generateModels = new GenerateModels(input, type);
    await generateModels.execute();
    return Res.sendOk(res);
  }
}


export default Dev;