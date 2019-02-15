import Model from "@models/Model";

class Toy extends Model
{

  id: number;
  name: string;

  constructor(id: number)
  {
    super();
    this.id = id;
  }

  build(name: string): Toy
  {
    this.name = name;
    return this;
  }

  toJSON()
  {
    return {
      id: this.id,
      name: this.name
    };
  }
}

export default Toy;