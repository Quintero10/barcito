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

interface IApp{
  items:ICategoriasContextInterface[],
  renderList:boolean
  
}

const App =()=> {
 
  const hola=useContext(CategoriasContext);
  console.log(hola);  
 

  
  return(

<CategoriasProvider>
    <div className="App">
     
        <div className="search">
          <Search />
        </div>

        {
        
        /*
        <div className="drinklist">
          <ListGhostingExample items={null} />
        </div>:''
          */
        }
     
    </div>
    </CategoriasProvider>
  );
}


export default App;

//comentario de prueba
//comentario 2 de prueba