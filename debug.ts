require("module-alias/register");
import * as dotenv from "dotenv";

import Sql from "@sql/_Source";

class Debug
{
  constructor()
  {
    dotenv.config();
  }

  async main(): Promise<any>
  {
    let sql = Sql.getInstance();
    let result = await sql.getPetList();
    console.log(result);
  }
}

new Debug().main();