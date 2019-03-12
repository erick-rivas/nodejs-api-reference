import { Router } from "express";
import Debugs from "@support/controllers/Debugs";
import Generators from "@support/Generators";

class Dev
{
  private router: Router;
  private debugs: Debugs;
  private generators: Generators;

  constructor()
  {
    this.router = Router();
    this.debugs = new Debugs();
    this.generators = new Generators();
  }

  init(): Router
  {
    /**
    * @api {get} /init_db Init database with default data
    * @apiName InitDb
    * @apiGroup Dev
    * @apiVersion 1.0.0
    * @apiSampleRequest off
    */

    this.router.get("/init_db", (req, res) => this.debugs.initDb(req, res));

    /**
    * @api {get} /generate/api Generate templates for api
    * @apiName GenerateApi
    * @apiGroup Dev
    * @apiVersion 1.0.0
    * @apiSampleRequest off
    */

    this.router.get("/generate/api", (req, res) => this.generators.api(req, res));

    /**
   * @api {get} /generate/react Generate templates for react
   * @apiName GenerateReact
   * @apiGroup Dev
   * @apiVersion 1.0.0
   * @apiSampleRequest off
   */

    this.router.get("/generate/react", (req, res) => this.generators.react(req, res));

    return this.router;
  }
}

export default Dev;