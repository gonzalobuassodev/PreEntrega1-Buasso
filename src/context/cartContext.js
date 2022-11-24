import { createContext, useState } from 'react';

export const Context = createContext();

export const CartContext = ({ children }) => {
  const [state, setState] = useState('Hello World');

  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  );
};
