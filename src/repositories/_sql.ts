require("module-alias/register");
import Pet from "@models/_Pet";
import Toy from "@models/_Toy";

interface Sql
{
  getPetList(): Promise<Pet[]>;
  getToyList(petId?: number): Promise<Toy[]>;

  getPetDetails(petId: number): Promise<Pet>;
  getToyDetails(toyId: number): Promise<Toy>;

  fetchPets(pets: Pet[]): Promise<Pet[]>;
  savePet(pet: Pet): Promise<Pet>;
  setPet(petId: number): Promise<Pet>;
  deletePet(petId: number): Promise<void>;
}

export default Sql;