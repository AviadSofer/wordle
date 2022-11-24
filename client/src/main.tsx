import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import { CurrentWord } from './contexts/CurrentWord';
import { Guesses } from './contexts/Guesses';
import { Error } from './contexts/Error';

// styles
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CurrentWord>
        <Guesses>
          <Error>
            <App />
          </Error>
        </Guesses>
      </CurrentWord>
    </BrowserRouter>
  </React.StrictMode>,
);
