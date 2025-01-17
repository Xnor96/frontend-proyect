import React from 'react';

const CheckoutSummary = ({ cart, onRemoveItem }) => {
  const subtotal = cart.reduce((sum, item) => sum + parseFloat(item.price.slice(1)), 0);
  const shipping = subtotal >= 50 ? 0 : 10;
  const total = subtotal + shipping;

  return (
    <div className="checkout-summary bg-white p-6 rounded-lg shadow-lg">
      <h2 className="checkout-summary__title text-2xl font-bold mb-6">
        Resumen de Compra
      </h2>
      
      <div className="checkout-summary__items mb-6">
        {cart.map(item => (
          <div key={item.id} className="checkout-summary__item flex justify-between py-2 border-b">
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-gray-600">{item.price}</p>
            </div>
            <button
              onClick={() => onRemoveItem(item.id)}
              className="text-red-600 hover:text-red-800"
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
      
      <div className="checkout-summary__totals space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Envío</span>
          <span>{shipping === 0 ? 'Gratis' : `$${shipping.toFixed(2)}`}</span>
        </div>
        <div className="flex justify-between text-lg font-bold pt-2 border-t">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSummary;