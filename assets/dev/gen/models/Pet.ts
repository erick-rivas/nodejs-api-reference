import Model from "@models/Model";
import Toy from "@models/Toy";
import { Animal } from "@models/helpers/Const";

class Pet extends Model
{
  static getAnimal = (val: string): Animal => getEnum(Animal, val, Animal.OTHER);

  id: number;
  name: string;
  animal: Animal;
  photoUrl: string;
  toys: Toy[];

  constructor(id: number)
  {
    super();
    this.id = id;
  }

  build(name: string,animal: Animal,photoUrl: string,toys: Toy[]): Pet
  {
    this.name = name;
    this.animal = animal;
    this.photoUrl = photoUrl;
    this.toys = toys;
    return this;
  }

  toJSON()
  {
    return {
      id: this.id,
      name: this.name,
      animal: this.animal,
      photo_url: this.photoUrl,
      toys: this.toys
    };
  }
}

export default Pet;