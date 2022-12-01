import React, { createContext, useContext, useMemo, useState } from 'react';

interface ProviderOptions {
  currentLevel: string;
  setCurrentLevel: (newLevel: string) => void;
}

// Create context and hook
const CurrentLevelContext = createContext<Record<string, never> | ProviderOptions>({});
const useCurrentLevel = () => useContext(CurrentLevelContext);

interface Props {
  children: React.ReactNode;
}

// Create context component
const CurrentLevel: React.FC<Props> = ({ children }) => {
  const [currentLevel, setCurrentLevel] = useState('easy');

  const value = useMemo(() => ({ currentLevel, setCurrentLevel }), [currentLevel]);

  return <CurrentLevelContext.Provider value={value}>{children}</CurrentLevelContext.Provider>;
};

export { useCurrentLevel, CurrentLevel };
