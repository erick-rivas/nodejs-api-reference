require("module-alias/register");
import Pet from "@models/_Pet";
import Toy from "@models/_Toy";

abstract class Mapper<T>
{
  transformList(query: any): T[]
  {
    if (!query) return [];
    const data = [];
    for (let q of query)
      data.push(this.transform(q));
    return data;
  }
  abstract transform(query): T;
}


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

export { Mapper, PetMapper, ToyMapper };