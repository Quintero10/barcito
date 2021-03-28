import { nullRender } from '@fluentui/react';
import react,{createContext,useState} from 'react';


//interface
export interface ICategoriasContextInterface {
  name: string | undefined;
  image: any | undefined;
  thumbnail:''
}

const AppCtx = react.createContext<ICategoriasContextInterface | null>(null);




//Crear el context
//export const CategoriasContext= createContext(null);

//Provider es donde se encuentran las funciones y state



//export default CategoriasProvider;