import React from 'react';
import { ShoppingCart, Heart, Home, Package } from 'lucide-react';

const Navbar = ({ onNavigate, currentRoute }) => {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button onClick={() => onNavigate('home')} className="text-2xl font-bold text-white">
              Mishka Complementos
            </button>
          </div>
          
          <div className="flex space-x-4 items-center">
            <NavButton 
              icon={<Home className="w-5 h-5" />}
              text="Inicio"
              isActive={currentRoute === 'home'}
              onClick={() => onNavigate('home')}
            />
            <NavButton 
              icon={<Package className="w-5 h-5" />}
              text="Catálogo"
              isActive={currentRoute === 'catalog'}
              onClick={() => onNavigate('catalog')}
            />
            <NavButton 
              icon={<ShoppingCart className="w-5 h-5" />}
              text="Carrito"
              isActive={currentRoute === 'cart'}
              onClick={() => onNavigate('cart')}
            />
            <NavButton 
              icon={<Heart className="w-5 h-5" />}
              text="Favoritos"
              isActive={currentRoute === 'wishlist'}
              onClick={() => onNavigate('wishlist')}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

// Componente auxiliar para los botones de navegación
const NavButton = ({ icon, text, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium ${
      isActive
        ? 'bg-gray-900 text-white'
        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    }`}
  >
    {icon}
    <span>{text}</span>
  </button>
);

export default Navbar;