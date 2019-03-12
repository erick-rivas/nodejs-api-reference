import Util from "@support/gens/Util"
import Executor from '@support/gens/routes/Executor';
import { ROUTES_TEMPLATE, ROUTES_ITEM_TEMPLATE } from "@support/gens/routes/api/Templates"

class GenerateRoutes extends Executor
{
  async generate()
  {
    let res = ROUTES_TEMPLATE.toString().trim();
    let imports = "";
    let attrs = "";
    let inits = "";
    let content = "";

    for (let r of this.resources) {
      let rn = Util.snakeToCamel(r);
      let rN = Util.iniToUpper(rn);
      imports += `import ${rN} from "@lt/controllers/${rN}";\n`;
      attrs += `${Util.sp(2)}private ${rn}: ${rN};\n`;
      inits += `${Util.sp(4)}this.${rn} = Factory.create${rN}();\n`;
      for (let e of this.endpoints[r]) {
        let route = `${Util.sp(4)}${this.getRoute(r, this.classes[r], e)}\n`;
        content += route;
      }
    }

    imports = imports.trim();
    attrs = attrs.trim();
    inits = inits.trim();
    content = content.trim();

    res = res.replace(new RegExp('#imports#', 'g'), imports);
    res = res.replace(new RegExp('#attrs#', 'g'), attrs);
    res = res.replace(new RegExp('#inits#', 'g'), inits);
    res = res.replace(new RegExp('#content#', 'g'), content);

    super.generateFile("", "Routes.ts", res);
  }

  getRoute(resource: string, className: string, endpointData: string): string
  {
    let res = ROUTES_ITEM_TEMPLATE.toString().trim();
    let endpoint = "";
    let method = "";
    let description = "";
    let name = "";
    let resName = "";
    let resNameU = "";
    let group = "";
    let groupU = "";
    let func = "";

    endpoint = endpointData.split("|")[0];
    method = endpointData.split("|")[1].toLowerCase();
    resName = Util.snakeToCamel(resource);
    resNameU = Util.iniToUpper(resName);
    group = Util.snakeToCamel(className);
    groupU = Util.iniToUpper(group);

    if (method == "get") {
      let args = endpoint.split("/")[2];
      if (!args) {
        description = `Get ${group} list`;
        name = `Get${groupU}List`;
        func = "getList";
      } else if (args == ":id") {
        description = `Get ${group} details`;
        name = `Get${groupU}Details`;
        func = "getDetails"
      } else {
        description = ``;
        name = ``;
        func = Util.snakeToCamel(args);
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

    res = res.replace(new RegExp('#endpoint#', 'g'), endpoint);
    res = res.replace(new RegExp('#method#', 'g'), method);
    res = res.replace(new RegExp('#description#', 'g'), description);
    res = res.replace(new RegExp('#name#', 'g'), name);
    res = res.replace(new RegExp('#group#', 'g'), resNameU);
    res = res.replace(new RegExp('#res#', 'g'), resName);
    res = res.replace(new RegExp('#func#', 'g'), func);

    return res;
  }
}

export default GenerateRoutes;