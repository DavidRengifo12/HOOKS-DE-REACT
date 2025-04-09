//CONTADOR
import { useState, useCallback } from 'react';

function Callback2() {
  const [contador, setContador] = useState(0);

  const incrementar = useCallback(() => {
    setContador((prev) => prev + 1);
  }, []);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default Callback2;