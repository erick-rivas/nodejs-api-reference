import Model from "@util/Model";
import Player from "@lt/models/Player";

class Score extends Model
{ 
  id: number;
  min: number;
  matchId: number;
  player: Player;

  constructor(id: number)
  {
    super();
    this.id = id;
  }

  build(min: number, matchId: number, player: Player): Score
  {
    this.min = min;
    this.matchId = matchId;
    this.player = player;
    return this;
  }

  toJSON()
  {
    return {
      id: this.id,
      min: this.min,
      match_id: this.matchId,
      player: this.player
    };
  }
}

export default Score;