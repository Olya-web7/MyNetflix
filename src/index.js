import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import App from './app';
import { GlobalStyles } from './global-styles';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';
import ShowsState from "./context/shows/ShowsState";

render(
    <ShowsState>
     <FirebaseContext.Provider value={{ firebase }}>
        <GlobalStyles />
        <App />
     </FirebaseContext.Provider>
    </ShowsState>,
    document.getElementById('root')
);
