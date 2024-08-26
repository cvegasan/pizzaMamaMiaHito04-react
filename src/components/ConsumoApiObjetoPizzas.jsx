import { useState, useEffect } from 'react';
//onDataReceived: Es una función callback que se llama después de que los datos se han obtenido y
//almacenado en data. Esta función envía los datos de vuelta al componente padre

//Cómo funcionan las callbacks en javascript
//Una función callback en javascript (y como concepto general) es una función que se usa para propagar
//el resultado de una operación. Esta función callback se pasa como parámetro a otra función,
//y es llamada con un resultado cuando la función complete su operación

const ConsumoApiObjetoPizzas = ({ apiUrl, onDatosRecibidos }) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const lecturaDatos = async () => {
        try {
          const response = await fetch(apiUrl);
          const result = await response.json();
          setData(result);
          console.log(result,'<---result');
          if (onDatosRecibidos) {
            onDatosRecibidos(result);
          }
        } catch (error) {
          console.error('Error al consumir la API:', error);
        } finally {
          setLoading(false);
        }
      };

      lecturaDatos();
    }, []);

    if (loading) {
      return <div>Cargando datos...</div>;
    }

    return null;
  };

export default ConsumoApiObjetoPizzas
