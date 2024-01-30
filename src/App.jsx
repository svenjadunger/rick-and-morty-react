import { useState } from 'react'

import './App.css'
import Button from './components/Searchbar/Searchbar'
import Header from './components/Header/Header'


function App() {
  return (
    <>
      <Header />
                    <h1>Hello World</h1>
      <Button />
      <div className="App">
        <div className="search-bar-container">
          <div>Searchbar</div>
          <div>SearchResults</div>
             </div>
      </div>
    </>
  )
}

export default App



