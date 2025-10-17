import React, { useState } from 'react';
import './SearchBar.css';

interface SearchBarProps {
  onSearch: (city: string) => void;
  disabled?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, disabled }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name..."
        className="search-input"
        disabled={disabled}
      />
      <button type="submit" className="search-button" disabled={disabled}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
