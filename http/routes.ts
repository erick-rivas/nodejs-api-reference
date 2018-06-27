require("module-alias/register");
import { Router } from "express";

class Routes
{
  private router: Router;

  constructor()
  {
    this.router = Router();
  }

  init(): Router
  {
    return this.router;
  }

}

export default Routes;
