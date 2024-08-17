'use client';
import React, { useState, createContext, ReactNode, useContext } from 'react';

interface DrawerContextProps {
  isDrawerOpen: boolean;
  setisDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DrawerContext = createContext<DrawerContextProps | undefined>(undefined);

const DrawerContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isDrawerOpen, setisDrawerOpen] = useState<boolean>(false);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, setisDrawerOpen }}>
      {children}
    </DrawerContext.Provider>
  );
};

export { DrawerContext, DrawerContextProvider };

export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error('useDrawer must be used within a DrawerProvider');
  }
  return context;
};
