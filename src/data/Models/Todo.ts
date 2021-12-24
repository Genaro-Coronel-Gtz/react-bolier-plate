/* eslint-disable class-methods-use-this */
import AsyncRequests from '../Requests';
import TodoStructure from '../structures/Todo';
import GenericResponse from '../structures/GenericResponse';

class Todo extends AsyncRequests {
  private id: number | null;

  public static instance: Todo;

  constructor(_id: number | null = null) {
    super();
    this.id = _id;
  }

  public static init(): Todo {
    if (!Todo.instance) {
      Todo.instance = new Todo();
    }
    return Todo.instance;
  }

  public all = async (): Promise<TodoStructure> => {
    const url = 'http://localhost:8000';
    const res: TodoStructure | unknown = await this.get(url);
    const response: TodoStructure = res as TodoStructure;
    return response;
  };

  public destroy = async (id: number): Promise<GenericResponse> => {
    const url = `http://localhost:8000/delete/${id}`;
    const res: GenericResponse | unknown = await this.delete(url);
    const response: GenericResponse = res as GenericResponse;
    return response;
  };

  public create = async (data: unknown): Promise<GenericResponse> => {
    const url = 'http://localhost:8000/create';
    const res: GenericResponse | unknown = await this.post(url, data);
    const response: GenericResponse = res as GenericResponse;
    return response;
  };

  // Falta el find y el update
}

export default Todo;
