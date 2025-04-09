import { useEffect, useState } from "react";

function EjemploUseEffect() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("El contador ha cambiado:", contador);
  }, [contador]); // Se ejecuta cuando 'contador' cambia

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}

export default EjemploUseEffect;