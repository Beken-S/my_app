import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import { Router } from './pages';
import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<CircularProgress />} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
}

export default App;
