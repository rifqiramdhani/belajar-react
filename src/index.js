import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

/* import react redux untuk mengaktifkan redux yang telah dibuat */
import { Provider } from 'react-redux';
import store from './Redux/Store';

import reportWebVitals from './reportWebVitals';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
