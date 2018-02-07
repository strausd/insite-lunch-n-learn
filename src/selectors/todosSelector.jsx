export const filterTodos = (todos, filters) => {
    return todos.filter((todo) => {
        // If we are not showing completed todos and this todo is completed
        if (!filters.showCompleted && todo.completed) {
            // Filter out this todo
            return false;
        }
        // If this todo does not match our filter text
        if (!todo.name.toLowerCase().includes(filters.text.toLowerCase())) {
            // Filter out this todo
            return false;
        }
        return true;
    });
};