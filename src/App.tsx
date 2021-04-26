import React, { useContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
//import CategoriasProvider from './components/Context/CategoriasContext';
import Title from './components/Title';
import { ListGhostingExample } from '../src/components/DrinkList';
import { PrimaryButton } from 'office-ui-fabric-react';
import { CategoriasProvider } from './components/Context/CategoriasContext';

import axios from 'axios';
import './components/DrinkList.css'
import './components/Search.css'
import ListaProvider from './components/Context/ListaContext';
import { ModalContextProvider } from './components/Context/ModalContext';
import { Modal } from '@fluentui/react';
import { ModalBasicExample } from './components/Modal';







const App =()=> {
 
 
 
  return(

  <CategoriasProvider >
    <ListaProvider>
    <div className="App">
     
        <div className="search">
          <Search   />
        </div>
        <ModalContextProvider>
        <div className="drinklist">
        <ListGhostingExample />
        </div>
        <ModalBasicExample />
       
        </ModalContextProvider>
         
    </div>
    </ListaProvider>
    </CategoriasProvider>
     /*Aquí iban DrinkList y el Modal en caso de corresponder*/
    
  );
}


export default App;

//comentario de prueba
//comentario 2 de prueba