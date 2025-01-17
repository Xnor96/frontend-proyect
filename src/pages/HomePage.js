import React from 'react';
import { Truck, Shield, Phone } from 'lucide-react';

const HomePage = ({ onNavigate }) => {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-background-dark mb-4">
            Bienvenido a Mishka!
          </h1>
          <p className="text-lg text-gray-600 mb-6">
          𝘈𝘤𝘤𝘦𝘴𝘰𝘳𝘪𝘰𝘴 𝘲𝘶𝘦 𝘤𝘰𝘮𝘱𝘭𝘦𝘮𝘦𝘯𝘵𝘢𝘯 𝘵𝘶 𝘦𝘴𝘵𝘪𝘭𝘰.
          </p>
          <button
            onClick={() => onNavigate('catalog')}
            className="bg-[rgb(245,166,48)] text-white px-6 py-3 rounded-lg font-medium hover:bg-[rgb(222,149,43)]"
          >
            Ver Catálogo
          </button>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <Truck className="w-8 h-8 text-primary-DEFAULT mb-3" />
            <h3 className="text-xl font-semibold mb-2">Envíos dentro de Sinaloa</h3>
            <p className="text-gray-600">Envíos por correos de México (sin mínimo de compra) desde $60 pesos mx.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <Truck className="w-8 h-8 text-primary-DEFAULT mb-3" />
            <h3 className="text-xl font-semibold mb-2">Envíos Nacionales</h3>
            <p className="text-gray-600">Atención al cliente disponible todo el día</p>
          </div>
  
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <Shield className="w-8 h-8 text-secondary-DEFAULT mb-3" />
            <h3 className="text-xl font-semibold mb-2">Garantía</h3>
            <p className="text-gray-600">30 días de garantía en todos los productos</p>
          </div>
  
        </div>
      </div>
    );
  };

export default HomePage;