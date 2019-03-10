
const MAPPERS_TEMPLATE =
  ` 
#imports#
  
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
  
#content#
  
export { Mapper, #defs#}
`;

const MAPPER_TEMPLATE =
  `
class #Model#Mapper extends Mapper<#Model#>
{
  transform(data: any): #Model#  
  {
    return new #Model#(data.#model_id#)
      .build(
        #attrs#
      );
  }
}
`;

const MODEL_TEMPLATE =
  `
import Model from "@util/Model";
#imports#

class #Model# extends Model
{ #gets#
  id: number;
  #attrs#

  constructor(id: number)
  {
    super();
    this.id = id;
  }

  build(#args#): #Model#
  {
    #assigns#
    return this;
  }

  toJSON()
  {
    return {
      #toJSON#
    };
  }
}

export default #Model#;
`;

const CONST_TEMPLATE =
  `
#content#

export { #defs#}
`;

const MOCK_TEMPLATE =
  `
import Generator from "@util/Generator";
#imports#

class Mocks
{
  #content#
}
export default Mocks;
`;

const MOCK_ITEM_TEMPLATE =
  `
static #Model#()
  {
    return [
      #data#
    ];
  }
`;

const CTRL_TEMPLATE =
  `
import { Request, Response } from "express";
import Sql from "@lt/sources/Sql";
import Res from "@util/http/responses";

import #Model# from "@lt/models/#Model#";
import Generator from "@util/Generator";

class #ClassName#
{
  private sql: Sql;

  constructor(sql: Sql)
  {
    this.sql = sql;
  }

  #content#
}

export default #ClassName#;
`;

const CTRL_GET_DETAILS_TEMPLATE =
  `
  async getDetails(req: Request, res: Response)
  {
    const id = req.params.id;
    const result = await this.sql.get#Model#Details(id);
    return Res.sendModel(res, result);
  }
`;

const CTRL_CUSTOM_TEMPLATE =
  `
  async #func#(req: Request, res: Response)
  {
    return null;
  }
`;

const CTRL_GET_LIST_TEMPLATE =
  `
  async getList(req: Request, res: Response)
  {
    // TODO CHECK FILTERS
    const { } = req.query;
    const result = await this.sql.get#Model#List();
    return Res.sendList(res, result);
  }
`;

const CTRL_SAVE_TEMPLATE =
  `
  async save(req: Request, res: Response)
  {
    // TODO CHECK BUILD
    const { } = req.body;
    const #model# = new #Model#(Generator.getId());

    const result = await this.sql.save#Model#(#model#);
    return Res.sendModel(res, result);
  }
`;

const CTRL_UPDATE_TEMPLATE =
  `  
  async update(req: Request, res: Response)
  {
    //TODO CHECK ARGS
    const id = req.params.id;
    const { } = req.body;
    const result = await this.sql.set#Model#(
      id
    );
    return Res.sendModel(res, result);
  }
`;

const CTRL_DELETE_TEMPLATE =
  `  
  async delete(req: Request, res: Response)
  {
    const id = req.params.id;
    await this.sql.delete#Model#(id);
    return Res.sendOk(res);
  }
`;

const FACTORY_TEMPLATE =
  `
import Sql from "@lt/sources/sql/Source";
#imports#

class Controllers
{
  #content#
}

export default Controllers;
`;

const FACTORY_ITEM_TEMPLATE =
  `
  static create#Resource#()
  {
    return new #Resource#(
      Sql.getInstance()
    );
  }
`;

const REPO_TEMPLATE =
  `
#imports#

interface Sql
{
  #content#
}

export default Sql;
`;

const REPO_GET_LIST_TEMPLATE =
  `
  get#Model#List(): Promise<#Model#[]>; //TODO CHECK FILTERS
`;

const REPO_GET_DETAILS_TEMPLATE =
  `
  get#Model#Details(#model#Id: number): Promise<#Model#>;
`;

const REPO_SAVE_TEMPLATE =
  `
  save#Model#(#model#: #Model#): Promise<#Model#>;
`;

const REPO_SET_TEMPLATE =
  `
  set#Model#(#model#Id: number): Promise<#Model#>; //TODO CHECK ARGS
`;

const REPO_DELETE_TEMPLATE =
  `
  delete#Model#(#model#Id: number): Promise<void>;
`;

const ROUTES_TEMPLATE =
  `
import { Router } from "express";
import Factory from "@lt/controllers/Factory";
#imports#

class Routes
{
  private router: Router;
  #attrs#

  constructor()
  {
    this.router = Router();
    #inits#
  }

  init(): Router
  {
    #content#
  
    return this.router;
  }
}

export default Routes;
`;

const ROUTES_COMMENT_TEMPLATE =
  `
  /**
   * @api {get} #endpoint# #description#
   * @apiName #name#
   * @apiGroup #group#
   * @apiVersion 1.0.0
  */
`;

const ROUTES_ITEM_TEMPLATE =
  `
    this.router.#method#("#endpoint#", (req, res) => this.#res#.#func#(req, res));
`;

const SRC_TEMPLATE =
  `
import Repository from "@lt/sources/Sql";
import { Pair } from "@util/Util";
#imports#

import Executor from "@lt/sources/sql/Executor";
import * as Mapper from "@lt/sources/sql/Mappers";

class Source extends Executor implements Repository
{
  #content#

  private static instance: Source;
  private constructor() { super(); }
  static getInstance(): Source { return this.instance || (this.instance = new this()); }
}

export default Source;
`;

const SRC_GET_LIST_TEMPLATE =
  `
  async get#Model#List(): Promise<#Model#[]>
  {
    const query =
      \`SELECT #i#.* FROM #model_n# #i#\`;
    const filter = [];
    //TODO ADD FILTERS
    const res = await this.get(query, filter, new Mapper.#Model#Mapper());
    //TODO CHECK FETCH
    return res; 
  }
`;

const SRC_GET_DETAILS_TEMPLATE =
  `
  async get#Model#Details(#model#Id: number): Promise<#Model#>
  {
    const query =
      \`SELECT #i#.* FROM #model_n# #i# WHERE #i#.#model_n#_id = ?\`;
    const params = [#model#Id];
    const res = await this.getDetails(query, params, new Mapper.#Model#Mapper());
    //TODO CHECK FETCH
    return res[0];
  }
`;

const SRC_SAVE_TEMPLATE =
  `
  async save#Model#(#model#: #Model#): Promise<#Model#>
  {
    //TODO
    return null;
  }
`;

const SRC_SET_TEMPLATE =
  `
  async set#Model#(#model#Id: number): Promise<#Model#>
  {
    const query = "UPDATE #model_n#";
    const columns = [];
    //TODO ADD COLUMNS
    await this.set(query, columns, "#model_n#_id", #model#Id);
    return this.get#Model#Details(#model#Id);
  }
`;

const SRC_DELETE_TEMPLATE =
  `
  async delete#Model#(#model#Id: number): Promise<void>
  {
    const query =
      "DELETE FROM #model_n# WHERE #model_n#_id = ?;"
    //TODO CHECK EXTRA DELETES
    const params = [#model#Id];
    return this.delete(query, params);
  }
`;


export
{
  MAPPERS_TEMPLATE, MAPPER_TEMPLATE,
  MODEL_TEMPLATE,
  CONST_TEMPLATE,
  MOCK_TEMPLATE, MOCK_ITEM_TEMPLATE,
  CTRL_TEMPLATE, CTRL_GET_LIST_TEMPLATE, CTRL_GET_DETAILS_TEMPLATE, CTRL_CUSTOM_TEMPLATE, CTRL_SAVE_TEMPLATE, CTRL_UPDATE_TEMPLATE, CTRL_DELETE_TEMPLATE,
  FACTORY_TEMPLATE, FACTORY_ITEM_TEMPLATE,
  REPO_TEMPLATE, REPO_GET_LIST_TEMPLATE, REPO_GET_DETAILS_TEMPLATE, REPO_SAVE_TEMPLATE, REPO_SET_TEMPLATE, REPO_DELETE_TEMPLATE,
  ROUTES_TEMPLATE, ROUTES_COMMENT_TEMPLATE, ROUTES_ITEM_TEMPLATE,
  SRC_TEMPLATE, SRC_GET_LIST_TEMPLATE, SRC_GET_DETAILS_TEMPLATE, SRC_SAVE_TEMPLATE, SRC_SET_TEMPLATE, SRC_DELETE_TEMPLATE
};