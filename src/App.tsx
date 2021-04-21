import React, { useContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
//import CategoriasProvider from './components/Context/CategoriasContext';
import Title from './components/Title';
import { ListGhostingExample } from '../src/components/DrinkList';
import { PrimaryButton } from 'office-ui-fabric-react';
import { AppCtx,  CategoriasProvider } from './components/Context/CategoriasContext';

import axios from 'axios';
import './components/DrinkList.css'
import './components/Search.css'
import { createCtx } from './components/Context/ListaContext';



const [ctx, TextProvider] = createCtx("");
export const TextContext = ctx;

const App =()=> {
 
 
 
  return(

  <CategoriasProvider >
    <TextProvider>
    <div className="App">
     
        <div className="search">
          <Search   />
        </div>
        <ListGhostingExample />
         
    </div>
    </TextProvider>
    </CategoriasProvider>
     /*Aquí iban DrinkList y el Modal en caso de corresponder*/
    
  );
}


export default App;

//comentario de prueba
//comentario 2 de prueba