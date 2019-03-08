import * as parse from 'csv-parse/lib/sync';
import * as fs from 'fs';
import * as path from "path";

class Executor
{
  protected input = "";
  protected resources = [];
  protected classes = [];
  protected endpoints = [];
  protected params = [];

  async execute()
  {
    await this.loadData();
    await this.extractData();
    await this.generateTs();
  }

  async loadData()
  {
    let dir = `${path.dirname(require.main.filename)}/../assets/dev`;
    this.input = fs.readFileSync(`${dir}/routes-generator.csv`, 'utf8');
  }

  async extractData()
  {
    const dataSet = parse(this.input, {
      columns: true
    });

    for (let data of dataSet) {

      let resource = `${data.name.split("/")[1]}`;
      let className = data.class;
      let endpoint = `${data.name}|${data.method}`;

      if (this.resources.indexOf(resource) == -1) {
        this.resources.push(resource);
        this.classes[resource] = className;
        this.endpoints[resource] = [];
      }

      if (this.endpoints[resource].indexOf(endpoint) == -1) {
        this.endpoints[resource].push(endpoint);
        this.params[endpoint] = [];
        if (data.param)
          this.params[endpoint] = data.param.split("\t");
      }
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