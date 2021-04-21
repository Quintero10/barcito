import axios from "axios";
import React from "react";
import { ICategoriasContextInterface } from "./CategoriasContext";

export function createCtx<A>(defaultValue: A) {
  type UpdateType = React.Dispatch<
    React.SetStateAction<ICategoriasContextInterface>
  >;
  const defaultUpdate: UpdateType = () => defaultValue;
  //const defaultUpdate:UpdateType = ()=>getDrinkByIngredient(defaultValue);
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

