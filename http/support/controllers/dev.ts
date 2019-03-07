import { Request, Response } from "express";
import * as fs from 'fs';
import * as path from "path";

import Res from "@http-util/responses";
import GenerateModels from "@support/controllers/dev/generateModels";
import InitDb from "@support/controllers/dev/initDb";


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
    let input = req.query.input;
    if (!input) {
      let dir = `${path.dirname(require.main.filename)}/../assets/dev`;
      input = fs.readFileSync(`${dir}/generator-template.csv`, 'utf8');
    }
    const type = req.query.type ? req.query.type : "ts";
    const generateModels = new GenerateModels(input, type);
    await generateModels.execute();
    return Res.sendOk(res);
  }
}


export default Dev;