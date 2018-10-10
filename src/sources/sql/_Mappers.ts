import Pet from "@models/_Pet";
import Toy from "@models/_Toy";
import { Mapper } from "./Mapper";


class PetMapper extends Mapper<Pet>
{
  transform(query: any): Pet
  {
    return new Pet(query.pet_id)
      .build(
        query.name,
        Pet.getAnimal(query.animal),
        query.photo,
        []);
  }
}

class ToyMapper extends Mapper<Toy>
{
  transform(query: any): Toy  
  {
    return new Toy(query.toy_id)
      .build(
        query.name
      );
  }
}

export { PetMapper, ToyMapper };