import Pets from "@controllers/_pets";
import Toys from "@controllers/_toys";
import Sql from "@sql/_Source";


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