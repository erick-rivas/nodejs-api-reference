import * as fs from 'fs';
import * as path from "path";
import Executor from './executor';

class GenerateMappers extends Executor
{

  async execute(): Promise<any>
  {
    await super.loadData();
    await super.extractData();
    await this.generateTs();
  }

  async generateTs()
  {
    let dir = `${path.dirname(require.main.filename)}/../assets/dev/gen_mappers`;
    let res = this.MAPPERS_TEMPLATE.toString().trim();
    let imports = "";
    let content = "";
    let defs = "";

    for (let c of this.classes) {
      imports += `import ${c} from "@models/${c}";\n`;
      defs += `${c.charAt(0).toUpperCase() + c.slice(1)}Mapper,`;
      let mapper = `${this.getMapper(c, this.attrs[c], this.models[c], this.consts[c])}\n\n`;
      content += mapper;
    }

    imports = imports.trim();
    content = content.trim();
    defs = defs.trim().slice(0, -1);

    res = res.replace(new RegExp('_imports', 'g'), imports);
    res = res.replace(new RegExp('_content', 'g'), content);
    res = res.replace(new RegExp('_defs', 'g'), defs);

    fs.writeFileSync(`${dir}/mappers.ts`, res);
  }

  getMapper(className: string, attributes: any[], models: any[], consts: any[]): string
  {
    let res = this.MAPPER_TEMPLATE.toString().trim();
    let modelName = "";
    let id = "";
    let attrs = "";

    for (let a of attributes) {
      if (a.type.endsWith("[]"))
        attrs += `        [],\n`;
      else if (a.description == "_MODEL")
        attrs += `        new ${a.type}(data.${super.camelToSnake(a.type.toLowerCase())}_id),\n`;
      else
        attrs += `        data.${super.camelToSnake(a.name)},\n`;
    }

    modelName = className;
    id = `${super.camelToSnake(className.toLowerCase())}_id`;
    attrs = attrs.trim().slice(0, -1);

    res = res.replace(new RegExp('_modelName', 'g'), modelName);
    res = res.replace(new RegExp('_id', 'g'), id);
    res = res.replace(new RegExp('_attrs', 'g'), attrs);

    return res;
  }

  private MAPPERS_TEMPLATE = `

_imports

abstract class Mapper<T>
{
  transformList(dataSet: any): T[]
  {
    if (!dataSet) return [];
    const result = [];
    for (let data of dataSet)
      result.push(this.transform(data));
    return result;
  }
  abstract transform(data): T;
}

_content

export default {Mapper, _defs}`;

  private MAPPER_TEMPLATE = `

class _modelNameMapper extends Mapper<_modelName>
{
  transform(data: any): _modelName  
  {
    return new _modelName(data._id)
      .build(
        _attrs
      );
  }
}`

}

export default GenerateMappers;