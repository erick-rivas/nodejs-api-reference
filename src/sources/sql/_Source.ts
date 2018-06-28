require("module-alias/register");
import Repository from "@repositories/_Sql";
import { Generator } from "@models/Util";
import Pet from "@models/_Pet";
import Toy from "@models/_Toy";

import Executor from "./Executor";
import * as Mapper from "./_Mappers";


class Source extends Executor implements Repository
{
  private static instance: Source;

  private constructor()
  {
    super();
  }

  static getInstance(): Source
  {
    return this.instance || (this.instance = new this());
  }

  async getPetList(): Promise<Pet[]>
  {
    return null;
  }

  async getToyList(petId?: number): Promise<Toy[]>
  {
    return null;
  }



  async getPetDetails(petId: number): Promise<Pet>
  {
    return null;
  }

  async getToyDetails(toyId: number): Promise<Toy>
  {
    return null;
  }



  async fetchPets(pets: Pet[]): Promise<Pet[]>
  {
    return null;
  }



  async savePet(pet: Pet): Promise<Pet>
  {
    return null;
  }



  async setPet(petId: number): Promise<Pet>
  {
    return null;
  }



  async deletePet(petId: number): Promise<void>
  {
    return null;
  }

}

export default Source;