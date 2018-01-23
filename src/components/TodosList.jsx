import React from 'react';
import { connect } from 'react-redux';

import TodoItem from './TodoItem'


class TodoList extends React.Component {


    render() {
        return (
            <div>
                <h2>Todo List component</h2>
                {this.props.todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
}

export default connect(mapStateToProps)(TodoList);