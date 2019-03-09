require("module-alias/register");
import * as bodyParser from "body-parser";
import * as express from "express";
import * as helmet from "helmet"
import * as logger from "morgan";
import * as path from "path";
import * as cors from "cors";
import * as dotenv from "dotenv";
import { Router } from "express";

import Dev from "@support/Dev";
import Resources from "@support/Resources";


class App
{
  public app;
  public server;

  public static start(): App
  {
    return new App();
  }

  constructor()
  {
    this.app = express();
    this.app.use(logger("dev"));

    //Check cors
    this.app.use(cors());

    this.app.use(helmet());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({
      extended: true
    }));
    dotenv.config();

    const rootDir = path.dirname(require.main.filename) + "/../";
    this.app.use('/', express.static(rootDir + 'assets/public'));
    this.app.use('/docs', express.static(rootDir + 'docs'));

    //Check dev
    this.app.use("/dev", new Dev().init());
    this.app.use("/resources", new Resources().init());

    //API version initialization
    this.app.use("/v1", new v1().init());


    const port = this.normalizePort(process.env.PORT || "4004");
    this.server = this.app.listen(port);
    console.log("Listening port: " + port);
  }

  private normalizePort(val)
  {
    const port = parseInt(val, 10);
    if (isNaN(port))
      return val;
    if (port >= 0)
      return port;
    return false;
  }
}


//Latest (v1)

import Routes from "@lt/Routes";
import Middlewares from "@lt/Middlewares";

class v1
{
  private router: Router;

  constructor()
  {
    this.router = Router();
  }

  public init()
  {
    this.router.use("/", new Middlewares().init());
    this.router.use("/", new Routes().init());
    return this.router;
  }
}

export { App };