import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import GameStore from './store/GameStore';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    game: new GameStore(),
    user: new UserStore(),
  }}>
    <App />
  </Context.Provider>
);

