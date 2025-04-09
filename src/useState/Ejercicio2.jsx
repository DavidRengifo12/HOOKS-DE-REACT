//  CAMBIAR EL COLOR useState
import { useState } from "react";

function Ejercicio2() {
  const [color, setColor] = useState("green");

  return (
    <div style={{ backgroundColor: color, padding: "20px", textAlign: "center" }}>
      <p>Color del fondo: {color}</p>
      <button onClick={() => setColor(color === "green" ? "yellow" : "green")}>
        Click para Cambiar color
      </button>
    </div>
  );
}

export default Ejercicio2;