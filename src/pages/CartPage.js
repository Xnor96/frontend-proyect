import React from 'react';


const CartPage = ({ cart, onRemoveFromCart, onClearCart }) => {
    const total = cart.reduce((sum, item) => sum + parseFloat(item.price.slice(1)), 0);
    
    return (
      <div className="cart-page container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Carrito de Compras</h1>
        {cart.length === 0 ? (
          <p>Tu carrito está vacío</p>
        ) : (
          <>
            <div className="cart-page__items">
              {cart.map(item => (
                <div key={item.id} className="cart-page__item flex justify-between items-center border-b py-4">
                  <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p>{item.price}</p>
                  </div>
                  <button
                    onClick={() => onRemoveFromCart(item.id)}
                    className="cart-page__remove-button text-red-500 hover:text-red-600"
                  >
                    Eliminar
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-page__summary mt-6">
              <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
              <button
                onClick={onClearCart}
                className="cart-page__clear-button bg-red-500 text-white px-4 py-2 rounded mt-4 hover:bg-red-600"
              >
                Vaciar Carrito
              </button>
            </div>
          </>
        )}
      </div>
    );
  };

  export default CartPage;

