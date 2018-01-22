export const todosReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                action.todo,
                ...state
            ]
        default:
            return state;
    }
};
