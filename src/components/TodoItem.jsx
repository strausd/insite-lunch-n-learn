import React from 'react';
import moment from 'moment';


class TodoItem extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.todo.name} - {this.props.todo.completed ? 'Completed' : 'Get er done'} - {moment(this.props.todo.createdAt).format("ddd, hA")}</p>
            </div>
        );
    }
}

export default TodoItem;