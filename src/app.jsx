// Imports for react-dates
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/store';
import App from './components/App';

import { addTodo, getTodosFromLocalStorage } from './actions/todosActions';

import './styles/styles.scss';


const store = configureStore();

if (!localStorage.getItem('todoState')) {
    localStorage.setItem('todoState', JSON.stringify(store.getState()));
} else {
    store.dispatch(getTodosFromLocalStorage());
}

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));