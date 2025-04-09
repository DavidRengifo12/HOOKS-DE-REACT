//LISTA DE TAREAS
import { useState, useCallback } from 'react';

function Callback3() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = useCallback(() => {
    const nuevaTarea = `Tarea ${tareas.length + 1}`;
    setTareas([...tareas, nuevaTarea]);
  }, [tareas]);

  const eliminarTarea = useCallback((index) => {
    setTareas(tareas.filter((_, i) => i !== index));
  }, [tareas]);

  return (
    <div>
      <h2 >LISTA DE TAREAS</h2>
      <button onClick={agregarTarea}>Nueva tarea</button>
      <ul>
        {tareas.map((tarea, index) => (
          <li className="flex justify-around" key={index}>
            <br />{tarea}
            <button onClick={() => eliminarTarea(index)}>Borrar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Callback3;