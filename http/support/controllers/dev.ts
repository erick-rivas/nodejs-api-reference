import { Request, Response } from "express";
import Res from "@http-util/responses";
import GenerateModels from "@support/controllers/dev/modelGenerator/generateModels";
import GenerateMappers from "@support/controllers/dev/modelGenerator/generateMappers";
import GenerateRoutes from "@support/controllers/dev/routeGenerator/generateRoutes";
import GenerateControllers from "@support/controllers/dev/routeGenerator/generateControllers";

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
    const generateModels = new GenerateModels();
    await generateModels.execute();
    return Res.sendOk(res);
  }

  async generateMappers(req: Request, res: Response)
  {
    const generateMappers = new GenerateMappers();
    await generateMappers.execute();
    return Res.sendOk(res);
  }

  async generateRoutes(req: Request, res: Response)
  {
    const generateRoutes = new GenerateRoutes();
    await generateRoutes.execute();
    return Res.sendOk(res);
  }

  async generateControllers(req: Request, res: Response)
  {
    const generateControllers = new GenerateControllers();
    await generateControllers.execute();
    return Res.sendOk(res);
  }
}


export default Dev;