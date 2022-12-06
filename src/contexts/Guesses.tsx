import React, { createContext, useContext, useMemo, useState } from 'react';

interface ProviderOptions {
  guesses: string[];
  setGuesses: (newWord: string[]) => void;
}

// Create context and hook
const GuessesContext = createContext<Record<string, never> | ProviderOptions>({});
const useGuesses = () => useContext(GuessesContext);

interface Props {
  children: React.ReactNode;
}

// Create context component
const Guesses: React.FC<Props> = ({ children }) => {
  const [guesses, setGuesses] = useState(['', '', '', '', '', '']);

  const value = useMemo(() => ({ guesses, setGuesses }), [guesses]);

  return <GuessesContext.Provider value={value}>{children}</GuessesContext.Provider>;
};

export { useGuesses, Guesses };
