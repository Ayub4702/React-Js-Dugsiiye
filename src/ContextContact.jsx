import { createContext, useReducer, useContext } from "react";
import { intialState, reduce } from "./assets/ReducerContact";

const ContactContext = createContext()
export function ContactProvider ({children }){

  const [state, dispatch] = useReducer(reduce, intialState)

  
  return (
    <ContactContext.Provider value={{state,dispatch}}>
      {children}
    </ContactContext.Provider>
  )
}

export const useContact = ()=>{
  return useContext(ContactContext)
}
