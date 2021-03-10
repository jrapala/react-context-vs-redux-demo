import { createContext, useContext } from 'react';

const AppDispatchContext = createContext();

function useAppDispatch() {
  const context = useContext(AppDispatchContext);
  if (!context) {
    throw new Error('useAppDispatch must be used within the AppProvider');
  }
  return context;
}

export { AppDispatchContext, useAppDispatch };
