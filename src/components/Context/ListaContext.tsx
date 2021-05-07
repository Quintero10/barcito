import axios from "axios";
import React, { createContext, useState, FC, useEffect, useRef } from "react";
import { ErrorGenericContext } from "./ErrorGenericContext";

//Interface
export interface IListasContextInterface {
  image:string | undefined;
  name:string | undefined;
  thumbnail:string | undefined;
}
//Type
export type ListaContextState = {
  setParametroBusqueda:(name:string)=>void;
  setParametroBusquedaVaso:(vaso:string)=>void;
  elementosLista: IListasContextInterface[];
 
};
//DefaultValues
const ListaContextDefaultValues: ListaContextState = {
  setParametroBusqueda: () => {},
  setParametroBusquedaVaso:()=>{},
  elementosLista: [] 
};
//CreateContext
export const ListaContext = createContext<ListaContextState>(
  ListaContextDefaultValues
);
//COMPONENT
const ListaContextProvider: FC = ({ children }) => {
 //State
 const [elementosLista, setearElementosLista] = useState<IListasContextInterface[]>(ListaContextDefaultValues.elementosLista);
 
 //useContext
 const {setGenericError}=React.useContext(ErrorGenericContext);
 
 //Functions
 const setParametroBusqueda= (busqueda:string) => { 
    getElementsByIngredient(busqueda);
  }
 const setParametroBusquedaVaso=(busqueda:string)=>{
    getElementsByGlass(busqueda)
  }
  const getElementsByGlass=async(busqueda: string) =>{
    try{
      console.log("getElementsByGlass")
    console.log(busqueda)
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${busqueda}`;
    
    const categorias = await axios.get(url).catch(error=>{throw new Error(error)});
    console.log(categorias);
    let responseDataJson=categorias.data.drinks;
  
    console.log(responseDataJson);
    const elementos:IListasContextInterface[]=[];
    for(let element in responseDataJson){
      elementos.push({name:responseDataJson[element].strDrink,image:responseDataJson[element].strDrinkThumb,thumbnail:'Click for recipe!'})
    }
    setearElementosLista(elementos);
    }catch(error){
      console.error(error);
      setGenericError(true)
    }
    
    
  }
  
    const getElementsByIngredient= async(elementoBusqueda:String ) =>{
      try{
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${elementoBusqueda}`;
        const categorias = await axios.get(url);
        let responseDataJson=categorias.data.drinks;
    
        console.log(responseDataJson);
        const elementos:IListasContextInterface[]=[];
        for(let element in responseDataJson){
          elementos.push({name:responseDataJson[element].strDrink,image:responseDataJson[element].strDrinkThumb,thumbnail:'Click for recipe!'})
        }
        setearElementosLista(elementos);

      }catch(error){
        console.error(error);
        setGenericError(true)
      }
     
    }
  //End Functions

  //Hooks
  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      // do componentDidMount logic
      console.log("ListaContext mounted")
      
    } else {
      // do componentDidUpdate logic
      console.log("ListaContext componentdidupdate");
      
    }
  },[]);

  //Return
  return (
    <ListaContext.Provider
      value={{
        elementosLista,
        setParametroBusqueda,
        setParametroBusquedaVaso
        
      }}
    >
      {children}
    </ListaContext.Provider>
  );
};

export default ListaContextProvider;

