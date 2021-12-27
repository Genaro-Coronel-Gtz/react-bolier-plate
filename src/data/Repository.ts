/* eslint-disable class-methods-use-this */
import Pokemon from './Models/Pokemon';
import Todo from './Models/Todo';

export default class DataRepository {
  private static instance: DataRepository;

  public pokemon: Pokemon;

  public todo: Todo;

  public constructor() {
    this.pokemon = Pokemon.init();
    this.todo = Todo.init();
  }

  public static getInstance(): DataRepository {
    if (!DataRepository.instance) {
      DataRepository.instance = new DataRepository();
    }
    return DataRepository.instance;
  }
}
