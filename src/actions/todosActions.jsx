import uuid from 'uuid';
import moment from 'moment';


export const addTodo = (name) => {
    return {
        type: 'ADD_TODO',
        todo: {
            name: name,
            completed: false,
            id: uuid(),
            createdAt: moment().valueOf()
        }
    };
};
