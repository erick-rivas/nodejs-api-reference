import { Request, Response } from "express";
import Res from "@util/http/Responses";

import GenerateModels from "@support/controllers/generators/modelGenerator/GenerateModels";
import GenerateMocks from "@support/controllers/generators/modelGenerator/GenerateMocks";
import GenerateMappers from "@support/controllers/generators/modelGenerator/GenerateMappers";
import GenerateRoutes from "@support/controllers/generators/routeGenerator/GenerateRoutes";
import GenerateControllers from "@support/controllers/generators/routeGenerator/GenerateControllers";
import GenerateFactory from "@support/controllers/generators/routeGenerator/GenerateFactory";
import GenerateRepository from "@support/controllers/generators/routeGenerator/GenerateRepository";
import GenerateSource from "@support/controllers/generators/routeGenerator/GenerateSource";


class Generators
{
  async generateFiles(req: Request, res: Response)
  {
    await new GenerateModels().execute();
    await new GenerateMocks().execute();
    await new GenerateMappers().execute();
    await new GenerateRoutes().execute();
    await new GenerateControllers().execute();
    await new GenerateFactory().execute();
    await new GenerateRepository().execute();
    await new GenerateSource().execute();
    return Res.sendOk(res);
  }
}


export default Generators;