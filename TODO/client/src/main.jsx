import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './features/todoSlice.js';

const store = configureStore({
  reducer: {
    todosState: todosReducer,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
