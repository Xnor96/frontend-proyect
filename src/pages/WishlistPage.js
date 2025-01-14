import React from 'react';

const WishlistPage = ({ wishlist, onRemoveFromWishlist, onMoveToCart }) => {
    return (
      <div className="wishlist-page container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Lista de Deseos</h1>
        {wishlist.length === 0 ? (
          <p>Tu lista de deseos está vacía</p>
        ) : (
          <div className="wishlist-page__items grid grid-cols-1 md:grid-cols-3 gap-6">
            {wishlist.map(item => (
              <div key={item.id} className="wishlist-page__item border rounded-lg p-4">
                <h3 className="font-bold">{item.name}</h3>
                <p>{item.price}</p>
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => onMoveToCart(item)}
                    className="wishlist-page__move-button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Mover al Carrito
                  </button>
                  <button
                    onClick={() => onRemoveFromWishlist(item.id)}
                    className="wishlist-page__remove-button bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };


export default WishlistPage;

