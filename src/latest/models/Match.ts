import Model from "@util/Model";
import Team from "@lt/models/Team";
import Score from "@lt/models/Score";
import { MType } from "@lt/models/helpers/Const";
import { getEnum } from "@util/Const";

class Match extends Model
{
  static getMType = (val: string): MType => getEnum(MType, val, MType.LEAGUE);

  id: number;
  date: Date;
  type: MType;
  visitor: Team;
  local: Team;
  scores: Score[];

  constructor(id: number)
  {
    super();
    this.id = id;
  }

  build(date: Date, type: MType, visitor: Team, local: Team, scores: Score[]): Match
  {
    this.date = date;
    this.type = type;
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
      type: this.type,
      visitor: this.visitor,
      local: this.local,
      scores: this.scores
    };
  }
}

export default Match;