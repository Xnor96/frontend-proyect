import React from 'react';
import { Truck, Shield, Phone } from 'lucide-react';

const HomePage = ({ onNavigate }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Bienvenido a Mishka
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Descubre nuestra increíble selección de productos con los mejores precios del mercado.
        </p>
        <button
          onClick={() => onNavigate('catalog')}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600"
        >
          Ver Catálogo
        </button>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Feature 1 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <Truck className="w-8 h-8 text-blue-500 mb-3" />
          <h3 className="text-xl font-semibold mb-2">Envío Gratis</h3>
          <p className="text-gray-600">En todos tus pedidos superiores a $50</p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <Shield className="w-8 h-8 text-blue-500 mb-3" />
          <h3 className="text-xl font-semibold mb-2">Garantía</h3>
          <p className="text-gray-600">30 días de garantía en todos los productos</p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <Phone className="w-8 h-8 text-blue-500 mb-3" />
          <h3 className="text-xl font-semibold mb-2">Soporte 24/7</h3>
          <p className="text-gray-600">Atención al cliente disponible todo el día</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;