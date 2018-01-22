import React from 'react';
import { connect } from 'react-redux';

import TodoList from './TodosList';


export class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TodoList />
            </div>
        );
    }
};

export default HomePage;