import React from 'react';

const DialogContext = React.createContext(undefined);

function DialogProvider({ children, value }) {
  return (
    <DialogContext.Provider value={value}>{children}</DialogContext.Provider>
  );
}

function useDialogContext() {
  const context = React.useContext(DialogContext);
  if (context === undefined) {
    throw new Error('useDialogContext must be used within a DialogProvider');
  }
  return context;
}

export { DialogProvider, useDialogContext };
