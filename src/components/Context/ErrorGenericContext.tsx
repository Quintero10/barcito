import React, { createContext, FC, useState } from 'react'
//Type
type ErrorGenericContextType= {
    GenericError:boolean | undefined;
    setGenericError: (value:boolean) => void
}
//DefaultValues
const ErrorGenericContextDefaultValues: ErrorGenericContextType = {
    GenericError:undefined,
    setGenericError: ()=>{}
  };
//CreateContext
export const ErrorGenericContext = createContext<ErrorGenericContextType>(
    ErrorGenericContextDefaultValues
  );
 //Component
 export const ErrorGenericContextProvider: FC = ({ children }) => {

    //State
    const[GenericError,setearError]= useState(ErrorGenericContextDefaultValues.GenericError);
    const setGenericError = (value:boolean) =>setearError(value);
    //Return
    return(
        <ErrorGenericContext.Provider
        value={{GenericError,setGenericError}}>
              {children}
        </ErrorGenericContext.Provider>
    );

    
  }