import Model from "@util/Model";
import Player from "@lt/models/Player";

class Score implements Model
{ 
  id: number;
  min: number;
  matchId: number;
  player: Player;

  constructor(id: number)
  {
    this.id = id;
  }

  build(attrs: { min: number, matchId: number, player: Player }): Score
  {
    this.min = attrs.min;
    this.matchId = attrs.matchId;
    this.player = attrs.player;
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