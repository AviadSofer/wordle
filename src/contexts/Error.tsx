import React, { createContext, useContext, useMemo, useState } from 'react';

interface ProviderOptions {
  isError: boolean;
  setIsError: (isError: boolean) => void;
  errorMsg: string;
  setErrorMsg: (msg: string) => void;
}

// Create context and hook
const ErrorContext = createContext<Record<string, never> | ProviderOptions>({});
const useError = () => useContext(ErrorContext);

interface Props {
  children: React.ReactNode;
}

// Create context component
const Error: React.FC<Props> = ({ children }) => {
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const value = useMemo(
    () => ({ isError, setIsError, errorMsg, setErrorMsg }),
    [isError, errorMsg],
  );

  return <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>;
};

export { useError, Error };
