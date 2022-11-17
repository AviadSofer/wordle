import React, { createContext, useContext, useMemo, useState } from 'react';

interface ProviderOptions {
  typedWord: string;
  setTypedWord: (newWord: string) => void;
}

// Create context and hook
const TypedWordContext = createContext<Record<string, never> | ProviderOptions>({});
const useTypedWord = () => useContext(TypedWordContext);

interface Props {
  children: React.ReactNode;
}

// Create context component
const TypedWord: React.FC<Props> = ({ children }) => {
  const [typedWord, setTypedWord] = useState('');

  const value = useMemo(() => ({ typedWord, setTypedWord }), [typedWord]);

  return <TypedWordContext.Provider value={value}>{children}</TypedWordContext.Provider>;
};

export { useTypedWord, TypedWord };
