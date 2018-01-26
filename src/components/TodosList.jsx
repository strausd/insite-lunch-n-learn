import React from 'react';
import { connect } from 'react-redux';

import TodoItem from './TodoItem';
import { filterTodos } from '../selectors/todosSelector';


class TodoList extends React.Component {


    render() {
        return (
            <div>
                <h2>Todos</h2>
                {this.props.todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: filterTodos(state.todos, state.filters)
    };
}

export default connect(mapStateToProps)(TodoList);