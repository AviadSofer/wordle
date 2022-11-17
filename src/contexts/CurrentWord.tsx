import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';

interface ProviderOptions {
  currentWord: string;
  setCurrentWord: (newWord: string) => void;
}

// Create context and hook
const CurrentWordContext = createContext<Record<string, never> | ProviderOptions>({});
const useCurrentWord = () => useContext(CurrentWordContext);

interface Props {
  children: React.ReactNode;
}

// Create context component
const CurrentWord: React.FC<Props> = ({ children }) => {
  const [currentWord, setCurrentWord] = useState('');

  useEffect(() => {
    setCurrentWord('שלום');
  }, []);

  const value = useMemo(() => ({ currentWord, setCurrentWord }), [currentWord]);

  return <CurrentWordContext.Provider value={value}>{children}</CurrentWordContext.Provider>;
};

export { useCurrentWord, CurrentWord };
