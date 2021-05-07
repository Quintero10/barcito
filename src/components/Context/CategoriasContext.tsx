import axios from "axios";
import * as React from "react";
import { ErrorGenericContext } from "./ErrorGenericContext";
//Interface
export interface AppContextInterface {
  strGlass:string | undefined;
  id:string | undefined;
}
//CreateContext
export const AppCtx = React.createContext<AppContextInterface[] | null>(null);

//Component
export const CategoriasProvider:React.FC= ({children}) => {

//State
const [categorias, guardarCategorias] = React.useState<AppContextInterface[]>([]);

//UseContext
const {setGenericError}=React.useContext(ErrorGenericContext);

 //Functions
 const getGlassesCategory= async() =>{
   
   try {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list';
    const categorias = await axios.get(url).catch(error=>{throw new Error(error)});
    let responseDataJson=categorias.data.drinks;
    guardarCategorias(responseDataJson);

   }catch(error){

    console.error(error);
    setGenericError(true);
   }
 
}
  //Hooks
  React.useEffect(()=>{getGlassesCategory()},[])
  //Return
    return(
      <AppCtx.Provider value={categorias}>{children}</AppCtx.Provider>
    );
    
  }
   

  