import React from 'react';
import { ShoppingCart, Heart, Home, Package } from 'lucide-react';

const Navbar = ({ onNavigate, currentRoute, cartItemCount = 0 }) => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <button onClick={() => onNavigate('home')} className="text-2xl font-bold text-white flex items-center">
            E-Shop
          </button>
          
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
              isActive={currentRoute === 'catalog' || currentRoute === 'product-details'}
              onClick={() => onNavigate('catalog')}
            />
            <NavButton 
              icon={<ShoppingCart className="w-5 h-5" />}
              text="Carrito"
              isActive={currentRoute === 'cart' || currentRoute === 'checkout'}
              onClick={() => onNavigate('cart')}
              badge={cartItemCount > 0 ? cartItemCount : null}
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

const NavButton = ({ icon, text, isActive, onClick, badge = null }) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium relative ${
      isActive
        ? 'bg-gray-900 text-white'
        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    }`}
  >
    {icon}
    <span>{text}</span>
    {badge !== null && (
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
        {badge}
      </span>
    )}
  </button>
);

export default Navbar;