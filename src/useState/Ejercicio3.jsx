//MOSTARR Y OCULTAR EL MENSAJE useState
import { useState } from "react";

function Ejercicio3() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Ocultar" : "Mostrar"} texto
      </button>
      {visible && <p>¡Hola! Este es un mensaje.</p>}
    </div>
  );
}

export default Ejercicio3;