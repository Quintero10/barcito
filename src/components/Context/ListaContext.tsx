import axios from "axios";
import React, { createContext, useState, FC, useEffect, useRef } from "react";



export interface IListasContextInterface {
  image:string | undefined;
  name:string | undefined;
  thumbnail:string | undefined;
}

export type ListaContextState = {
  setParametroBusqueda:(name:string)=>void;
  elementosLista: IListasContextInterface[];
 
};

const ListaContextDefaultValues: ListaContextState = {
  setParametroBusqueda: () => {},
  elementosLista: []
 
};

export const ListaContext = createContext<ListaContextState>(
  ListaContextDefaultValues
);

const ListaContextProvider: FC = ({ children }) => {
  const [elementosLista, setearElementosLista] = useState<IListasContextInterface[]>(ListaContextDefaultValues.elementosLista);
  const setParametroBusqueda= (busqueda:string) => {
    console.log(busqueda)
    getElementsByIngredient(busqueda);
  }
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

  const getElementsByIngredient= async(elementoBusqueda:String ) =>{
    console.log("getElementsByIngredient")
    console.log(elementoBusqueda)
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${elementoBusqueda}`;
    const categorias = await axios.get(url);
    console.log(categorias);
    let responseDataJson=categorias.data.drinks;

    console.log(responseDataJson);
    const elementos:IListasContextInterface[]=[];
    for(let element in responseDataJson){
      console.log(responseDataJson[element])
      //responseDataJson[element].strDrink , responseDataJson[element].strDrinkthumb,
      elementos.push({name:responseDataJson[element].strDrink,image:responseDataJson[element].strDrinkThumb,thumbnail:'Click for recipe!'})
    }
    setearElementosLista(elementos);
  }

  return (
    <ListaContext.Provider
      value={{
        elementosLista,
        setParametroBusqueda
        
      }}
    >
      {children}
    </ListaContext.Provider>
  );
};

export default ListaContextProvider;