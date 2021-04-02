import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
//import CategoriasProvider from './components/Context/CategoriasContext';
import Title from './components/Title';
import { ListGhostingExample } from './components/DrinkList';
import { PrimaryButton } from 'office-ui-fabric-react';


function App() {



  return (
    <div className="App">
     
       
        <Search />
        <ListGhostingExample />
        
        

     
    </div>
  );
}


export default App;

//comentario de prueba
//comentario 2 de prueba