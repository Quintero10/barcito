import axios from "axios";
import * as React from "react";


export interface AppContextInterface {
  strGlass:string | undefined;
  id:string | undefined;

}

export interface ICategoriasContextInterface {
  image:string | undefined;
  name:string | undefined;
  thumbnail:string | undefined;
}

 export const AppCtx = React.createContext<AppContextInterface[] | null>(null);


 
  export const CategoriasProvider:React.FC= ({children}) => {

    //const sampleAppContext: AppContextInterface[] | null =null;
    const [categorias, guardarCategorias] = React.useState<AppContextInterface[]>([]);
 const getGlassesCategory= async() =>{
  
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list';

  const categorias = await axios.get(url);

  console.log(categorias);
  let responseDataJson=categorias.data.drinks;

  guardarCategorias(responseDataJson);
}
  React.useEffect(()=>{getGlassesCategory()},[])

    return(
      <AppCtx.Provider value={categorias}>{children}</AppCtx.Provider>
    );
    
  }
   

  