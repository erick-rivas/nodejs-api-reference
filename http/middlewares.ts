import { Router } from "express";
import _Middlewares from "./_middlewares";

class Middlewares
{
  private router: Router;

  constructor()
  {
    this.router = Router();
  }

  init(): Middlewares
  {
    //TODO remove
    let mockMiddleware = new _Middlewares().init();
    this.router = mockMiddleware;

    return this.router;
  }

}

export default Middlewares;
