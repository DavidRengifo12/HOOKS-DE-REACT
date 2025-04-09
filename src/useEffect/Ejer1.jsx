import { useState, useEffect } from "react";

export default function Ejer1() {
  const [datos, setDatos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(true);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("error al obtener los datos");
        const data = await response.json();
        setDatos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setloading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>cargando datos...</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      <h1>Datos de la API</h1>
      <ul>
        {datos.map((dato) => (
          <li key={dato.id}> {dato.name} </li>
        ))}
      </ul>
    </div>
  );
}
