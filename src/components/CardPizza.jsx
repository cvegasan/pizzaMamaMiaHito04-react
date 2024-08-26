import FormatoMiles from './FormatoMiles';
import iconPizza from '/icon-pizza.png'
import { Card, Button, ListGroup } from 'react-bootstrap';

const CardPizza = (props) => {
 
  return (
    <Card className='cls-tamannio-cards'>
      <Card.Img variant="top" src={props.imagen} alt={props.nombre}/>
      <Card.Body className="p-0">
            <ListGroup className="list-group-flush">
                <ListGroup.Item>
                    <Card.Title className='text-start'>Pizza {props.nombre}</Card.Title>
                </ListGroup.Item>
                {
                props.esPizza &&(
                                <ListGroup.Item>
                                    <p className='cls-card-text-justify'>{props.desc}</p>
                                </ListGroup.Item>
                                )
              }
                <ListGroup.Item className='text-center'>
                    <p>Ingredientes:</p>
                    <p className='cls-tamannio-ingredientes'><img src={iconPizza} alt="iconoPizza"></img>{props.ingredientes}</p>
                </ListGroup.Item>
                <ListGroup.Item className='text-center'>
                    <strong>Precio: $<FormatoMiles numero = {props.precio} /></strong>
                    <div className="d-flex justify-content-between pt-1 pb-1">
                        <Button variant="outline-dark" size="sm">Ver Más 👀</Button>
                        <Button variant="dark" size="sm">Añadir 🛒</Button>
                    </div>
                </ListGroup.Item>
            </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;