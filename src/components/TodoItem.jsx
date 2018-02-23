import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import { deleteTodo, toggleCompletedTodo } from '../actions/todosActions';


export class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
        this.handleToggleComplete = this.handleToggleComplete.bind(this);
    }

    handleDeleteTodo() {
        this.props.deleteTodo(this.props.todo.id);
    }

    handleToggleComplete() {
        this.props.toggleCompleted(this.props.todo.id);
    }

    render() {
        return (
            <div>
                <p className={this.props.todo.completed ? 'complete' : 'not-complete'}>
                    {this.props.todo.name} - {this.props.todo.completed ? 'Completed' : 'Not Complete'} - {moment(this.props.todo.createdAt).format("MM/DD/YY")}
                </p>
                <button onClick={this.handleDeleteTodo}>Delete</button>
                <button onClick={this.handleToggleComplete}>Toggle Complete</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (id) => {
            dispatch(deleteTodo(id));
        },
        toggleCompleted: (id) => {
            dispatch(toggleCompletedTodo(id));
        }
    };
};

export default connect(undefined, mapDispatchToProps)(TodoItem);