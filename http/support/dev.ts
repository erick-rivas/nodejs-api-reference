import { Router } from "express";
import DevCtrl from "@support/controllers/dev";

class Dev
{
  private router: Router;
  private ctrl: DevCtrl;

  constructor()
  {
    this.router = Router();
    this.ctrl = new DevCtrl();
  }

  init(): Router
  {
    this.router.get("/init_db", (req, res) => this.ctrl.initDb(req, res));
    this.router.get("/model_generator", (req, res) => this.ctrl.generateModels(req, res));
    this.router.get("/mapper_generator", (req, res) => this.ctrl.generateMappers(req, res));
    this.router.get("/controller_generator", (req, res) => this.ctrl.generateControllers(req, res));
    return this.router;
  }
}

export default Dev;