import Match from "@lt/models/Match";
import Player from "@lt/models/Player";
import Score from "@lt/models/Score";
import Team from "@lt/models/Team";
import User from "@lt/models/User";

interface Sql
{
  getMatchDetails(matchId: number): Promise<Match>;
  getPlayerDetails(playerId: number): Promise<Player>;
  getScoreDetails(scoreId: number): Promise<Score>;
  getTeamDetails(teamId: number): Promise<Team>;
  getUserDetails(userId: number): Promise<User>;

  getMatchList(): Promise<Match[]>; //TODO CHECK FILTERS
  getPlayerList(): Promise<Player[]>; //TODO CHECK FILTERS
  getTeamList(): Promise<Team[]>; //TODO CHECK FILTERS

  saveMatch(match: Match): Promise<Match>;
  saveScore(score: Score): Promise<Score>;

  setMatch(matchId: number): Promise<Match>; //TODO CHECK ARGS
  setPlayer(playerId: number): Promise<Player>; //TODO CHECK ARGS

  deleteMatch(matchId: number): Promise<void>;
}

export default Sql;