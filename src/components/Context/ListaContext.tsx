import axios from "axios";
import React from "react";
import { ICategoriasContextInterface } from "./CategoriasContext";

export function createCtx<A>(defaultValue: A) {

  type UpdateType = React.Dispatch<
    React.SetStateAction<ICategoriasContextInterface>
  >;
  //const defaultUpdate: UpdateType = () => defaultValue;
  const defaultUpdate:UpdateType  = getDrinkByIngredient(defaultValue);
  const ctx = React.createContext({
    state: defaultValue,
    update: defaultUpdate,
  });
  function Provider(props: React.PropsWithChildren<{}>) {
    const [state, update] = React.useState(defaultValue);
    return <ctx.Provider value={{ state, update }} {...props} />;
  }
  return [ctx, Provider] as const; // alternatively, [typeof ctx, typeof Provider]
}

const getDrinkByIngredient= (defaultValue:any) =>{

  const objectICategoriasContextInterface:ICategoriasContextInterface={name:defaultValue,image:defaultValue,thumbnail:defaultValue}
  return objectICategoriasContextInterface;
 
}

/*
const getDrinkByIngredient= async(defaultValue:any) =>{
  console.log("getDrinkByIngredient from ListaContext")
  const url = `www.thecocktaildb.com/api/json/v1/1/search.php?i=${defaultValue}`;

  const categorias = await axios.get(url);

  console.log(categorias);
  let responseDataJson=categorias.data.drinks;
  const objectICategoriasContextInterface:ICategoriasContextInterface={name:'lala',image:'sadf',thumbnail:'f'}
  return objectICategoriasContextInterface;
 
}
*/

