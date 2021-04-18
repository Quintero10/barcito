import { nullRender } from '@fluentui/react';
import axios from 'axios';
import react,{createContext,useEffect,useState} from 'react';


//interface
export interface ICategoriasContextInterface {
  name: string | undefined;
  id:string | undefined;
}

export const CategoriasContext = react.createContext<ICategoriasContextInterface | null>(null);

const categories: ICategoriasContextInterface[] | null= null;

const getGlassesCategory= async()=>{
     
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

  const categorias = await axios.get(url);

  

}

export const CategoriasProvider:React.FC= ({children}) => {

   // crear el state del Context
   
  
  return (
    <CategoriasContext.Provider value={categories}>
        {children}
    </CategoriasContext.Provider>
  );


 

  

}



export default CategoriasProvider;

// categories.push({key:responseDataJson[element].strGlass,text:responseDataJson[element].strGlass});
/**
 * 
          let responseDataJson=response.data.drinks;       
          for (let element in responseDataJson) {    
                  
          }
 */