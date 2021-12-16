/* eslint-disable react/button-has-type */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/index';
import { decrement, increment } from './counterSlice';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="decrement"
          onClick={() => dispatch(decrement())}
        >
          Decrementar
        </button>

        <span>{count}</span>
        <button
          aria-label="increment"
          onClick={() => dispatch(increment())}
        >
          Incrementar
        </button>

      </div>
    </div>
  );
};

export default Counter;
