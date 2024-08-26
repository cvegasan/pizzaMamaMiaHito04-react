import CardPizza from './CardPizza'
import ConsumoApiArregloPizzas from './ConsumoApiArregloPizzas';
import Header from './Header';
import {useState} from 'react';

const Home = () => {

  const [apiData, setApiData] = useState([]);

  const manejoDatosRecibidos = (data) => {
    setApiData(data);
  };

  const apiUrl = "http://localhost:5000/api/pizzas";

  return (
    <>
      <Header/>
      <div className="container pt-4 pb-4">
          <div className="row justify-content-center">
            <ConsumoApiArregloPizzas apiUrl={apiUrl} onDatosRecibidos={manejoDatosRecibidos}/>
            {apiData.map((item) => (
                                      <div className="col-md-4 mb-4" key={item.id}>
                                          <CardPizza
                                              nombre={item.name}
                                              desc={item.desc}
                                              precio={item.price}
                                              ingredientes={item.ingredients.join(', ')}
                                              imagen={item.img}
                                              esPizza={false}
                                          />
                                      </div>
                                    )
                        )
            }
          </div>
        </div>
    </>
  )
}

export default Home;
