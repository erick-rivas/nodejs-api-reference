require("module-alias/register");
import { Response } from "express";

import Model from "@models/Model";


class Util
{
  static sendOk(res: Response)
  {
    res.send();
  }

  static sendObject(res: Response, result: any)
  {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(result ? result : {}));
  }

  static sendList(res: Response, result: Model[])
  {
    res.setHeader("Content-Type", "application/json");
    const out = [];
    for (let r of result)
      out.push(r.toJSON());
    res.send(JSON.stringify(out ? out : []));
  }

  static sendModel(res: Response, result: Model)
  {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(result ? result.toJSON() : {}));
  }
}

export default Util;