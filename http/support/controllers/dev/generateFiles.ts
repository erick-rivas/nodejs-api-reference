import * as fs from 'fs';
import * as path from "path";
import * as zip from "node-zip";

import GenerateModels from "@support/controllers/dev/modelGenerator/generateModels";
import GenerateMappers from "@support/controllers/dev/modelGenerator/generateMappers";
import GenerateRoutes from "@support/controllers/dev/routeGenerator/generateRoutes";
import GenerateControllers from "@support/controllers/dev/routeGenerator/generateControllers";


class GenerateFiles
{
  async execute(type: string): Promise<string>
  {
    let paths: string[] = [];
    if (type == "models" || type == "all")
      paths = paths.concat(await new GenerateModels().execute());
    if (type == "mappers" || type == "all")
      paths = paths.concat(await new GenerateMappers().execute());
    if (type == "routes" || type == "all")
      paths = paths.concat(await new GenerateRoutes().execute());
    if (type == "controllers" || type == "all")
      paths = paths.concat(await new GenerateControllers().execute());

    await this.compress(paths);
    return "generated.zip"
  }

  async compress(paths: string[])
  {
    console.log(paths);
    let dir = `${path.dirname(require.main.filename)}/../assets/public/resources`;
    let z = zip();
    for (let p of paths) {
      let fileName = p.split("/").pop();
      z.file(fileName, `${dir}/${p}`);
    }
    var file = z.generate({ base64: false, compression: 'DEFLATE' });
    fs.writeFileSync(`${dir}/generated.zip`, file, 'binary');
  }

}

export default GenerateFiles;