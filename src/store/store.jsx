import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { todosReducer } from '../reducers/todosReducer';
import { filterReducer } from '../reducers/filterReducer';

export default () => {
    const store = createStore(
        combineReducers({
            todos: todosReducer,
            filters: filterReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(thunk)
    );
    return store;   
}

