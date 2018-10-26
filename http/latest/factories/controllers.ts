import Pets from "@http/controllers/pets";
import Toys from "@http/controllers/toys";
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