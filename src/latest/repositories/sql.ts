import Pet from "@models/Pet";
import Toy from "@models/Toy";

interface Sql
{
  getPetList(): Promise<Pet[]>;
  getToyList(petId?: number): Promise<Toy[]>;

  getPetDetails(petId: number): Promise<Pet>;
  fetchPets(pets: Pet[]): Promise<Pet[]>;
  savePet(pet: Pet): Promise<Pet>;
  setPet(petId: number): Promise<Pet>;
  deletePet(petId: number): Promise<void>;
}

export default Sql;