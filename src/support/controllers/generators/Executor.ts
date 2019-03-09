import * as parse from 'csv-parse/lib/sync';
import * as fs from 'fs';
import * as path from "path";

abstract class Executor
{
  protected dataSet = [];
  protected genFile = "";


  abstract async extractData();
  abstract async generateTs();

  async execute()
  {
    await this.loadData();
    await this.extractData();
    await this.generateTs();
  }

  async loadData()
  {
    let dir = `${path.dirname(require.main.filename)}/../assets/dev`;
    let input = fs.readFileSync(`${dir}/${this.genFile}`, 'utf8');
    this.dataSet = parse(input, {
      columns: true
    });
  }

  async generateFile(folder: string, fileName: string, data: string)
  {
    let root = `${path.dirname(require.main.filename)}/../assets/dev/gen`;
    let dir = `${root}${folder}`
    if (!fs.existsSync(dir))
      fs.mkdirSync(dir);
    fs.writeFileSync(`${dir}/${fileName}`, data);
    return;
  }
}

export default Executor;