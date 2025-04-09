//CONTADOR useState

import { useState } from 'react';

export default function Ejercicio1() {
  const [contador, setContador] = useState(0);

  function handleClick() {
    setContador(contador + 1);
  }

  return (
    <button onClick={handleClick}>
      Hiciste clic {contador} veces
    </button>
  );
}