import Model from "@util/Model";

class Player implements Model
{
  id: number;
  name: string;
  photoUrl: string;
  teamId: number;

  constructor(id: number)
  {
    this.id = id;
  }

  build(attrs: { name: string, photoUrl: string, teamId: number }): Player
  {
    this.name = attrs.name;
    this.photoUrl = attrs.photoUrl;
    this.teamId = attrs.teamId;
    return this;
  }

  toJSON()
  {
    return {
      id: this.id,
      name: this.name,
      photo_url: this.photoUrl,
      team_id: this.teamId
    };
  }
}

export default Player;