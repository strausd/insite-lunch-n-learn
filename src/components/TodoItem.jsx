import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import { deleteTodo } from '../actions/todosActions';


class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
    }

    handleDeleteTodo() {
        this.props.deleteTodo(this.props.todo.id);
    }

    render() {
        return (
            <div>
                <p>{this.props.todo.name} - {this.props.todo.completed ? 'Completed' : 'Get er done'} - {moment(this.props.todo.createdAt).format("ddd, hh:mm a")}</p>
                <button onClick={this.handleDeleteTodo}>Delete</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (id) => {
            dispatch(deleteTodo(id));
        }
    };
};

export default connect(undefined, mapDispatchToProps)(TodoItem);