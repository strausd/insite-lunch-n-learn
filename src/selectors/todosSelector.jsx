export const filterTodos = (todos, filters) => {
    return todos.filter((todo) => {
        return todo.name.toLowerCase().includes(filters.text.toLowerCase());
    });
};