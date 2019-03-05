import { Request, Response } from "express";
import Res from "@controllers/helpers/util";
import * as fs from 'fs';
import * as path from "path";

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