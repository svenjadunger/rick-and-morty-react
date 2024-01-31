import React from 'react';
import Header from './components/Header/Header';
import Searchbar from './components/Searchbar/Searchbar';
import FlipCard from './components/Card/FlipCard'; 
import './App.css';

function App() {
  return (
    <>
      <Header />
      <h1>Hello World</h1>
      <div className="App">
        <div className="search-bar-container">
          <Searchbar />
        </div>
        <FlipCard /> 
      </div>
    </>
  );
}

export default App;
