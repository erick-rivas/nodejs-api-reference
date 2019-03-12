import Model from "@util/Model";
import Player from "@lt/models/Player";

class Team implements Model
{ 
  id: number;
  name: string;
  logoUrl: string;
  players: Player[];

  constructor(id: number)
  {
    this.id = id;
  }

  build(attrs: { name: string, logoUrl: string, players: Player[] }): Team
  {
    this.name = attrs.name;
    this.logoUrl = attrs.logoUrl;
    this.players = attrs.players;
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