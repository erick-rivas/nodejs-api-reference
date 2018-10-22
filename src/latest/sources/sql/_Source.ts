import Repository from "@repositories/_Sql";
import { Pair } from "@models/helpers/Util";
import Pet from "@models/_Pet";
import Toy from "@models/_Toy";

import Executor from "./Executor";
import * as Mapper from "./_Mappers";


class Source extends Executor implements Repository
{
  async getPetList(): Promise<Pet[]>
  {
    const query = `SELECT p.* FROM pets p`;
    const filter = [];
    const res = await this.get(query, filter, new Mapper.PetMapper());
    return this.fetchPets(res);
  }

  async getToyList(petId?: number): Promise<Toy[]>
  {
    const query = `SELECT t.* FROM toys t`;
    const filter = [];
    if (petId) filter.push(new Pair("t.pet_id", petId));
    const res = await this.get(query, filter, new Mapper.ToyMapper());
    return res;
  }

  async getPetDetails(petId: number): Promise<Pet>
  {
    const query = `SELECT p.* FROM pets p WHERE p.pet_id = ?`;
    const params = [petId];
    const res = await this.getDetails(query, params, new Mapper.PetMapper());
    const fetch = await this.fetchPets(res);
    return fetch[0];
  }

  async getToyDetails(toyId: number): Promise<Toy>
  {
    const query = `SELECT t.* FROM toys t WHERE t.toy_id = ?`;
    const params = [toyId];
    const res = await this.getDetails(query, params, new Mapper.ToyMapper());
    return res[0];
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

  private static instance: Source;
  private constructor() { super(); }
  static getInstance(): Source { return this.instance || (this.instance = new this()); }
}

export default Source;