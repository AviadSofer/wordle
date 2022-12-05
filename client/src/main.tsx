import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import App from './App';
import CreateWordPage from './components/CreateWordPage';
import AdminPanel from './components/AdminPanel';
import WordsByLenght from './components/WordsByLenght';

import { CurrentWord } from './contexts/CurrentWord';
import { Guesses } from './contexts/Guesses';
import { Error } from './contexts/Error';
import { CurrentLevel } from './contexts/currentLevel';

// styles
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <CurrentWord>
          <Guesses>
            <Error>
              <CurrentLevel>
                <Routes>
                  <Route path='/*' element={<App />} />
                  <Route path='/create-new-word' element={<CreateWordPage />} />
                  <Route path='/adminyyyy' element={<AdminPanel />} />
                  <Route path='/all-words/:id' element={<WordsByLenght />} />
                </Routes>
              </CurrentLevel>
            </Error>
          </Guesses>
        </CurrentWord>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
