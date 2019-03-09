import Pets from "@lt/controllers/Pets";
import Toys from "@lt/controllers/Toys";
import Sql from "@lt/sources/sql/Source";

class Factory
{
  static createPets()
  {
    return new Pets(
      Sql.getInstance()
    );
  }

  static createToys()
  {
    return new Toys();
  }
}

export default Factory;