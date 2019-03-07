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
    this.router.get("/db/init", (req, res) => this.ctrl.initDb(req, res));
    this.router.get("/models/generate", (req, res) => this.ctrl.generateModels(req, res));
    return this.router;
  }
}

export default Dev;