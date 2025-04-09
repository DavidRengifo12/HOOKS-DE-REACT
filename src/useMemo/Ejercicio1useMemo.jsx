//CONTADOR useMemo

import React, { useState, useMemo } from "react";

function Ejercicio1useMemo() {
  const [numero, setNumero] = useState(1);
  const [contador, setContador] = useState(0);

  const doble = useMemo(() => {
    console.log("Calculando el doble...");
    return numero * 2;
  }, [numero]); // Solo se recalcula si `numero` cambia.

  return (
    <div>
      <p>Doble: {doble}</p>
      <button onClick={() => setNumero(numero + 1)}>Incrementar número</button>
      <button onClick={() => setContador(contador + 1)}>Incrementar contador</button>
    </div>
  );
}

export default Ejercicio1useMemo;