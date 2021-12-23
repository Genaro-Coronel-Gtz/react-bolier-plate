/* eslint-disable class-methods-use-this */
import Pokemon from './Models/Pokemon';

export default class DataRepository {
  private static instance: DataRepository;

  public pokemon: Pokemon;

  public constructor() {
    this.pokemon = Pokemon.init();
  }

  public static create(): DataRepository {
    if (!DataRepository.instance) {
      DataRepository.instance = new DataRepository();
    }
    return DataRepository.instance;
  }
}
