import React from 'react';
import { ShoppingCart, Heart, Home, Package } from 'lucide-react';

const Navbar = ({ onNavigate, currentRoute }) => {
    return (
        <nav className="bg-[rgb(245,166,48)] text-white"> 
        <div className="container mx-auto px-4">
          <div className="flex justify-between h-16">
            <button onClick={() => onNavigate('home')} className="text-white text-2xl font-bold flex items-center">
              Mishka-Beta
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
  
  const NavButton = ({ icon, text, isActive, onClick }) => (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors
        ${isActive 
          ? 'bg-primary-DEFAULT text-white' 
          : 'text-gray-300 hover:bg-primary-dark hover:text-white'
        }`}
    >
      {icon}
      <span>{text}</span>
    </button>
  );

export default Navbar;