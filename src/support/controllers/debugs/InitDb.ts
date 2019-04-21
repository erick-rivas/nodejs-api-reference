import * as fs from 'fs';
import * as path from "path";
import * as mysql from "mysql";


class InitDb
{
  async execute(): Promise<any>
  {
    const sql = new DevSql();
    return sql.restartDb();
  }
}

class DevSql
{
  private sql;

  constructor()
  {
    const isDebug = process.env.IS_DEBUG == null ||
      process.env.IS_DEBUG.toLowerCase() == "true";

    if (isDebug)
      this.sql = mysql.createConnection({
        host: process.env.SQL_HOST,
        user: process.env.SQL_USER,
        password: process.env.SQL_PASSWORD,
        database: process.env.SQL_DATABASE,
        multipleStatements: true
      });
    else
      this.sql = mysql.createConnection({
        host: process.env.RDS_HOSTNAME,
        user: process.env.RDS_USERNAME,
        password: process.env.RDS_PASSWORD,
        database: process.env.RDS_DB_NAME,
        port: process.env.RDS_PORT,
        multipleStatements: true
      });
  }

  public restartDb(): Promise<void>
  {
    return new Promise(resolve =>
    {

      const dirname = path.dirname(require.main.filename) + "/../";
      const dbPath = "assets/dev/db.sql";
      fs.readFile(dirname + dbPath, "utf8", (err, content) =>
      {
        const isDebug = process.env.IS_DEBUG == null ||
          process.env.IS_DEBUG.toLowerCase() == "true";

        const DEBUG_DATABASE = process.env.SQL_DATABASE;
        const PROD_DATABASE = process.env.RDS_DB_NAME;
        const DATABASE = isDebug ? DEBUG_DATABASE : PROD_DATABASE;
        const exec = content.replace(new RegExp(DEBUG_DATABASE, 'g'), DATABASE);
        const query = `DROP DATABASE IF EXISTS ${DATABASE}; ${exec}`;
        this.execute(query).then(() => resolve());
      });
    });
  }

  private execute(query: string): Promise<void>
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

export default InitDb;