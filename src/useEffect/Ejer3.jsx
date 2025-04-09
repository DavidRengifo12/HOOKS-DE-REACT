import { useState, useEffect } from 'react';

function Temporizador() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos(s => s + 1);
    }, 1000);

    return () => clearInterval(intervalo); // Limpieza cuando el componente se desmonta
  }, []);

  return (
    <div>
      <h1>Segundos: {segundos}</h1>
    </div>
  );
}

export default Temporizador;