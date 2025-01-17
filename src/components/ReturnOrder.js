import React, { useState } from 'react';

const ReturnOrder = ({ order, onSubmitReturn }) => {
  const [reason, setReason] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitReturn({
      orderId: order.id,
      reason,
      details,
      date: new Date().toISOString()
    });
  };

  return (
    <div className="return-order bg-white p-6 rounded-lg shadow-lg">
      <h2 className="return-order__title text-2xl font-bold mb-6">
        Solicitud de Devolución
      </h2>

      <div className="return-order__order-info mb-6 p-4 bg-gray-50 rounded">
        <h3 className="font-semibold mb-2">Detalles del Pedido</h3>
        <p>Número de Pedido: {order.id}</p>
        <p>Fecha de Compra: {new Date(order.date).toLocaleDateString()}</p>
        <p>Total: {order.total}</p>
      </div>

      <form onSubmit={handleSubmit} className="return-order__form space-y-4">
        <div>
          <label className="block mb-2 font-medium">
            Motivo de la Devolución
          </label>
          <select
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Seleccione un motivo</option>
            <option value="defective">Producto Defectuoso</option>
            <option value="wrong-item">Producto Incorrecto</option>
            <option value="not-satisfied">No Satisfecho</option>
            <option value="other">Otro</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Detalles Adicionales
          </label>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="w-full p-2 border rounded"
            rows="4"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="return-order__submit bg-blue-600 text-white px-6 py-2 rounded
                   hover:bg-blue-700 transition-colors"
        >
          Enviar Solicitud
        </button>
      </form>
    </div>
  );
};

export default ReturnOrder;