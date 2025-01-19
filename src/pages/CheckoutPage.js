import React from 'react';
import CheckoutSummary from '../components/CheckoutSummary';
import useCart from '../hooks/useCart';

const CheckoutPage = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Finalizar Compra</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {/* Aquí irá el formulario de envío */}
        </div>
        <div>
          <CheckoutSummary 
            cart={cart}
            onRemoveItem={removeFromCart}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;