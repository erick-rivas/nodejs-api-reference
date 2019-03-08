import { Router } from "express";
import Debugs from "@support/controllers/Debugs";
import Generators from "@support/controllers/Generators";

class Dev
{
  private router: Router;
  private debugs: Debugs;
  private generators: Generators;


  constructor()
  {
    this.router = Router();
    this.debugs = new Debugs();
    this.generators = new Generators();

  }

  init(): Router
  {
    this.router.get("/init_db", (req, res) => this.debugs.initDb(req, res));
    this.router.get("/generate_files", (req, res) => this.generators.generateFiles(req, res));
    return this.router;
  }
}

export default Dev;