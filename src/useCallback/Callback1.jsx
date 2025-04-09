//LISTA DE AGREGAR ELEMENTOS
import React, { useState, useCallback } from 'react';

const Callback1 = () => {
  const [items, setItems] = useState(["Elemento 1", "Elemento 2"]);

  // Función memorizada usando useCallback
  const handleAgregar = useCallback(() => {
    setItems(prevItems => [...prevItems, `Elemento ${prevItems.length + 1}`]);
  }, []);

  return (
    <div>
      <h1>Lista de Elementos</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={handleAgregar}>Agregar Elemento</button>
    </div>
  );
};

export default Callback1;