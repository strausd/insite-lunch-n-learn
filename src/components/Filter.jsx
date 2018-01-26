import React from 'react';
import { connect } from 'react-redux';

import { setText } from '../actions/filterActions';


class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.props.setFilterText('');
        this.handleFilterText = this.handleFilterText.bind(this);
    }

    handleFilterText() {
        this.props.setFilterText(this.refs.filterText.value);
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
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilterText: (text) => dispatch(setText(text))
    };
};

export default connect(undefined, mapDispatchToProps)(Filter);