import Executor from './Executor';
import Util from "@support/controllers/generators/Util"
import { MAPPERS_TEMPLATE, MAPPER_TEMPLATE } from "@support/controllers/generators/Templates"

class GenerateMappers extends Executor
{
  async generateTs()
  {
    let res = MAPPERS_TEMPLATE.toString().trim();
    let imports = "";
    let content = "";
    let defs = "";

    for (let c of this.classes) {
      imports += `import ${c} from "@lt/models/${c}";\n`;
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

    super.generateFile("/sources", "Mappers.ts", res);
  }

  getMapper(className: string, attributes: any[], models: any[], consts: any[]): string
  {
    let res = MAPPER_TEMPLATE.toString().trim();
    let modelName = "";
    let modelId = "";
    let attrs = "";

    for (let a of attributes) {
      if (a.type.endsWith("[]"))
        attrs += `${Util.sp(8)}[],\n`;
      else if (a.description == "_MODEL")
        attrs += `${Util.sp(8)}new ${a.type}(data.${Util.camelToSnake(a.type).toLowerCase()}_id), \n`;
      else if (a.description == "_CONST")
        attrs += `${Util.sp(8)}${Util.iniToUpper(className)}.get${a.type}(data.${Util.camelToSnake(a.name)}), \n`;
      else
        attrs += `${Util.sp(8)}data.${Util.camelToSnake(a.name)},\n`;
    }

    modelName = `${Util.iniToUpper(className)}`;
    modelId = `${Util.camelToSnake(className).toLowerCase()}_id`;
    attrs = attrs.trim().slice(0, -1);

    res = res.replace(new RegExp('#Model#', 'g'), modelName);
    res = res.replace(new RegExp('#model_id#', 'g'), modelId);
    res = res.replace(new RegExp('#attrs#', 'g'), attrs);

    return res;
  }
}

export default GenerateMappers;