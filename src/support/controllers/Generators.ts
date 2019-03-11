import * as archiver from "archiver";
import * as fs from 'fs';
import * as path from "path";

import { Request, Response } from "express";
import Res from "@util/http/Responses";

import GenerateModels from "@support/controllers/generators/modelGenerator/GenerateModels";
import GenerateMocks from "@support/controllers/generators/modelGenerator/GenerateMocks";
import GenerateConsts from "@support/controllers/generators/modelGenerator/GenerateConsts";
import GenerateMappers from "@support/controllers/generators/modelGenerator/GenerateMappers";
import GenerateRoutes from "@support/controllers/generators/routeGenerator/GenerateRoutes";
import GenerateControllers from "@support/controllers/generators/routeGenerator/GenerateControllers";
import GenerateFactory from "@support/controllers/generators/routeGenerator/GenerateFactory";
import GenerateRepository from "@support/controllers/generators/routeGenerator/GenerateRepository";
import GenerateSource from "@support/controllers/generators/routeGenerator/GenerateSource";
import GenerateDefaults from "@support/controllers/generators/defaultGenerator/GenerateDefaults";


class Generators
{

  async generateFiles(req: Request, res: Response)
  {
    await this.generate();
    let root = `${path.dirname(require.main.filename)}/../assets`;
    let source = `${root}/dev/gen`;
    let output = `${root}/public/resources/gen.zip`;
    await this.zipDir(source, output);
    return Res.redirect(res, req, "/resources/gen.zip");
  }

  async generate()
  {
    await this.restartDir();
    await new GenerateModels().execute();
    await new GenerateMocks().execute();
    await new GenerateConsts().execute();
    await new GenerateMappers().execute();
    await new GenerateRoutes().execute();
    await new GenerateControllers().execute();
    await new GenerateFactory().execute();
    await new GenerateRepository().execute();
    await new GenerateSource().execute();
    await new GenerateDefaults().execute();
  }

  async restartDir()
  {
    let root = `${path.dirname(require.main.filename)}/../assets`;
    let dir = `${root}/dev/gen`;
    await this.rmDir(dir);
    await fs.mkdirSync(dir);
  }

  rmDir = (dir) =>
  {
    try { var files = fs.readdirSync(dir); }
    catch (e) { return; }
    if (files.length > 0)
      for (var i = 0; i < files.length; i++) {
        var filePath = dir + '/' + files[i];
        if (fs.statSync(filePath).isFile())
          fs.unlinkSync(filePath);
        else
          this.rmDir(filePath);
      }
    fs.rmdirSync(dir);
  }

  async zipDir(source, out): Promise<any>
  {
    const archive = archiver('zip', { zlib: { level: 9 } });
    const stream = fs.createWriteStream(out);
    return new Promise((resolve, reject) =>
    {
      archive
        .directory(source, false)
        .on('error', err => reject(err))
        .pipe(stream);
      stream.on('close', () => resolve());
      archive.finalize();
    });
  }

}


export default Generators;