import { Router } from "express";
import _Routes from "./_routes";

class Routes
{
  private router: Router;

  constructor()
  {
    this.router = Router();
  }

  init(): Router
  {
    //TODO remove
    let mockRoutes = new _Routes().init();
    this.router = mockRoutes;

    return this.router;
  }

}

export default Routes;
