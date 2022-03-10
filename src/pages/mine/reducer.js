import React, { createContext, useReducer} from "react"

export const initState = {
  mine: 'mine'
}

export const action = (state, dispatch, type) => {
  dispatch({type})
}

export const reducer = (state, action) => {
  switch(action.type) {
    default:
      return state  
  }
}

export const Context = createContext(null)

export const Provider = props => {
  const [state, dispatch] = useReducer(reducer, initState)
  return (
    <Context.Provider value={{state, dispatch}}>
      {props.children}
    </Context.Provider>
  )
}
