import React, { createContext, useContext, useReducer } from 'react'
const ContextAPIstate = createContext(null);
const ContextAPIdispatch = createContext(null);
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: action.id, name: action.name, price: action.price, qty: action.qty, size: action.size }];
    default:
      console.log("Error Occure")
  }
}
export const ContextAPIProvider=(props)=> {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <div>
        <ContextAPIdispatch.Provider value={dispatch}>
          <ContextAPIstate.Provider value={state}>
            {props.childern}
           </ContextAPIstate.Provider>
        </ContextAPIdispatch.Provider>
    </div>
  )
}
export const useCart=()=>useContext(ContextAPIstate)
export const useDispatchCart=()=>useContext(ContextAPIdispatch)
