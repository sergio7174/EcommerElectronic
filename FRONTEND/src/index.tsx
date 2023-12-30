import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
// In most use cases, we might want to delay the rendering of our app’s UI until the persisted data is available in the Redux store. For that, Redux Persist includes the PersistGate component.To use PersistGate add the follow line:
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
);
