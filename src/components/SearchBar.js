import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  
  // Manejar cambios en tiempo real
  const handleChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery); // Llamar a onSearch cada vez que el input cambie
  };

  // Prevenir el comportamiento por defecto del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  return (
    <form onSubmit={handleSubmit} className="search-bar flex gap-2 mb-6">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Buscar productos..."
        className="search-bar__input flex-1 p-2 border rounded"
      />
      <button 
        type="button" 
        className="search-bar__button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        <Search className="w-4 h-4" />
      </button>
    </form>
  );
};

export default SearchBar;