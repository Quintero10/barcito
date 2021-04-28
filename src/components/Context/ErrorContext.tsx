import React, { createContext, FC, useState } from 'react'

type ErrorContextType= {
    Error:boolean | undefined;
    setError: (value:boolean) => void
}

const ErrorContextDefaultValues: ErrorContextType = {
    Error:undefined,
    setError: ()=>{}
  };

export const ErrorContext = createContext<ErrorContextType>(
    ErrorContextDefaultValues
  );

  export const ErrorContextProvider: FC = ({ children }) => {

    //State
    const[Error,setearError]= useState(ErrorContextDefaultValues.Error);

    const setError = (value:boolean) =>setearError(value);
    return(
        <ErrorContext.Provider
        value={{Error,setError}}>
              {children}
        </ErrorContext.Provider>
    );

    
  }