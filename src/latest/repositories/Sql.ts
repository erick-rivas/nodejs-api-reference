import Match from "@lt/models/Match";
import Player from "@lt/models/Player";
import Score from "@lt/models/Score";
import Team from "@lt/models/Team";
import User from "@lt/models/User";
import { MType } from "@lt/models/helpers/Const";

interface Sql
{
  getMatchList(teamId: number): Promise<Match[]>;
  getPlayerList(teamId: number): Promise<Player[]>;
  getTeamList(userId: number): Promise<Team[]>;

  getMatchDetails(matchId: number): Promise<Match>;
  getPlayerDetails(playerId: number): Promise<Player>;
  getScoreDetails(scoreId: number): Promise<Score>;
  getTeamDetails(teamId: number): Promise<Team>;
  getUserAuth(email: string, password: string): Promise<User>;
  getUserDetails(userId: number): Promise<User>;

  fetchMatch(match: Match): Promise<Match>;
  fetchScore(score: Score): Promise<Score>;
  fetchTeam(team: Team): Promise<Team>;

  saveMatch(match: Match): Promise<Match>;
  saveScore(score: Score): Promise<Score>;

  setMatch(matchId: number, type: MType): Promise<Match>;
  setPlayer(playerId: number, teamId: number): Promise<Player>;

  deleteMatch(matchId: number): Promise<void>;
}

export default Sql;