import React, { useState } from 'react';
import AppHeader from './AppHeader';
import SearchAppBar from "./menu/TopMenu";
import MovieCard from './MovieCard';


function App() {
  const [card, setCard]= useState([]);
  
  setInterval(() => {
    console.log(card);       
    setCard([...card,<MovieCard/>]);
  },5000)

  return (
    <div>
       <SearchAppBar/>
       <AppHeader/>
       
         {card}
         
    </div>
  );
}

export default App;
