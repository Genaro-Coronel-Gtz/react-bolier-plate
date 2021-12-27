/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataRepository from '../../data/Repository';
import GenericResponse from '../../data/structures/GenericResponse';

const CreateTodo = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();
  // Este repository deberia de estar disponible en todoa la app
  // Para no crear otra instancia ya que es un singleton.
  const repository = DataRepository.getInstance();

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const todo = {
      title,
      body,
    };
    repository.todo.create(todo).then((Response: GenericResponse) => {
      if (Response.data.message === 'success') {
        alert('Registro creado correctamente');
        navigate('/todos');
      }
    });
  };

  return (
    <div>
      <h2>
        Create Todo
      </h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Body:
          <input
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </label>
        <input type="submit" value="Create new" />
      </form>
    </div>
  );
};

export default CreateTodo;
