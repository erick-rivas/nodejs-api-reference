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
    this.sql = mysql.createConnection({
      host: process.env.SQL_HOST,
      user: process.env.SQL_USER,
      password: process.env.SQL_PASSWORD,
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
        const DATABASE = process.env.SQL_DATABASE;
        const query = `DROP DATABASE IF EXISTS ${DATABASE}; ${content}`;
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