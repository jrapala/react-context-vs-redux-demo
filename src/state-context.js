import { createContext, useContext } from 'react';

const AppStateContext = createContext();

function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within the AppProvider');
  }
  return context;
}

export { AppStateContext, useAppState };
