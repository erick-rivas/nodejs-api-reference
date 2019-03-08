import * as fs from 'fs';
import * as path from "path";
import * as mysql from "mysql";

import SqlExec from "@sql/Executor";


class InitDb
{
  async execute(): Promise<any>
  {
    const sql = new DevSql();
    return sql.restartDb();
  }
}

class DevSql extends SqlExec
{
  constructor()
  {
    super();
    this.sql = mysql.createConnection({
      host: process.env.SQL_HOST,
      user: process.env.SQL_USER,
      password: process.env.SQL_PASSWORD,
      multipleStatements: true
    });
  }

  restartDb(): Promise<void>
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
}


export default InitDb;