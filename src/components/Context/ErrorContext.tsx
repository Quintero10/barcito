import React, { createContext, FC, useState } from 'react'
//Type
type ErrorContextType= {
    Error:boolean | undefined;
    setError: (value:boolean) => void
}
//DefaultValues
const ErrorContextDefaultValues: ErrorContextType = {
    Error:undefined,
    setError: ()=>{}
  };
//CreateContext
export const ErrorContext = createContext<ErrorContextType>(
    ErrorContextDefaultValues
  );
 //Component
 export const ErrorContextProvider: FC = ({ children }) => {

    //State
    const[Error,setearError]= useState(ErrorContextDefaultValues.Error);
    const setError = (value:boolean) =>setearError(value);
    //Return
    return(
        <ErrorContext.Provider
        value={{Error,setError}}>
              {children}
        </ErrorContext.Provider>
    );

    
  }