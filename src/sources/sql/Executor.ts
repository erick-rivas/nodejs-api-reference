import * as mysql from "mysql";
import { Pair } from "@models/Util";
import { Mapper } from "./Mapper";

class Controller
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

  protected get<T>(query: string, filters: Pair[], mapper: Mapper<T>): Promise<T[]>
  {
    const params = [];
    let where = " WHERE true = true";
    for (let filter of filters) {
      where += ` AND ${filter.key} = ?`;
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

  protected save(query: string, params: any[]): Promise<void>
  {
    let values = " VALUES (";
    for (let p of params) values += "?,";
    values = params.length > 0 ? values.slice(0, -1) + ")" : values + ")";
    query = query + values;

    return new Promise((resolve, reject) =>
    {
      this.sql.query(query, params, function (err, result)
      {
        if (err) return reject(err);
        resolve();
      });
    });
  }

  protected set(query: string, columns: Pair[], key: string, id: number): Promise<void>
  {
    const params = [];
    let set = ` SET ${key} = ${key},`;
    for (let col of columns) {
      set += ` ${col.key} = ?,`;
      params.push(col.value);
    }
    set = set.slice(0, -1);
    let where = ` WHERE ${key} = ?`;
    query = query + set + where;
    params.push(id);

    return new Promise((resolve, reject) =>
    {
      this.sql.query(query, params, function (err, result)
      {
        if (err) return reject(err);
        resolve();
      });
    });
  }

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

export default Controller;
