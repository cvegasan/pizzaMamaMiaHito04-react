import CardPizza from './CardPizza'
import ConsumoApiObjetoPizzas from './ConsumoApiObjetoPizzas';
import {useState} from 'react';

const Pizza = () => {

    const [apiPizza, setApiPizza] = useState({});

    const manejoDatosRecibidos = (data) => {
        setApiPizza(data);
    };
  
    const apiUrl = "http://localhost:5000/api/pizzas/p001";

  return (
    <div>
      <div className="container my-2 pt-2 pb-2">
          <div className="row justify-content-center">
          <ConsumoApiObjetoPizzas apiUrl={apiUrl} onDatosRecibidos={manejoDatosRecibidos}/>
            {JSON.stringify(apiPizza) !== '{}' && (
                                      <div className="col-md-4 mb-4" key={apiPizza.id}>
                                          <CardPizza
                                            nombre={apiPizza.name}
                                            desc={apiPizza.desc}
                                            precio={apiPizza.price}
                                            ingredientes={apiPizza.ingredients.join(', ')}
                                            imagen={apiPizza.img}
                                            esPizza={true}
                                        />
                                      </div>
            )}
          </div>
        </div>
    </div>
  )
}

export default Pizza;