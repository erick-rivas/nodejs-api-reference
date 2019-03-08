import { Request, Response } from "express";
import Res from "@http-util/responses";
import InitDb from "@support/controllers/dev/initDb";

import GenerateModels from "@support/controllers/dev/modelGenerator/generateModels";
import GenerateMappers from "@support/controllers/dev/modelGenerator/generateMappers";
import GenerateRoutes from "@support/controllers/dev/routeGenerator/generateRoutes";
import GenerateControllers from "@support/controllers/dev/routeGenerator/generateControllers";
import GenerateFactory from "@support/controllers/dev/routeGenerator/generateFactory";
import GenerateRepository from "@support/controllers/dev/routeGenerator/generateRepository";
import GenerateSource from "@support/controllers/dev/routeGenerator/generateSource";


class Dev
{
  async initDb(req: Request, res: Response)
  {
    const initDb = new InitDb();
    await initDb.execute();
    return Res.sendOk(res);
  }

  async generateFiles(req: Request, res: Response)
  {
    await new GenerateModels().execute();
    await new GenerateMappers().execute();
    await new GenerateRoutes().execute();
    await new GenerateControllers().execute();
    await new GenerateFactory().execute();
    await new GenerateRepository().execute();
    await new GenerateSource().execute();
    return Res.sendOk(res);
  }
}


export default Dev;