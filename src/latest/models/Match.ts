import Model from "@util/Model";
import Team from "@lt/models/Team";
import Score from "@lt/models/Score";

class Match extends Model
{
  id: number;
  date: Date;
  visitor: Team;
  local: Team;
  scores: Score[];

  constructor(id: number)
  {
    super();
    this.id = id;
  }

  build(date: Date, visitor: Team, local: Team, scores: Score[]): Match
  {
    this.date = date;
    this.visitor = visitor;
    this.local = local;
    this.scores = scores;
    return this;
  }

  toJSON()
  {
    return {
      id: this.id,
      date: this.date,
      visitor: this.visitor,
      local: this.local,
      scores: this.scores
    };
  }
}

export default Match;