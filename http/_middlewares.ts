import { Router } from "express";
import Authentication from "@middlewares/_authentication";

class Middlewares
{
  private router: Router;
  private auth: Authentication;

  constructor()
  {
    this.router = Router();
    this.auth = new Authentication();
  }

  init(): Router
  {
    this.router.get("*", (req, res, next) => this.auth.authenticate(req, res, next));
    return this.router;
  }

}

export default Middlewares;
