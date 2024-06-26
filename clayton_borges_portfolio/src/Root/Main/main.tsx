import React from 'react';
import './index.css';
import { Provider } from 'react-redux';
import { store, persistor } from '../../Config/Redux/Store/store'
import { PersistGate } from 'redux-persist/integration/react';
import { createRoot } from 'react-dom/client';
import { UserProvider } from '../../Config/Context/UserProvider'
import App from '../App/App';


const root = document.getElementById('root');

if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <UserProvider>
            <App />
          </UserProvider>
        </PersistGate>
      </Provider>
    </React.StrictMode>,
  );
}
