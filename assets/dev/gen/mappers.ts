import Toy from "@models/Toy";
import Pet from "@models/Pet";

abstract class Mapper<T>
{
  transformList(dataSet: any): T[]
  {
    if (!dataSet) return [];
    const result = [];
    for (let data of dataSet)
      result.push(this.transform(data));
    return result;
  }
  abstract transform(data): T;
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

class PetMapper extends Mapper<Pet>
{
  transform(data: any): Pet  
  {
    return new Pet(data.pet_id)
      .build(
        data.name,
        data.animal,
        data.photo_url,
        []
      );
  }
}

export default {Mapper, ToyMapper,PetMapper}