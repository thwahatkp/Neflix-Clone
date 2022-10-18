import React from 'react'
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import Card from './Components/Card/Card';
import { ActionMovies, ComedyMovies, HorrorMovies, OriginalsMovies, RomanceMovies } from './url';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Card title="Netflix Orginal" url={OriginalsMovies}/>
      <Card title="Action" isSmall url={ActionMovies}/>
      <Card title="Comedy" isSmall url={ComedyMovies}/>
      <Card title="Horror" isSmall url={HorrorMovies}/>
      <Card title="Romance" isSmall url={RomanceMovies}/>

    </div>
  );
}

export default App;
