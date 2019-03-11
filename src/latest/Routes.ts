import { Router } from "express";
import Factory from "@lt/controllers/Factory";
import Matches from "@lt/controllers/Matches";
import Players from "@lt/controllers/Players";
import Scores from "@lt/controllers/Scores";
import Teams from "@lt/controllers/Teams";
import Users from "@lt/controllers/Users";

class Routes
{
  private router: Router;
  private matches: Matches;
  private players: Players;
  private scores: Scores;
  private teams: Teams;
  private users: Users;

  constructor()
  {
    this.router = Router();
    this.matches = Factory.createMatches();
    this.players = Factory.createPlayers();
    this.scores = Factory.createScores();
    this.teams = Factory.createTeams();
    this.users = Factory.createUsers();
  }

  init(): Router
  {
    this.router.get("/matches", (req, res) => this.matches.getList(req, res));
    this.router.post("/matches", (req, res) => this.matches.save(req, res));
    this.router.put("/matches/:id", (req, res) => this.matches.update(req, res));
    this.router.delete("/matches/:id", (req, res) => this.matches.delete(req, res));
    this.router.get("/players/top", (req, res) => this.players.top(req, res));
    this.router.get("/players", (req, res) => this.players.getList(req, res));
    this.router.put("/players/:id", (req, res) => this.players.update(req, res));
    this.router.post("/scores", (req, res) => this.scores.save(req, res));
    this.router.get("/teams/:id", (req, res) => this.teams.getDetails(req, res));
    this.router.get("/teams", (req, res) => this.teams.getList(req, res));
    this.router.get("/users/auth", (req, res) => this.users.auth(req, res));
    this.router.get("/users/:id", (req, res) => this.users.getDetails(req, res));

    return this.router;
  }
}

export default Routes;