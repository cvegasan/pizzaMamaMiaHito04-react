import { useState } from 'react';
import {Button} from 'react-bootstrap';
import FormatoMiles from './FormatoMiles';

const Product = ({ product, onAdd, onRemove, quantity }) => {
    const [localQuantity, setLocalQuantity] = useState(quantity);

    const agregarPizza = () => {
      setLocalQuantity(prev => {
                                const newQuantity = prev + 1;
                                onAdd(product.id, newQuantity);
                                return newQuantity;
                                }
                    );
    };

    const eliminarPizza = () => {
      setLocalQuantity(prev => {
                                const newQuantity = Math.max(prev - 1, 0);
                                onRemove(product.id, newQuantity);
                                return newQuantity;
                                }
                    );
    };

    return (
      <div className="cls-pizza-producto">
        {/* INFORMACION DE CADA PIZZA */}
        <p>Pizza {product.name}</p>
        <div className='cls-alineacion-controles'>
            <div>
              <img src={product.img} className='cls-dimension-imagenes' alt={`Pizza ${product.name}`}></img>
            </div>
            <div className='cls-formato-ingredientes'>
                <span>Ingredientes</span>
                {product.ingredients.map((ingredientes, index) => (
                  <span key={index} className="cls-separar-ingredientes-list">{ingredientes}</span>
                ))}
            </div>
            <div className='cls-alineacion-vertical-precio'>
                <p>Precio: $<FormatoMiles numero={product.price}/></p>
            </div>
            {/* CONTROLES PARA MANEJO DE LA CANTIDAD */}
            <div className="cls-controls-cantidad">
                <Button variant="primary" onClick={eliminarPizza}>-</Button>
                    <input type="number" value={localQuantity} readOnly />
                <Button variant="primary" onClick={agregarPizza}>+</Button>
            </div>
        </div>
      </div>
    );
  };
  export default Product;
