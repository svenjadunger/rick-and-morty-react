import React, { useState } from 'react';
import './Searchbar.css';

const Searchbar = () => {
  const [query, setQuery] = useState('');
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`);
      const data = await response.json();
      setCharacters(data.results);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchCharacters();
  };

  return (
    <div>
      <form id="searchForm" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Type to search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </form>
      <div id="searchResults" className="d-flex flex-wrap">
        {characters.map(character => (
          <div key={character.id} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={character.image} alt={character.name} style={{ width: '200px', height: '200px' }} />
              </div>
              <div className="flip-card-back">
                <h1>{character.name}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Searchbar;
