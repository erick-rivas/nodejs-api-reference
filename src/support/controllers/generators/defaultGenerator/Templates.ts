const MIDDLEWARES_TEMPLATE =
  `
import { Router } from "express";
import Factory from "@lt/middlewares/Factory";
import Authentication from "@lt/middlewares/Authentication";

class Middlewares
{
  private router: Router;
  private auth: Authentication;

  constructor()
  {
    this.router = Router();
    this.auth = Factory.createAuthentication();
  }

  init(): Router
  {
    this.router.get("*", (req, res, next) => this.auth.authenticate(req, res, next));
    return this.router;
  }
}

export default Middlewares;
`;

const MIDDLEWARE_FACTORY_TEMPLATE =
  `
import Authentication from "@lt/middlewares/Authentication";

class Factory
{
  static createAuthentication()
  {
    return new Authentication();
  }
}

export default Factory;
`;

const MIDDLEWARE_AUTH_TEMPLATE =
  `
import { Request, Response, Next } from "express";
import Res from "@util/http/Errors";

class Authentication
{
  constructor() { }

  async authenticate(req: Request, res: Response, next: Next)
  {
    Res.next(next);
  }
}

export default Authentication;
`;

const SQL_EXECUTOR_TEMPLATE =
  `
  import * as mysql from "mysql";
  import { Pair } from "@util/Util";
  import { Mapper } from "@lt/sources/sql/Mappers";
  
  /**
   * Base class to handle common database operations.
   */
  
  class Executor
  {
    protected sql;
  
    protected constructor()
    {
      this.sql = mysql.createConnection({
        host: process.env.SQL_HOST,
        user: process.env.SQL_USER,
        password: process.env.SQL_PASSWORD,
        database: process.env.SQL_DATABASE,
        multipleStatements: true
      });
    }
  
    /**
     * Get a model collection based on filter conditions.
     * Example:
     *  - Query: SELECT p.* FROM player p
     *  - Filters: [new Pair(p.player_id, 1)]
     *  - Mapper: PlayerMapper
     * 
     * @param  {string} query Base query.
     * @param  {Pair[]} filters Filter collection, equivalente to WHERE conditions.
     * @param  {Mapper<T>} mapper Mapper object relative to the result.
     */
  
    protected get<T>(query: string, filters: Pair[], mapper: Mapper<T>): Promise<T[]>
    {
      const params = [];
      let where = " WHERE true = true";
      for (let filter of filters) {
        where += \` AND \${filter.key} = ?\`;
        params.push(filter.value);
      }
      query = query + where;
  
      return new Promise((resolve, reject) =>
      {
        this.sql.query(query, params, function (err, result)
        {
          if (err) return reject(err);
          if (result.length > 0) {
            const res = mapper.transformList(result);
            resolve(res);
          } else resolve([]);
        });
      });
    }
  
    /**
     * 
     * Get a model collection based on params conditions.
     * Example:
     *  - Query: SELECT p.* FROM player p WHERE p.player_id = ?
     *  - Filters: [1]
     *  - Mapper: PlayerMapper
     * 
     * @param  {string} query Base query.
     * @param  {any[]} params Params collection.
     * @param  {Mapper<T>} mapper  Mapper object relative to the result.
     */
  
    protected getDetails<T>(query: string, params: any[], mapper: Mapper<T>): Promise<T[]>
    {
      return new Promise((resolve, reject) =>
      {
        this.sql.query(query, params, function (err, result)
        {
          if (err) return reject(err);
          if (result.length > 0) {
            const res = mapper.transformList(result);
            resolve(res);
          } else resolve([]);
        });
      });
    }
  
    /**
     * Get a generic (non mapped) collection based on params conditions.
     * Example:
     *  - Query: SELECT p.* FROM player p WHERE p.player_id = ?
     *  - params: [1]
     * 
     * @param  {string} query Base query.
     * @param  {any[]} params Params collection.
     */
  
    protected getAny(query: string, params: any[]): Promise<any>
    {
      return new Promise((resolve, reject) =>
      {
        this.sql.query(query, params, function (err, result)
        {
          if (err) return reject(err);
          if (result.length > 0) {
            resolve(result);
          } else resolve([]);
        });
      });
    }
  
    protected async fetch<T>(dataSet: T[], f: (input: T) => Promise<T>): Promise<T[]>
    {
      let result: T[] = [];
      for (let data of dataSet)
        result.push(await f(data));
      return result;
    }
  
    /**
     * Execute a save query.
     * Example:
     *  - Query: INSERT INTO player";
     *  - Params: [new Pair('id', '1')]
     * 
     * @param  {string} query Base query
     * @param  {Pair[]} params Params collection.
     */
  
    protected save(query: string, params: Pair[]): Promise<void>
    {
      let columns = " (";
      let values = [];
      for (let p of params) {
        columns += p.key + ",";
        values.push(p.value);
      }
      columns = params.length > 0 ? columns.slice(0, -1) + ")" : columns + ")";
  
      let templates = " VALUES (";
      for (let p of params) templates += "?,";
      templates = params.length > 0 ? templates.slice(0, -1) + ")" : templates + ")";
  
      query = query + columns + templates;
  
      return new Promise((resolve, reject) =>
      {
        this.sql.query(query, values, function (err, result)
        {
          if (err) return reject(err);
          resolve();
        });
      });
    }
  
    /**
     * Execute a set query.
     * Example:
     *  - Query: UPDATE player";
     *  - Columns: [new Pair('name', 'juan')]
     *  - keyCol: player_id
     *  - keyVal: 1
     * 
     * @param  {string} query Base query
     * @param  {Pair[]} columns Set collection to modify, equivalente to SET conditions.
     * @param  {string} keyCol Column name of primary key  
     * @param  {number} keyVal Value of primary key
     */
  
    protected set(query: string, columns: Pair[], keyCol: string, keyVal: number): Promise<void>
    {
      const params = [];
      let set = \` SET \${keyCol} = \${keyCol},\`;
      for (let col of columns) {
        set += \` \${col.key} = ?,\`;
        params.push(col.value);
      }
      set = set.slice(0, -1);
      let where = \` WHERE \${keyCol} = ?\`;
      query = query + set + where;
      params.push(keyVal);
  
      return new Promise((resolve, reject) =>
      {
        this.sql.query(query, params, function (err, result)
        {
          if (err) return reject(err);
          resolve();
        });
      });
    }
  
    /**
     * Execute a delete query.
     * Example:
     *  - Query: DELETE FROM player WHERE player_id = ?";
     *  - Params: [1]
     * 
     * @param  {string} query Base query
     * @param  {number[]} params Params collection (identifiers)
     */
  
    protected delete(query: string, params: number[]): Promise<void>
    {
      return new Promise((resolve, reject) =>
      {
        this.sql.query(query, params, function (err, result)
        {
          if (err) return reject(err);
          resolve();
        });
      });
    }
  
    /**
     * Execute a generic query.
     * Suggested use: modifications in the database schema.
     * Example:
     *  - Query: DROP TABLE player
     * 
     * @param  {string} query Complete query.
     */
  
    protected execute(query: string): Promise<void>
    {
      return new Promise((resolve, reject) =>
      {
        this.sql.query(query, [], function (err, result)
        {
          if (err) return reject(err);
          resolve();
        });
      });
    }
  }
  
  export default Executor;  
`;


export
{
  MIDDLEWARES_TEMPLATE, MIDDLEWARE_AUTH_TEMPLATE, MIDDLEWARE_FACTORY_TEMPLATE,
  SQL_EXECUTOR_TEMPLATE
};