import { Router } from "express";
import DevCtrl from "@http/controllers/dev";

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
    this.router.get("/restart", (req, res) => this.ctrl.restart(req, res));
    this.router.get("/generate", (req, res) => this.ctrl.generate(req, res));
    return this.router;
  }
}

export default Dev;