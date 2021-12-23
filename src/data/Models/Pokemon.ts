/* eslint-disable class-methods-use-this */
import AsyncRequests from '../Requests';
import Pokemons from '../structures/Pokemon';

class Pokemon extends AsyncRequests {
  private id: number | null;

  public static instance: Pokemon;

  constructor(_id: number | null = null) {
    super();
    this.id = _id;
  }

  public static init(): Pokemon {
    if (!Pokemon.instance) {
      Pokemon.instance = new Pokemon();
    }
    return Pokemon.instance;
  }

  public all = async (): Promise<Pokemons> => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=10';
    const res: Pokemons | unknown = await this.get(url);
    const response: Pokemons = res as Pokemons;
    return response;
  };
}

export default Pokemon;
