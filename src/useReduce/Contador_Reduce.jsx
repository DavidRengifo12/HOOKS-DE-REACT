//CONTADOR hook useReduce

import React, { useReducer } from 'react';


const initialState = { count: 0 };


function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
}

function Contador_Reduce() {
  // 3. Usamos useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Contador: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Incrementar</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrementar</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Resetear</button>
    </div>
  );
}

export default Contador_Reduce;