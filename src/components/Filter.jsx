import React from 'react';
import { connect } from 'react-redux';

import { setText, filterCompleted } from '../actions/filterActions';


class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.props.setFilterText('');
        this.handleFilterText = this.handleFilterText.bind(this);
        this.handleFilterComplete = this.handleFilterComplete.bind(this);
    }

    handleFilterText() {
        this.props.setFilterText(this.refs.filterText.value);
    }

    handleFilterComplete() {
        this.props.filterCompleted();
    }

    render() {
        return (
            <div>
                <input
                    name="filterText"
                    ref="filterText"
                    placeholder="Filter"
                    onChange={this.handleFilterText}
                />
                <label>Toggle Show Completed</label>
                <input
                    name="filterComplete"
                    ref="filterComplete"
                    type="checkbox"
                    onChange={this.handleFilterComplete}
                    checked={this.props.showCompleted}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilterText: (text) => dispatch(setText(text)),
        filterCompleted: () => dispatch(filterCompleted())
    };
};

const mapStateToProps = (state) => {
    return {
        showCompleted: state.filters.showCompleted
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);