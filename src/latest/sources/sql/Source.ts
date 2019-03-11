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
      `SELECT m.* FROM \`match\` m WHERE m.match_id = ?`;
    const params = [matchId];
    const res = await this.getDetails(query, params, new Mapper.MatchMapper());
    const fetch = await this.fetch(res, r => this.fetchMatch(r));
    return fetch[0];
  }
  async getPlayerDetails(playerId: number): Promise<Player>
  {
    const query =
      `SELECT p.* FROM player p WHERE p.player_id = ?`;
    const params = [playerId];
    const res = await this.getDetails(query, params, new Mapper.PlayerMapper());
    return res[0];
  }
  async getScoreDetails(scoreId: number): Promise<Score>
  {
    const query =
      `SELECT s.* FROM score s WHERE s.score_id = ?`;
    const params = [scoreId];
    const res = await this.getDetails(query, params, new Mapper.ScoreMapper());
    const fetch = await this.fetch(res, r => this.fetchScore(r));
    return fetch[0];
  }
  async getTeamDetails(teamId: number): Promise<Team>
  {
    const query =
      `SELECT t.* FROM team t WHERE t.team_id = ?`;
    const params = [teamId];
    const res = await this.getDetails(query, params, new Mapper.TeamMapper());
    const fetch = await this.fetch(res, r => this.fetchTeam(r));
    return fetch[0];
  }

  async getUserAuth(email: string, password: string): Promise<User>
  {
    const query = `
      SELECT u.* FROM user u 
      WHERE u.email = ? AND u.password = ?`;
    const params = [email, password];
    const res = await this.getDetails(query, params, new Mapper.UserMapper());
    return res[0];
  }

  async getUserDetails(userId: number): Promise<User>
  {
    const query =
      `SELECT u.* FROM user u WHERE u.user_id = ?`;
    const params = [userId];
    const res = await this.getDetails(query, params, new Mapper.UserMapper());
    return res[0];
  }


  async getMatchList(teamId: number): Promise<Match[]>
  {
    const query =
      `SELECT m.* FROM \`match\` m`;
    const filter: Pair[] = [];
    //TODO ADD FILTERS
    const res = await this.get(query, filter, new Mapper.MatchMapper());
    return this.fetch(res, r => this.fetchMatch(r));
  }

  async getPlayerList(teamId: number): Promise<Player[]>
  {
    const query =
      `SELECT p.* FROM player p`;
    const filter: Pair[] = [];
    if (teamId) filter.push(new Pair("p.team_id", teamId));
    const res = await this.get(query, filter, new Mapper.PlayerMapper());
    return res;
  }

  async getTeamList(userId: number): Promise<Team[]>
  {
    const query =
      `SELECT t.* FROM team t
       INNER JOIN user_team ut ON t.team_id = ut.team_id`;
    const filter: Pair[] = [];
    if (userId) filter.push(new Pair("ut.user_id", userId));
    const res = await this.get(query, filter, new Mapper.TeamMapper());
    return this.fetch(res, r => this.fetchTeam(r));
  }


  async fetchMatch(match: Match): Promise<Match>
  {
    const sQuery = "SELECT score_id FROM score WHERE match_id = ?";
    const sKeys = await this.getAny(sQuery, [match.id]);

    const visitor = await this.getTeamDetails(match.visitor.id);
    const local = await this.getTeamDetails(match.local.id);
    const scores = [];
    for (let key of sKeys)
      scores.push(await this.getScoreDetails(key.score_id));

    return Object.assign(match,
      {
        visitor: visitor,
        local: local,
        scores: scores
      });
  }

  async fetchScore(score: Score): Promise<Score>
  {
    const player = await this.getPlayerDetails(score.player.id);
    return Object.assign(score,
      {
        player: player
      });
  }

  async fetchTeam(team: Team): Promise<Team>
  {
    const pQuery = "SELECT player_id FROM player WHERE team_id = ?";
    const pKeys = await this.getAny(pQuery, [team.id]);

    const players = [];
    for (let key of pKeys)
      players.push(await this.getPlayerDetails(key.player_id));

    return Object.assign(team,
      {
        players: players
      });
  }

  async saveMatch(match: Match): Promise<Match>
  {
    const query =
      "INSERT INTO \`match\` (match_id, date, type, visitor_id, local_id)";
    const params = [match.id, match.date, match.type, match.visitor.id, match.local.id];
    await this.save(query, params);
    return this.getMatchDetails(match.id);
  }

  async saveScore(score: Score): Promise<Score>
  {
    const query =
      "INSERT INTO \`score\` (score_id, min, player_id, match_id)";
    const params = [score.id, score.min, score.player.id, score.matchId];
    await this.save(query, params);
    return this.getScoreDetails(score.id);
  }


  async setMatch(matchId: number, type: MType): Promise<Match>
  {
    const query = "UPDATE \`match\`";
    const columns: Pair[] = [];
    if (type) columns.push(new Pair("type", type));
    await this.set(query, columns, "match_id", matchId);
    return this.getMatchDetails(matchId);
  }

  async setPlayer(playerId: number, teamId: number): Promise<Player>
  {
    const query = "UPDATE player";
    const columns: Pair[] = [];
    if (teamId) columns.push(new Pair("team_id", teamId));
    await this.set(query, columns, "player_id", playerId);
    return this.getPlayerDetails(playerId);
  }


  async deleteMatch(matchId: number): Promise<void>
  {
    const query = ` 
      DELETE FROM score WHERE match_id = ?;
      DELETE FROM \`match\` WHERE match_id = ?;`;
    const params = [matchId, matchId];
    return this.delete(query, params);
  }

  private static instance: Source;
  private constructor() { super(); }
  static getInstance(): Source { return this.instance || (this.instance = new this()); }
}

export default Source;