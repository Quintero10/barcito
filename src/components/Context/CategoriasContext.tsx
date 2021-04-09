import { nullRender } from '@fluentui/react';
import react,{createContext,useState} from 'react';


//interface
export interface ICategoriasContextInterface {
  name: string | undefined;
  image: any | undefined;
  thumbnail:any;
}

export const CategoriasContext = react.createContext<ICategoriasContextInterface | null>(null);


const CategoriasProvider= (props:ICategoriasContextInterface) => {

  const[hola,guardarHola]=useState({name:'agustin',image:'none',thumbnail:'holis'});

  

  return (
    <CategoriasContext.Provider value={hola}>
        {props}
    </CategoriasContext.Provider>
  );


}

export default CategoriasProvider;

/*
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

*/