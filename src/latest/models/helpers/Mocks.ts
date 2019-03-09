import Pet from "@lt/models/Pet";
import Toy from "@lt/models/Toy";
import Generator from "@util/Generator";
import { Animal } from "@lt/models/helpers/Const";

class Mocks
{
  static Pets()
  {
    return [
      new Pet(Generator.getId()).build("Frida", Animal.DOG, "https://www.debate.com.mx/export/sites/debate/img/2017/10/13/frida_ap2.jpeg_715265926.jpeg", [this.Toys()[0], this.Toys()[2]]),
      new Pet(Generator.getId()).build("Chuck", Animal.CAT, "https://www.petdarling.com/articulos/wp-content/uploads/2014/11/eliminar-pis-de-gato.jpg", [this.Toys()[1]]),
      new Pet(Generator.getId()).build("Gordo", Animal.TURTLE, "https://www.curiosfera.com/wp-content/uploads/2018/01/que-come-tortuga.jpg", [])
    ];
  }
  static Toys()
  {
    return [
      new Toy(Generator.getId()).build("Ball"),
      new Toy(Generator.getId()).build("Bone"),
      new Toy(Generator.getId()).build("Sausage with mustard")
    ]
  }
}

export default Mocks;