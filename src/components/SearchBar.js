import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    
    const handleSubmit = (e) => {
      e.preventDefault();
      onSearch(query);
    };
    
    return (
      <form onSubmit={handleSubmit} className="search-bar flex gap-2 mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar productos..."
          className="search-bar__input flex-1 p-2 border rounded"
        />
        <button 
          type="submit" 
          className="search-bar__button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blu-600"
        >
          <Search className="w-4 h-4" />
        </button>
      </form>
    );
  };

  export default SearchBar;