import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/style.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { getTokenFromStorage } from './features/authSlice';
import GlobalStyles from './styles/GlobalStyles';
import WithTheme from './theme/WithTheme';
import { BrowserRouter as Router } from 'react-router-dom';

store.dispatch(getTokenFromStorage());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <WithTheme>
          <GlobalStyles />
          <App />
        </WithTheme>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
