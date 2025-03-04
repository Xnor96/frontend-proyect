import React from 'react';

const CartPage = ({ cart, onRemoveFromCart, onClearCart, onCheckout }) => {
  const total = cart.reduce((sum, item) => {
    // Manejar el precio como número o string
    const price = typeof item.price === 'string' 
      ? parseFloat(item.price.replace('$', '')) 
      : item.price;
    return sum + price;
  }, 0);
  
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
            <div className="flex mt-4 space-x-4">
              <button
                onClick={onClearCart}
                className="cart-page__clear-button bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Vaciar Carrito
              </button>
              <button
                onClick={onCheckout}
                className="cart-page__checkout-button bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Proceder al Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;