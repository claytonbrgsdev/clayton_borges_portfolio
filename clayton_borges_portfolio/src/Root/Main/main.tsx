import React from 'react';
import './index.css';
import { Provider } from 'react-redux';
import { store, persistor } from '../../Redux/Store/store'
import { PersistGate } from 'redux-persist/integration/react';
import { createRoot } from 'react-dom/client';

import App from '../App/App';


const root = document.getElementById('root');

if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>,
  );
}
