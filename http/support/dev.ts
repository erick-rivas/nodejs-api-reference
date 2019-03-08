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
    return this.router;
  }
}

export default Dev;