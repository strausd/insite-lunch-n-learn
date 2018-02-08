import uuid from 'uuid';
import moment from 'moment';


export const addTodo = (name) => {
    const todo = {
        name: name,
        completed: false,
        id: uuid(),
        createdAt: moment().valueOf()
    };
    // Get data from local storage and parse
    const data = JSON.parse(localStorage.getItem('todoState'));
    // Add todo
    data.todos.push(todo);
    // Reset local storage
    localStorage.setItem('todoState', JSON.stringify(data));
    return {
        type: 'ADD_TODO',
        todo
    };
};

export const deleteTodo = (id) => {
    // Get data from local storage and parse
    const data = JSON.parse(localStorage.getItem('todoState'));
    // Remove todo
    data.todos = data.todos.filter(todo => todo.id !== id);
    // Reset local storage
    localStorage.setItem('todoState', JSON.stringify(data));
    return {
        type: 'DELETE_TODO',
        id
    };
};

export const toggleCompletedTodo = (id) => {
    // Get data from local storage and parse
    const data = JSON.parse(localStorage.getItem('todoState'));
    // Update completed on todo
    data.todos = data.todos.map(todo => {
        if (todo.id === id) {
            return {
                ...todo,
                completed: !todo.completed
            }
        }
        return todo;
    })
    // Reset local storage
    localStorage.setItem('todoState', JSON.stringify(data));
    return {
        type: 'TOGGLE_COMPLETED',
        id
    };
};

export const getTodosFromLocalStorage = () => {
    const localData = localStorage.getItem('todoState');
    const todos = JSON.parse(localData).todos;
    return {
        type: 'LOAD_TODOS',
        todos 
    };
};