import Pets from "@controllers/pets";
import Toys from "@controllers/toys";
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