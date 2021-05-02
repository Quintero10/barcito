import axios from "axios";
import React, { createContext, useState, FC, useEffect, useRef } from "react";

export interface IModalContextInterface {
    title:string | undefined;
    strInstructions:string | undefined;
    strDrinkThumb:string | undefined;
    strGlass:string| undefined;
    
  }
  
  export type ListaContextState = {
    setParametroModal:(name:string)=>void;
    elementosModal: IModalContextInterface | undefined;
    ModalIsOpen:boolean | undefined;
    setOpenModal:(value:boolean)=>void;
  };

  const ModalContextDefaultValues: ListaContextState = {
    setParametroModal: () => {},
    elementosModal: undefined,
    ModalIsOpen:true,
    setOpenModal:()=>{}
  };

  export const ModalContext = createContext<ListaContextState>(
    ModalContextDefaultValues
  );

  export const ModalContextProvider: FC = ({ children }) => {
    const [elementosModal, setearElementosModal] = useState<IModalContextInterface | undefined>(ModalContextDefaultValues.elementosModal);
    const [ModalIsOpen,setearModalIsOpen]=useState(true);
    
    const setParametroModal= (busqueda:string) => {
      getElementsByDrinkName(busqueda);
    }

    const setOpenModal =(value:boolean)=>{
      //setearElementosModal(undefined);
      setearModalIsOpen(value);
    }
  
    const mounted = useRef();
    useEffect(() => {
      if (!mounted.current) {
        // do componentDidMount logic
        console.log("ListaContext mounted")
        
      } else {
        // do componentDidUpdate logic
        console.log("ListaContext componentdidupdate")
        
      }
    },[]);
  
    
  const getElementsByDrinkName=async(busqueda: string) =>{
    setearModalIsOpen(true);
   
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${busqueda}`;
    const categorias = await axios.get(url);
    
    let responseDataJson=categorias.data.drinks;
  
   
    let elementos:IModalContextInterface | undefined=undefined;
    elementos={title:responseDataJson[0].strDrink,strDrinkThumb:responseDataJson[0].strDrinkThumb,strGlass:responseDataJson[0].strGlass,strInstructions:responseDataJson[0].strInstructions}

      //responseDataJson[element].strDrink , responseDataJson[element].strDrinkthumb,
     
  
    setearElementosModal(elementos);
    
  }
  
  
  
    return (
      <ModalContext.Provider
        value={{
          elementosModal,
          setParametroModal,
          setOpenModal,
          ModalIsOpen
        }}
      >
        {children}
      </ModalContext.Provider>
    );
  };