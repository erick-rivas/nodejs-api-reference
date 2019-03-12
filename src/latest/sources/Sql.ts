import Match from "@lt/models/Match";
import Player from "@lt/models/Player";
import Score from "@lt/models/Score";
import Team from "@lt/models/Team";
import User from "@lt/models/User";
import { MType } from "@lt/models/helpers/Const";

interface Sql
{
  getMatchList(fs: { teamId?: number }): Promise<Match[]>;
  getPlayerList(fs: { teamId?: number }): Promise<Player[]>;
  getTeamList(fs: { userId?: number }): Promise<Team[]>;

  getMatchDetails(matchId: number): Promise<Match>;
  getPlayerDetails(playerId: number): Promise<Player>;
  getScoreDetails(scoreId: number): Promise<Score>;
  getTeamDetails(teamId: number): Promise<Team>;
  getUserAuth(email: string, password: string): Promise<User>;
  getUserDetails(userId: number): Promise<User>;

  fetchMatch(match: Match): Promise<Match>;
  fetchScore(score: Score): Promise<Score>;
  fetchTeam(team: Team): Promise<Team>;

  saveMatch(args: { date: Date, type: MType, visitorId: number, localId: number }): Promise<Match>;
  saveScore(args: { min: number, matchId: number, playerId: number }): Promise<Score>;

  setMatch(matchId: number, args: { type?: MType }): Promise<Match>;
  setPlayer(playerId: number, args: { teamId?: number }): Promise<Player>;

  deleteMatch(matchId: number): Promise<void>;
}

export default Sql;