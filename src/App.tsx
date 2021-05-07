import React, { useContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';

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
import { ErrorContextProvider } from './components/Context/ErrorContext';
import { ModalError } from './components/ModalError';
import { ModalProgressIndicator } from './components/ModalProgressIndicator';
import { ErrorGenericContextProvider } from './components/Context/ErrorGenericContext';
import { ModalGenericError } from './components/ErrorGeneric';







const App =()=> {
 
 
 
  return(
<ErrorGenericContextProvider>
  <CategoriasProvider >
    <ListaProvider>
    <div className="App">
     
        <ErrorContextProvider>
        <div className="search">
          <Search   />
          </div>
          <ModalError />
          <ModalGenericError />
        
        </ErrorContextProvider>
        <ModalContextProvider>
        <div className="drinklist">
        <ListGhostingExample />
        </div>
        <ModalProgressIndicator />
        <ModalBasicExample />
       
        </ModalContextProvider>
         
    </div>
    </ListaProvider>
    </CategoriasProvider>
    </ErrorGenericContextProvider>

    
  );
}


export default App;

