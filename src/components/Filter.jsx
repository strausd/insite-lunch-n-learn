import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';

import { setText, filterCompleted, filterDate } from '../actions/filterActions';


class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focusedInput: null,
            startDate: null,
            endDate: null
        };
        this.props.setFilterText('');
        this.handleFilterText = this.handleFilterText.bind(this);
        this.handleFilterComplete = this.handleFilterComplete.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleFilterText() {
        this.props.setFilterText(this.refs.filterText.value);
    }

    handleFilterComplete() {
        this.props.filterCompleted();
    }

    handleDateChange({ startDate, endDate }) {
        this.setState({ startDate, endDate });
        this.props.filterDate(startDate, endDate);
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
                <DateRangePicker
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={ this.handleDateChange } // PropTypes.fungggc.isRequired,
                    focusedInput={ this.state.focusedInput } // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    isOutsideRange={() => false}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilterText: (text) => dispatch(setText(text)),
        filterCompleted: () => dispatch(filterCompleted()),
        filterDate: (start, end) => dispatch(filterDate(start, end))
    };
};

const mapStateToProps = (state) => {
    return {
        showCompleted: state.filters.showCompleted
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);