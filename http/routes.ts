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
    let mockRouter = new _Routes().init();
    this.router = mockRouter;
    
    return this.router;
  }

}

export default Routes;
