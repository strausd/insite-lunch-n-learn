export const filterTodos = (todos, filters) => {
    return todos.filter((todo) => {
        // if (!filters.text) {
        //     return true;
        // }
        return todo.name.toLowerCase().includes(filters.text.toLowerCase());
    });
};