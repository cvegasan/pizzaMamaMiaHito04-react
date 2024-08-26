import { useState } from 'react';
import {Button} from 'react-bootstrap';
import Product from './Product';
import FormatoMiles from './FormatoMiles';
import pizzaCart from '../../pizzas.js';

const Cart = () => {
  const enviarFormulario = (e) => {
    e.preventDefault()
  }
    const [cart, setCart] = useState({});

    const agregarPizza = (productId, cantidad) => {
      setCart((prevCart) => {
                              const newCart = { ...prevCart };
                              if (cantidad > 0) {
                                if (newCart[productId]) {
                                  newCart[productId].cantidad = cantidad;
                                } else {
                                  const product = pizzaCart.find(p => p.id === productId);
                                  newCart[productId] = { ...product, cantidad };
                                }
                              } else {
                                delete newCart[productId];
                              }
                              return newCart;
      });
    };
  
    const eliminarPizza = (productId, cantidad) => {
      setCart((prevCart) => {
                              const newCart = { ...prevCart };
                              if (cantidad > 0) {
                                if (newCart[productId]) {
                                  newCart[productId].cantidad = cantidad;
                                }
                              } else {
                                delete newCart[productId];
                              }
                              return newCart;
      });
    };

    const calculateTotal = () => {
      let total = 0;
      for (const item of Object.values(cart)) {
        total += item.price * item.cantidad;
      }
      return total;
    };

    const totalGeneral=calculateTotal();

    return (
      <div>
        <form onSubmit={enviarFormulario}>
            <div className="cls-carrito">
                <div className="cls-columna-pizzas">
                  <h3>Carta Pizzas</h3>
                  {pizzaCart.map(product => (
                    <Product
                      key={product.id}
                      product={product}
                      quantity={cart[product.id]?.cantidad || 0}
                      onAdd={agregarPizza}
                      onRemove={eliminarPizza}
                    />
                  ))}
                </div>
        
                <div className="cls-columna-detalle">
                  <h3>Detalle de la compra</h3>
                  {Object.values(cart).length === 0 ? (
                    <p>El carrito está vacío</p>
                  ) : (
                    Object.values(cart).map(item => (
                                                      <div key={item.id} className="cls-item-detalle">
                                                        <p>Pizza {item.name}</p>
                                                        <p>Cantidad: {item.cantidad}</p>
                                                        <p>Total: $<FormatoMiles numero={item.price * item.cantidad}/></p>
                                                      </div>
                    ))
                  )}
                  <h4>Total General: $<FormatoMiles numero={totalGeneral}/></h4>
                  <Button variant="primary">Pagar</Button>
                </div>
            </div>
        </form>
      </div>
    );
  };

export default Cart;
