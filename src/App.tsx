import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
//import CategoriasProvider from './components/Context/CategoriasContext';
import Title from './components/Title';
import { ListGhostingExample } from '../src/components/DrinkList';
import { PrimaryButton } from 'office-ui-fabric-react';
import { ICategoriasContextInterface } from './components/Context/CategoriasContext';
import axios from 'axios';
import './components/DrinkList.css'
import './components/Search.css'

interface IApp{
  items:ICategoriasContextInterface[],
  renderList:boolean
}

class App extends  React.Component<{},IApp> {

  constructor(props: {}) {
    super(props);

    this.state = {
      items: [],
      renderList:false
    };
    
    this.fillItemsDrinks();
    
  } 
  //TODO: No debería llamarse dos veces
  componentDidMount(){
    this.fillItemsDrinks();
  }

  fillItemsDrinks=()=>{

    console.log("fillItemsDrinks");
   
    const url =`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_Glass`;
    axios.get(url).then(
      (response)=>{

        let responseDataJson=response.data.drinks;
         
      
        this.setState(prevState => ({
          items: prevState.items.map(
          (obj,index) => (Object.assign(obj, {name:responseDataJson[index].strDrink,image:responseDataJson[index].strDrinkThumb,thumbnail:'Cocktail Glass'}))
        )
      }))
      
         
        this.setState({items:[...this.state.items,...responseDataJson]})

        setTimeout(()=>{
          this.setState({renderList:true})
        },200)
        
      }
      
      )
     
  }
  render() {return(
    <div className="App">
     
        <div className="search">
          <Search />
        </div>

        {this.state.renderList?

        <div className="drinklist">
          <ListGhostingExample items={this.state.items} />
        </div>:''

        }
        
        

     
    </div>
  );
  }
}


export default App;

//comentario de prueba
//comentario 2 de prueba