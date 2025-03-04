import React, { useState, useEffect } from 'react';
import ReturnOrder from '../components/ReturnOrder';
import { createReturn, getOrderById } from '../services/api';

const ReturnOrderPage = ({ onSubmit }) => {
  const [order, setOrder] = useState(null);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // En una aplicación real, el orderId vendría de parámetros de URL o estado global
  // Por ahora usamos un ID fijo de ejemplo
  const sampleOrderId = 1;

  useEffect(() => {
    const loadOrder = async () => {
      try {
        setLoading(true);
        const orderData = await getOrderById(sampleOrderId);
        setOrder(orderData);
      } catch (err) {
        console.error('Error loading order:', err);
        setError('No se pudo cargar el pedido. Por favor, intenta más tarde.');
      } finally {
        setLoading(false);
      }
    };

    loadOrder();
  }, []);

  const handleSubmitReturn = async (returnData) => {
    try {
      setLoading(true);
      await createReturn({
        orderId: order.id,
        reason: returnData.reason,
        details: returnData.details
      });
      
      setOrderSubmitted(true);
    } catch (err) {
      console.error('Error submitting return:', err);
      setError('Ocurrió un error al enviar la solicitud de devolución');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="container mx-auto px-4 py-8 text-center">Cargando...</div>;
  }

  if (orderSubmitted) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-6">¡Solicitud Enviada!</h1>
        <p className="mb-6">Tu solicitud de devolución ha sido recibida y será procesada en breve.</p>
        <button 
          onClick={onSubmit}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Volver al inicio
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Solicitud de Devolución</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      {order ? (
        <ReturnOrder 
          order={order}
          onSubmitReturn={handleSubmitReturn}
        />
      ) : (
        <p>No se pudo cargar la información del pedido. Inténtalo de nuevo más tarde.</p>
      )}
    </div>
  );
};

export default ReturnOrderPage;