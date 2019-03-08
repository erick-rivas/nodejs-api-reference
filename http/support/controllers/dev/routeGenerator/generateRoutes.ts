import * as fs from 'fs';
import * as path from "path";
import Executor from './executor';

class GenerateRoutes extends Executor
{

  async execute(): Promise<string[]>
  {
    await super.loadData();
    await super.extractData();
    return await this.generateTs();
  }

  async generateTs(): Promise<string[]>
  {
    let dir = `${path.dirname(require.main.filename)}/../assets/public/resources`;
    let res = this.ROUTES_TEMPLATE.toString().trim();
    let imports = "";
    let attrs = "";
    let inits = "";
    let content = "";

    for (let r of this.resources) {
      let rn = super.snakeToCamel(r);
      let rN = rn.charAt(0).toUpperCase() + rn.slice(1);
      imports += `import ${rN} from "@controllers/${rN}";\n`;
      attrs += `  private ${rn}: ${rN};\n`;
      inits += `    this.${rn} = Factory.create${rN}();\n`;
      for (let e of this.endpoints[r]) {
        let route = `    ${this.getRoute(r, e, this.params[e])};\n`;
        content += route;
      }
    }

    imports = imports.trim();
    attrs = attrs.trim();
    inits = inits.trim();
    content = content.trim();

    res = res.replace(new RegExp('_imports', 'g'), imports);
    res = res.replace(new RegExp('_attrs', 'g'), attrs);
    res = res.replace(new RegExp('_inits', 'g'), inits);
    res = res.replace(new RegExp('_content', 'g'), content);

    fs.writeFileSync(`${dir}/routes.ts`, res);
    return ["routes.ts"];
  }

  getRoute(resource: string, endpointData: string, params: any[]): string
  {
    let res = this.ROUTE_TEMPLATE.toString().trim();
    let endpoint = "";
    let method = "";
    let description = "";
    let name = "";
    let group = "";
    let func = "";

    endpoint = endpointData.split("|")[0];
    method = endpointData.split("|")[1].toLowerCase();
    group = super.snakeToCamel(resource);
    let groupU = group.charAt(0).toUpperCase() + group.slice(1)

    if (method == "get") {
      if (endpoint.endsWith("/:id")) {
        description = `Get ${group} details`;
        name = `Get${groupU}Details`
        func = "getDetails"
      } else {
        description = `Get ${group} list`;
        name = `Get${groupU}List`;
        func = "getList";
      }
    } else if (method == "post") {
      description = `Save a ${group}`;
      name = `Save${groupU}`;
      func = "save";
    } else if (method == "put") {
      description = `Update a ${group}`;
      name = `Update${groupU}`;
      func = "update";
    } else if (method == "delete") {
      description = `Delete a ${group}`;
      name = `Delete${groupU}`;
      func = "delete";
    }

    res = res.replace(new RegExp('_endpoint', 'g'), endpoint);
    res = res.replace(new RegExp('_method', 'g'), method);
    res = res.replace(new RegExp('_description', 'g'), description);
    res = res.replace(new RegExp('_name', 'g'), name);
    res = res.replace(new RegExp('_group', 'g'), groupU);
    res = res.replace(new RegExp('_res', 'g'), group);
    res = res.replace(new RegExp('_func', 'g'), func);

    return res;
  }


  private ROUTES_TEMPLATE = `

import { Router } from "express";
import Factory from "@http/factories/controllers";
_imports

class Routes
{
  private router: Router;
  _attrs

  constructor()
  {
    this.router = Router();
    _inits
  }

  init(): Router
  {
    _content
  
  return this.router;
  }
}

export default Routes;
  `;

  private ROUTE_TEMPLATE =
    `
    /**
     * @api {get} _endpoint _description
     * @apiName _name
     * @apiGroup _group
     * @apiVersion 0.1.0
    */

    this.router._method("_endpoint", (req, res) => this._res._func(req, res));

`


}

export default GenerateRoutes;