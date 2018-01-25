import React from 'react';
import { connect } from 'react-redux';

import TodoList from './TodosList';
import AddTodo from './AddTodo';


export class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AddTodo />
                <TodoList />
            </div>
        );
    }
};

export default HomePage;