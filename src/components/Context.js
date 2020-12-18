import { useState, createContext, useContext } from 'react';

export const Context = createContext();

/** example:
 * import useValues from '@components/Context'
 * const [values, setValues] = useValues();
 * setValues(...values,{key:value})
 * values.key
 */
export function useValues() {
  return useContext(Context);
}

export const ContextProvider = ({ children }) => {
  const [values, setValues] = useState({});

  return (
    <Context.Provider value={[values, setValues]}>{children}</Context.Provider>
  );
};
