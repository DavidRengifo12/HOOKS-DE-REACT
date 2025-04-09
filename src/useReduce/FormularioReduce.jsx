//FORMULARIO hook useReduce
import { useReducer } from 'react';

const initialState = { nombre: "", email: "" };

function reducer(state, action) {
  return { ...state, [action.name]: action.value };
}

function FormularioReduce() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={state.nombre}
        onChange={(e) => dispatch({ name: e.target.name, value: e.target.value })}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={state.email}
        onChange={(e) => dispatch({ name: e.target.name, value: e.target.value })}
      />
      <p>Nombre: {state.nombre}</p>
      <p>Email: {state.email}</p>
    </div>
  );
}

export default FormularioReduce;