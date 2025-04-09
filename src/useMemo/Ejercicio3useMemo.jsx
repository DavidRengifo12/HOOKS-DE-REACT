import React, { useState, useMemo } from "react";

export default function Ejercicio3useMemo() {
  const [numero, setNumero] = useState(0); // Solo se recalcula si cambia "numero"

  const resultadoMemo = useMemo(() => {
    console.log("🔄 Recalculando resultado...");
    return numero + 100;
  }, [numero]);

  return (
    <div>
       <h2>Demostración de useMemo</h2>{" "}
      <p>
        <strong>Valor de número:</strong> {numero}
      </p>
    
      <p>
        <strong>Resultado memoizado (número + 100):</strong> {resultadoMemo}
      </p>

      <button
        onClick={() =>
          numero != 10 ? setNumero(numero + 1) : setNumero(numero)
        }
      >
      Aumentar número{" "}
      </button>
    </div>
  );
}
