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
    this.router.get("/generate_files", (req, res) => this.ctrl.generateFiles(req, res));
    this.router.get("/generate_models", (req, res) => this.ctrl.generateModels(req, res));
    this.router.get("/generate_mappers", (req, res) => this.ctrl.generateMappers(req, res));
    this.router.get("/generate_routes", (req, res) => this.ctrl.generateRoutes(req, res));
    this.router.get("/generate_controllers", (req, res) => this.ctrl.generateControllers(req, res));
    return this.router;
  }
}

export default Dev;