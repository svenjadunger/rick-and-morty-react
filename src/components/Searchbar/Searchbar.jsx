import React, { useState } from 'react';
import './Searchbar.css';

const Searchbar = () => {
  const [query, setQuery] = useState('');
  const [characters, setCharacters] = useState([]);

  // this function is called if user types in searchbar
  const handleInputChange = async (e) => {
    const input = e.target.value;
    setQuery(input); // actualizes the searchtext

    // case sensitivity
    const searchQuery = input.toLowerCase();

    if (searchQuery) {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${searchQuery}`);
        const data = await response.json();
        setCharacters(data.results); // stores the search-results
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      setCharacters([]); // empties result-list if searchfield is empty 
    }
  };

  return (
    <div>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Type to search..."
          value={query}
          onChange={handleInputChange} // reacts on changes in searchfield
        />
      </div>
      <div id="searchResults" className="d-flex flex-wrap">
        {characters.map((character) => (
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
