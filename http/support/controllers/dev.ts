import { Request, Response } from "express";
import Res from "@http-util/responses";
import GenerateFiles from "@support/controllers/dev/generateFiles";

import InitDb from "@support/controllers/dev/initDb";


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
    const generateFiles = new GenerateFiles();
    let fileName = await generateFiles.execute("all");
    return Res.redirect(res, req, `/resources/${fileName}`);
  }

  async generateModels(req: Request, res: Response)
  {
    const generateModels = new GenerateFiles();
    let fileName = await generateModels.execute("models");
    return Res.redirect(res, req, `/resources/${fileName}`);
  }

  async generateMappers(req: Request, res: Response)
  {
    const generateMappers = new GenerateFiles();
    let fileName = await generateMappers.execute("mappers");
    return Res.redirect(res, req, `/resources/${fileName}`);
  }

  async generateRoutes(req: Request, res: Response)
  {
    const generateRoutes = new GenerateFiles();
    let fileName = await generateRoutes.execute("routes");
    return Res.redirect(res, req, `/resources/${fileName}`);
  }

  async generateControllers(req: Request, res: Response)
  {
    const generateControllers = new GenerateFiles();
    let fileName = await generateControllers.execute("controllers");
    return Res.redirect(res, req, `/resources/${fileName}`);
  }
}


export default Dev;