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


export { Mapper };