import React from 'react';
import { connect } from 'react-redux';

import TodoList from './TodosList';
import AddTodo from './AddTodo';
import Filter from './Filter';


export class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Filter />
                <TodoList />
                <AddTodo />
            </div>
        );
    }
};

export default HomePage;