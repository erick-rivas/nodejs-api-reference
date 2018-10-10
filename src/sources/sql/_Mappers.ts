import Pet from "@models/_Pet";
import Toy from "@models/_Toy";
import { Mapper } from "./Mapper";


class PetMapper extends Mapper<Pet>
{
  transform(data: any): Pet
  {
    return new Pet(data.pet_id)
      .build(
        data.name,
        Pet.getAnimal(data.animal),
        data.photo,
        []);
  }
}

class ToyMapper extends Mapper<Toy>
{
  transform(data: any): Toy  
  {
    return new Toy(data.toy_id)
      .build(
        data.name
      );
  }
}

export { PetMapper, ToyMapper };