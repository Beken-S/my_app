import React from 'react';

const PopupMenuContext = React.createContext(undefined);

function PopupMenuProvider({ children, value }) {
  return (
    <PopupMenuContext.Provider value={value}>
      {children}
    </PopupMenuContext.Provider>
  );
}

function usePopupMenuContext() {
  const context = React.useContext(PopupMenuContext);
  if (context === undefined) {
    throw new Error(
      'usePopupMenuContext must be used within a PopupMenuProvider'
    );
  }
  return context;
}

export { PopupMenuProvider, usePopupMenuContext };
