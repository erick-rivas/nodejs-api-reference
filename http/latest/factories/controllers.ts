import Pets from "@http/controllers/Pets";
import Toys from "@http/controllers/Toys";
import Sql from "@sql/Source";


class Controllers
{
  static createPets()
  {
    return new Pets(
      Sql.getInstance());
  }

  static createToys()
  {
    return new Toys();
  }
}

export default Controllers;