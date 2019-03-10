import Model from "@util/Model";
import Player from "@lt/models/Player";

class Team extends Model
{
  id: number;
  name: string;
  logoUrl: string;
  players: Player[];

  constructor(id: number)
  {
    super();
    this.id = id;
  }

  build(name: string, logoUrl: string, players: Player[]): Team
  {
    this.name = name;
    this.logoUrl = logoUrl;
    this.players = players;
    return this;
  }

  toJSON()
  {
    return {
      id: this.id,
      name: this.name,
      logo_url: this.logoUrl,
      players: this.players
    };
  }
}

export default Team;