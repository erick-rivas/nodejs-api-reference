import Match from "@lt/models/Match";
import Player from "@lt/models/Player";
import Score from "@lt/models/Score";
import Team from "@lt/models/Team";
import User from "@lt/models/User";

abstract class Mapper<T>
{
  transformList(dataSet: any): T[]
  {
    if (!dataSet) return [];
    const result = [];
    for (let data of dataSet)
      result.push(this.transform(data));
    return result;
  }
  abstract transform(data): T;
}

class MatchMapper extends Mapper<Match>
{
  transform(data: any): Match  
  {
    return new Match(data.match_id)
      .build(
        data.date,
        Match.getMType(data.type),
        new Team(data.team_id),
        new Team(data.team_id),
        []
      );
  }
}

class PlayerMapper extends Mapper<Player>
{
  transform(data: any): Player  
  {
    return new Player(data.player_id)
      .build(
        data.name,
        data.photo_url,
        data.team_id
      );
  }
}

class ScoreMapper extends Mapper<Score>
{
  transform(data: any): Score  
  {
    return new Score(data.score_id)
      .build(
        data.min,
        new Player(data.player_id)
      );
  }
}

class TeamMapper extends Mapper<Team>
{
  transform(data: any): Team  
  {
    return new Team(data.team_id)
      .build(
        data.name,
        data.logo_url,
        []
      );
  }
}

class UserMapper extends Mapper<User>
{
  transform(data: any): User  
  {
    return new User(data.user_id)
      .build(
        data.email,
        data.password
      );
  }
}

export { Mapper, MatchMapper, PlayerMapper, ScoreMapper, TeamMapper, UserMapper }