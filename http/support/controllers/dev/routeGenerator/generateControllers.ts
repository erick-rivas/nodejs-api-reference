import * as fs from 'fs';
import * as path from "path";
import Executor from './executor';

class GenerateRoutes extends Executor
{

  async execute(): Promise<any>
  {
    await super.loadData();
    await super.extractData();
    await this.generateTs();
  }

  async generateTs()
  {

  }
}

export default GenerateRoutes;