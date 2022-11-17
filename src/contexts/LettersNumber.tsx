import React, { createContext, useContext, useMemo, useState } from 'react';

interface ProviderOptions {
  lettersNumber: number;
  setLettersNumber: (newLettersNumber: number) => void;
}

// Create context and hook
const LettersNumberContext = createContext<Record<string, never> | ProviderOptions>({});
const useLettersNumber = () => useContext(LettersNumberContext);

interface Props {
  children: React.ReactNode;
}

// Create context component
const LettersNumber: React.FC<Props> = ({ children }) => {
  const [lettersNumber, setLettersNumber] = useState(5);

  const value = useMemo(() => ({ lettersNumber, setLettersNumber }), [lettersNumber]);

  return <LettersNumberContext.Provider value={value}>{children}</LettersNumberContext.Provider>;
};

export { useLettersNumber, LettersNumber };
