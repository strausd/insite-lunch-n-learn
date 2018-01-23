import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/store';
import App from './components/App';

import { addTodo } from './actions/todosActions';

import './styles/styles.scss';


const store = configureStore();

store.dispatch(addTodo('Finish BBU'));
store.dispatch(addTodo('Noice'));
store.dispatch(addTodo('Upgrade network'));

console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));