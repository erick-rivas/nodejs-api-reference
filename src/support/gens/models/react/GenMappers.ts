import Util from "@support/gens/Util"
import Executor from '@support/gens/models/Executor';
import { MAPPERS_TEMPLATE, MAPPER_TEMPLATE } from "@support/gens/models/react/Templates"

class GenerateMappers extends Executor
{
  async generate()
  {
    let res = MAPPERS_TEMPLATE.toString().trim();
    let imports = "";
    let content = "";
    let defs = "";

    for (let c of this.classes) {
      imports += `import ${c} from "models/${c}";\n`;
      defs += `${Util.iniToUpper(c)}Mapper, `;
      let mapper = `${this.getMapper(c, this.attrs[c], this.models[c], this.consts[c])}\n\n`;
      content += mapper;
    }

    imports = imports.trim();
    content = content.trim();
    defs = defs.trim().slice(0, -1);

    res = res.replace(new RegExp('#imports#', 'g'), imports);
    res = res.replace(new RegExp('#content#', 'g'), content);
    res = res.replace(new RegExp('#defs#', 'g'), defs);

    super.generateDir("/sources");
    super.generateFile("/sources/api", "Mappers.ts", res);
  }

  getMapper(className: string, attributes: any[], models: any[], consts: any[]): string
  {
    let res = MAPPER_TEMPLATE.toString().trim();
    let modelName = "";
    let mappers = "";
    let assigns = "";
    let attrs = "";

    let hasMappers = false;
    for (let m in models) {
      let mod = Util.iniToLower(Util.snakeToCamel(m));
      let moD = Util.iniToUpper(mod);
      mappers += `${Util.sp(2)}private ${mod}Mapper: ${moD}Mapper;\n`;
      assigns += `${Util.sp(4)}this.${mod}Mapper = new ${moD}Mapper();\n`;
      hasMappers = true;
    }

    for (let a of attributes) {
      if (a.description == "_MODEL") {

        if (a.type.endsWith("[]"))
          attrs += `${Util.sp(8)}${a.name}: this.${Util.iniToLower(a.type.slice(0, -2))}Mapper.transformList(data.${Util.camelToSnake(a.name)}),\n`;
        else
          attrs += `${Util.sp(8)}${a.name}: this.${Util.iniToLower(a.type)}Mapper.transform(data.${Util.camelToSnake(a.name)}),\n`;
      }
      else if (a.description == "_CONST")
        attrs += `${Util.sp(8)}${a.name}: ${Util.iniToUpper(className)}.get${a.type}(data.${Util.camelToSnake(a.name)}), \n`;
      else
        attrs += `${Util.sp(8)}${a.name}: data.${Util.camelToSnake(a.name)},\n`;
    }

    modelName = `${Util.iniToUpper(className)}`;

    mappers = mappers.trim();
    assigns = assigns.trim();
    if (hasMappers) {
      mappers = `\n${Util.sp(2)}${mappers}\n`;
      assigns = `\n${Util.sp(4)}${assigns}`;
    }
    attrs = attrs.trim().slice(0, -1);

    res = res.replace(new RegExp('#Model#', 'g'), modelName);
    res = res.replace(new RegExp('#mappers#', 'g'), mappers);
    res = res.replace(new RegExp('#assigns#', 'g'), assigns);
    res = res.replace(new RegExp('#attrs#', 'g'), attrs);

    return res;
  }
}

export default GenerateMappers;