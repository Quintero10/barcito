import { nullRender } from '@fluentui/react';
import react,{createContext,useState} from 'react';

//Crear el context
//export const CategoriasContext= createContext();

//Provider es donde se encuentran las funciones y state

const CategoriasProvider = (props:any):JSX.Element => {

    const [hola,guardarHola]=useState('hola');

    return <></>; //Esto vuela cuando desarrolle correctamente el Context
    //Sería una "opción" de null para JSX.Element
}

export default CategoriasProvider;