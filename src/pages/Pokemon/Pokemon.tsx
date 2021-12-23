/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import Repository from '../../data/Repository';
import Pokemons from '../../data/structures/Pokemon';

const Todo = () => {
  const repository = Repository.getInstance();
  const [todos, setTodos] = useState<Pokemons | undefined>();
  useEffect(() => {
    repository.pokemon.all().then((response: Pokemons) => {
      setTodos(response);
    });
  }, [repository]);

  return (
    <div>
      <h2>
        {todos !== undefined && todos.data !== undefined
          && (
          <ul>
            { todos.data.results.map((poke, key) => (
              <li key={key}>
                {' '}
                {poke.name}
                {' '}
              </li>
            ))}
          </ul>
          )}
      </h2>
    </div>
  );
};

export default Todo;
