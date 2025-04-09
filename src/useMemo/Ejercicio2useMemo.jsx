import React, { useState, useMemo } from 'react';

export default function Ejercicio2useMemo() {
  const [numero, setNumero] = useState(2);
  
  // Memoizamos si el número es par, evitando cálculos innecesarios
  const esPar = useMemo(() => {
    console.log('Verificando si el número es par...');
    return numero % 2 === 0;
  }, [numero]);

  return (
    <div>
      <p><strong>Número:</strong> {numero}</p>
      <p><strong>Es par:</strong> {esPar ? ' Sí' : ' No'}</p>
      <button onClick={() => setNumero(prev => prev + 1)}>
        Cambiar número
      </button>
    </div>
  );
}
