import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions/todosActions';


class AddTodo extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const todoText = this.refs.todoText.value;
        this.props.addTodo(todoText);
        this.refs.todoText.value = '';
    }

    render() {
        return (
            <div>
                <h2>Add a todo</h2>
                <form onSubmit={this.handleSubmit}>
                    <input name="add-todo" id="add-todo" placeholder="Todo description" ref="todoText" />
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (name) => dispatch(addTodo(name))
    };
};

export default connect(undefined, mapDispatchToProps)(AddTodo);