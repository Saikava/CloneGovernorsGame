import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import reducers from './Reducers/index';

const store = createStore(reducers);

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
