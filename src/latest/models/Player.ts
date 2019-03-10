import Model from "@util/Model";


class Player extends Model
{
  id: number;
  name: string;
  photoUrl: string;
  teamId: number;

  constructor(id: number)
  {
    super();
    this.id = id;
  }

  build(name: string, photoUrl: string, teamId: number): Player
  {
    this.name = name;
    this.photoUrl = photoUrl;
    this.teamId = teamId;
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