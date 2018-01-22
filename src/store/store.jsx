import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { todosReducer } from '../reducers/todosReducer';

export default () => {
    const store = createStore(
        combineReducers({
            todos: todosReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(thunk)
    );
    return store;   
}

