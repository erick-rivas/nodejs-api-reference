import Sql from "@lt/sources/sql/Source";
import Matches from "@lt/controllers/Matches";
import Players from "@lt/controllers/Players";
import Scores from "@lt/controllers/Scores";
import Teams from "@lt/controllers/Teams";
import Users from "@lt/controllers/Users";

class Controllers
{
  static createMatches()
  {
    return new Matches({
      sql: Sql.getInstance()
    });
  }

  static createPlayers()
  {
    return new Players({
      sql: Sql.getInstance()
    });
  }

  static createScores()
  {
    return new Scores({
      sql: Sql.getInstance()
    });
  }

  static createTeams()
  {
    return new Teams({
      sql: Sql.getInstance()
    });
  }

  static createUsers()
  {
    return new Users({
      sql: Sql.getInstance()
    });
  }
}

export default Controllers;