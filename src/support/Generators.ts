import * as archiver from "archiver";
import * as fs from 'fs';
import * as path from "path";

import { Request, Response } from "express";
import Res from "@util/http/Responses";

import GenApiModels from "@support/gens/models/api/GenModels";
import GenApiMocks from "@support/gens/models/api/GenMocks";
import GenApiConsts from "@support/gens/models/api/GenConsts";
import GenApiMappers from "@support/gens/models/api/GenMappers";
import GenApiRoutes from "@support/gens/routes/api/GenRoutes";
import GenApiControllers from "@support/gens/routes/api/GenControllers";
import GenApiFactory from "@support/gens/routes/api/GenFactory";
import GenApiRepository from "@support/gens/routes/api/GenRepository";
import GenApiSource from "@support/gens/routes/api/GenSource";
import GenApiDefaults from "@support/gens/defaults/api/GenDefaults";

import GenReactModels from "@support/gens/models/react/GenModels";
import GenReactMocks from "@support/gens/models/react/GenMocks";
import GenReactConsts from "@support/gens/models/react/GenConsts";
import GenReactMappers from "@support/gens/models/react/GenMappers";
import GenReactRepository from "@support/gens/routes/react/GenRepository";
import GenReactSource from "@support/gens/routes/react/GenSource";

class Generators
{
  async api(req: Request, res: Response)
  {
    await this.generateApi();
    await this.compress();
    return Res.redirect(res, req, "/resources/gen.zip");
  }

  async react(req: Request, res: Response)
  {
    await this.generateReact();
    await this.compress();
    return Res.redirect(res, req, "/resources/gen.zip");
  }

  async generateApi()
  {
    await this.restartDir();
    await new GenApiModels().execute();
    await new GenApiMocks().execute();
    await new GenApiConsts().execute();
    await new GenApiMappers().execute();
    await new GenApiRoutes().execute();
    await new GenApiControllers().execute();
    await new GenApiFactory().execute();
    await new GenApiRepository().execute();
    await new GenApiSource().execute();
    await new GenApiDefaults().execute();
  }

  async generateReact()
  {
    await this.restartDir();
    await new GenReactModels().execute();
    await new GenReactMocks().execute();
    await new GenReactConsts().execute();
    await new GenReactMappers().execute();
    await new GenReactRepository().execute();
    await new GenReactSource().execute();
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

  async compress()
  {
    let root = `${path.dirname(require.main.filename)}/../assets`;
    let source = `${root}/dev/gen`;
    let output = `${root}/public/resources/gen.zip`;
    await this.zipDir(source, output);
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