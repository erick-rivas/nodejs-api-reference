import Repository from "@lt/repositories/Sql";
import { Pair } from "@util/Util";
import Match from "@lt/models/Match";
import Player from "@lt/models/Player";
import Score from "@lt/models/Score";
import Team from "@lt/models/Team";
import User from "@lt/models/User";
import { MType } from "@lt/models/helpers/Const";

import Executor from "@lt/sources/sql/Executor";
import * as Mapper from "@lt/sources/sql/Mappers";

class Source extends Executor implements Repository
{
  async getMatchDetails(matchId: number): Promise<Match>
  {
    const query =
      `SELECT m.* FROM match m WHERE m.match_id = ?`;
    const params = [matchId];
    const res = await this.getDetails(query, params, new Mapper.MatchMapper());
    //TODO CHECK FETCH
    return res[0];
  }
  async getPlayerDetails(playerId: number): Promise<Player>
  {
    const query =
      `SELECT p.* FROM player p WHERE p.player_id = ?`;
    const params = [playerId];
    const res = await this.getDetails(query, params, new Mapper.PlayerMapper());
    //TODO CHECK FETCH
    return res[0];
  }
  async getScoreDetails(scoreId: number): Promise<Score>
  {
    const query =
      `SELECT s.* FROM score s WHERE s.score_id = ?`;
    const params = [scoreId];
    const res = await this.getDetails(query, params, new Mapper.ScoreMapper());
    //TODO CHECK FETCH
    return res[0];
  }
  async getTeamDetails(teamId: number): Promise<Team>
  {
    const query =
      `SELECT t.* FROM team t WHERE t.team_id = ?`;
    const params = [teamId];
    const res = await this.getDetails(query, params, new Mapper.TeamMapper());
    //TODO CHECK FETCH
    return res[0];
  }
  async getUserDetails(userId: number): Promise<User>
  {
    const query =
      `SELECT u.* FROM user u WHERE u.user_id = ?`;
    const params = [userId];
    const res = await this.getDetails(query, params, new Mapper.UserMapper());
    //TODO CHECK FETCH
    return res[0];
  }


  async getMatchList(teamId: number): Promise<Match[]>
  {
    const query =
      `SELECT m.* FROM match m`;
    const filter = [];
    //TODO ADD FILTERS
    const res = await this.get(query, filter, new Mapper.MatchMapper());
    //TODO CHECK FETCH
    return res;
  }
  async getPlayerList(teamId: number): Promise<Player[]>
  {
    const query =
      `SELECT p.* FROM player p`;
    const filter = [];
    //TODO ADD FILTERS
    const res = await this.get(query, filter, new Mapper.PlayerMapper());
    //TODO CHECK FETCH
    return res;
  }
  async getTeamList(userId: number): Promise<Team[]>
  {
    const query =
      `SELECT t.* FROM team t`;
    const filter = [];
    //TODO ADD FILTERS
    const res = await this.get(query, filter, new Mapper.TeamMapper());
    //TODO CHECK FETCH
    return res;
  }


  async saveMatch(match: Match): Promise<Match>
  {
    //TODO
    return null;
  }
  async saveScore(score: Score): Promise<Score>
  {
    //TODO
    return null;
  }


  async setMatch(matchId: number, type: MType): Promise<Match>
  {
    const query = "UPDATE match";
    const columns = [];
    //TODO ADD COLUMNS
    await this.set(query, columns, "match_id", matchId);
    return this.getMatchDetails(matchId);
  }
  async setPlayer(playerId: number, teamId: number): Promise<Player>
  {
    const query = "UPDATE player";
    const columns = [];
    //TODO ADD COLUMNS
    await this.set(query, columns, "player_id", playerId);
    return this.getPlayerDetails(playerId);
  }


  async deleteMatch(matchId: number): Promise<void>
  {
    const query =
      "DELETE FROM match WHERE match_id = ?;"
    //TODO CHECK EXTRA DELETES
    const params = [matchId];
    return this.delete(query, params);
  }

  private static instance: Source;
  private constructor() { super(); }
  static getInstance(): Source { return this.instance || (this.instance = new this()); }
}

export default Source;