import React, { useContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
//import CategoriasProvider from './components/Context/CategoriasContext';
import Title from './components/Title';
import { ListGhostingExample } from '../src/components/DrinkList';
import { PrimaryButton } from 'office-ui-fabric-react';
import { CategoriasContext,  ICategoriasContextInterface } from './components/Context/CategoriasContext';
import CategoriasProvider from './components/Context/CategoriasContext';
import axios from 'axios';
import './components/DrinkList.css'
import './components/Search.css'





const App =()=> {
 
  const contextValues=useContext(CategoriasContext);
 
  return(

  <CategoriasProvider >
    <div className="App">
     
        <div className="search">
          {/*<Search name={contextValues?.name}  />*/}
        </div>

          {/*Aquí iban DrinkList y el Modal en caso de corresponder*/}
    </div>
    </CategoriasProvider>
   
  );
}


export default App;

//comentario de prueba
//comentario 2 de prueba