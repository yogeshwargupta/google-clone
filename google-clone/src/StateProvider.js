import React, { createContext, useContext, useReducer } from 'react';

// Create a context
export const StateContext = createContext();

// Create a provider component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Create a custom hook to use the state value
export const useStateValue = () => useContext(StateContext);
