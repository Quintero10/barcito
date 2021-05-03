import axios from "axios";
import React, { createContext, useState, FC, useEffect, useRef } from "react";

export interface IModalContextInterface {
    title:string | undefined;
    strInstructions:string | undefined;
    strDrinkThumb:string | undefined;
    strGlass:string| undefined;
    strIngredient:string[];
  }
  
  export type ListaContextState = {
    setParametroModal:(name:string)=>void;
    elementosModal: IModalContextInterface | undefined;
    ModalIsOpen:boolean | undefined;
    setOpenModal:(value:boolean)=>void;
    loading:boolean | undefined;
  };

  const ModalContextDefaultValues: ListaContextState = {
    setParametroModal: () => {},
    elementosModal: undefined,
    ModalIsOpen:true,
    setOpenModal:()=>{},
    loading:false
  };

  export const ModalContext = createContext<ListaContextState>(
    ModalContextDefaultValues
  );

  export const ModalContextProvider: FC = ({ children }) => {
    const [elementosModal, setearElementosModal] = useState<IModalContextInterface | undefined>(ModalContextDefaultValues.elementosModal);
    const [ModalIsOpen,setearModalIsOpen]=useState(true);
    const [loading,setLoading]=useState(false);

    const setParametroModal= (busqueda:string) => {
      setearElementosModal(undefined);
      setLoading(true);
      setTimeout(()=>{
        getElementsByDrinkName(busqueda);
      },1500)
      
    }

    const setOpenModal =(value:boolean)=>{
      //setearElementosModal(undefined);
      setearModalIsOpen(value);
    }
  
    const mounted = useRef();
    useEffect(() => {
      if (!mounted.current) {
        // do componentDidMount logic
        console.log("ModalContext mounted")
        
      } else {
        // do componentDidUpdate logic
        console.log("ModalContext componentdidupdate")
        
      }
    },[]);
  
    
  const getElementsByDrinkName=async(busqueda: string) =>{
    
    console.log("SetLoading to True")
    setearModalIsOpen(true);
    
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${busqueda}`;
    const categorias = await axios.get(url);
    
    let responseDataJson=categorias.data.drinks;
    let ingredients: string[]=[];

    ingredients.push(responseDataJson[0].strIngredient1);
    ingredients.push(responseDataJson[0].strIngredient2);
    ingredients.push(responseDataJson[0].strIngredient3);
    ingredients.push(responseDataJson[0].strIngredient4);
    ingredients.push(responseDataJson[0].strIngredient5);
    ingredients.push(responseDataJson[0].strIngredient6);
    ingredients.push(responseDataJson[0].strIngredient7);
    ingredients.push(responseDataJson[0].strIngredient8);
    ingredients.push(responseDataJson[0].strIngredient9);
    ingredients.push(responseDataJson[0].strIngredient10);
    ingredients.push(responseDataJson[0].strIngredient11);
    ingredients.push(responseDataJson[0].strIngredient12);
    ingredients.push(responseDataJson[0].strIngredient13);
    ingredients.push(responseDataJson[0].strIngredient14);
    ingredients.push(responseDataJson[0].strIngredient15);


    let elementos:IModalContextInterface | undefined=undefined;
    elementos={title:responseDataJson[0].strDrink,strDrinkThumb:responseDataJson[0].strDrinkThumb,strGlass:responseDataJson[0].strGlass,strInstructions:responseDataJson[0].strInstructions,strIngredient:[...ingredients]}

      //responseDataJson[element].strDrink , responseDataJson[element].strDrinkthumb,
     
  
    setearElementosModal(elementos);
    setLoading(false);
    console.log("setLoading to False")
  }
  
  
  
    return (
      <ModalContext.Provider
        value={{
          elementosModal,
          setParametroModal,
          setOpenModal,
          ModalIsOpen,
          loading
        }}
      >
        {children}
      </ModalContext.Provider>
    );
  };