import React, { useState } from 'react';
import CheckoutSummary from '../components/CheckoutSummary';
import { createOrder } from '../services/api';

const CheckoutPage = ({ cart, onRemoveFromCart, onClearCart, onNavigate }) => {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: ''
  });
  const [loading, setLoading] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!customerInfo.name || !customerInfo.email || !customerInfo.address) {
      setError('Por favor completa todos los campos obligatorios');
      return;
    }
    
    try {
      setLoading(true);
      setError('');
      
      // Calcular el total
      const totalAmount = cart.reduce(
        (sum, item) => sum + parseFloat(item.price.toString().replace('$', '')) * 1, 
        0
      );
      
      // Crear objeto de orden
      const orderData = {
        customerName: customerInfo.name,
        customerEmail: customerInfo.email,
        totalAmount,
        items: cart.map(item => ({
          productId: item.id,
          productName: item.name,
          price: parseFloat(item.price.toString().replace('$', '')),
          quantity: 1
        }))
      };
      
      // Enviar orden a la API
      await createOrder(orderData);
      
      // Limpiar carrito y mostrar confirmación
      onClearCart();
      setOrderPlaced(true);
      
    } catch (error) {
      console.error('Error creating order:', error);
      setError('Ocurrió un error al procesar tu orden. Por favor intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  if (orderPlaced) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-6">¡Pedido Realizado con Éxito!</h1>
        <p className="mb-6">Gracias por tu compra. Te hemos enviado un correo con los detalles.</p>
        <button 
          onClick={() => onNavigate('home')}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Volver al inicio
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Finalizar Compra</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Información de Envío</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1">Nombre completo *</label>
              <input
                type="text"
                name="name"
                value={customerInfo.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Email *</label>
              <input
                type="email"
                name="email"
                value={customerInfo.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Dirección *</label>
              <input
                type="text"
                name="address"
                value={customerInfo.address}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Ciudad</label>
              <input
                type="text"
                name="city"
                value={customerInfo.city}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1">Código Postal</label>
              <input
                type="text"
                name="zipCode"
                value={customerInfo.zipCode}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full"
              disabled={loading}
            >
              {loading ? 'Procesando...' : 'Confirmar Pedido'}
            </button>
          </form>
        </div>
        <div>
          <CheckoutSummary 
            cart={cart}
            onRemoveItem={onRemoveFromCart}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;