/* eslint-disable no-alert */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataRepository from '../../data/Repository';
import TodoStructure from '../../data/structures/Todo';
import GenericResponse from '../../data/structures/GenericResponse';
import './Todo.css';

const SUCCESS = 'success';
const Todo = () => {
  const repository = DataRepository.create();
  const [todos, setTodos] = useState<TodoStructure | undefined>();
  const navigate = useNavigate();

  const getTodos = () => {
    repository.todo.all().then((response: TodoStructure) => {
      setTodos(response);
    });
  };

  useEffect(() => {
    getTodos();
  }, []);

  const eliminar = (id: number) => {
    repository.todo.destroy(id).then((response: GenericResponse) => {
      if (response.data.message === SUCCESS) {
        alert('Todo deleted succesfully');
        getTodos();
      } else {
        alert('There was an error deleting record');
      }
    });
  };

  return (
    <div className="todos-table">
      <td>
        <button
          type="button"
          onClick={() => {
            navigate('/todos/new', { replace: true });
          }}
        >
          Nuevo
        </button>
      </td>
      {todos !== undefined && todos.data.length > 0
        && (
          <table>
            <tr>
              <th> ID </th>
              <th> Title </th>
              <th> Body </th>
              <th> </th>
              <th> </th>
            </tr>
            {todos.data.map((todo, key) => (
              <tr key={key}>
                <td>
                  {' '}
                  {todo._id}
                </td>
                <td>
                  {' '}
                  {todo.title}
                </td>
                <td>
                  {' '}
                  {todo.body}
                </td>
                <td>
                  <button type="button" onClick={() => { eliminar(todo._id); }}>
                    Eliminar
                  </button>
                </td>
                <td>
                  <button type="button"> Actualizar </button>
                </td>
              </tr>
            ))}
          </table>
        )}
    </div>
  );
};

export default Todo;
