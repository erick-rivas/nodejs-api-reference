import * as parse from 'csv-parse/lib/sync';
import * as fs from 'fs';
import * as path from "path";

class Executor
{
  protected input = "";
  protected classes = [];
  protected levels = [];
  protected attrs = [];
  protected models = [];
  protected consts = [];

  async execute()
  {
    await this.loadData();
    await this.extractData();
    await this.generateTs();
  }

  async loadData()
  {
    let dir = `${path.dirname(require.main.filename)}/../assets/dev`;
    this.input = fs.readFileSync(`${dir}/model-generator.csv`, 'utf8');
  }

  async extractData()
  {
    const dataSet = parse(this.input, {
      columns: true
    });

    for (let data of dataSet) {

      let className = this.snakeToCamel(data.class_name);
      let attribute = this.snakeToCamel(data.attribute);
      let type = this.snakeToCamel(data.type);
      if (this.classes.indexOf(className) == -1) {
        this.classes.push(className);
        this.levels[className] = data.class_level;
        this.attrs[className] = [];
        this.models[className] = [];
        this.consts[className] = [];
      }
      this.attrs[className].push({
        name: attribute,
        type: type,
        description: data.description,
        collection: data.collection
      });
      if (data.description == "_MODEL") {
        if (type.endsWith("[]"))
          this.models[className][type.slice(0, -2)] = 0;
        else
          this.models[className][type] = 0;

      }
      else if (data.description == "_CONST")
        this.consts[className][type] = data.collection;
    }
  }

  async generateTs() { }

  getDir()
  {
    return `${path.dirname(require.main.filename)}/../assets/dev/gen`;
  }

  camelToSnake(s: string): string
  {
    return s.replace(/(?:^|\.?)([A-Z])/g, function (x, y) { return "_" + y.toLowerCase() }).replace(/^_/, "");
  }

  snakeToCamel(s: string): string
  {
    return s.replace(/_\w/g, (m) => m[1].toUpperCase());
  }
}

export default Executor;