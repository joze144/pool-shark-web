import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export class Datepicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(),
      focused: false
    };
  }
  handleDateChange = (date) => {
    this.setState({ date });
    this.props.change(this.props.input.name, date)
  }
  render() {
    return (
      <div className="mv4 w-100">
        <div className="b sans-serif pv2 w-100">{this.props.label}</div>
        <SingleDatePicker
          date={this.state.date} // momentPropTypes.momentObj or null
          onDateChange={this.handleDateChange} // PropTypes.func.isRequired
          focused={this.state.focused} // PropTypes.bool
          onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
          showClearDate={true}
          numberOfMonths={1}
        />
      </div>
    );
  }
}

Datepicker.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  date: PropTypes.object,
  onDateChange: PropTypes.func.isRequired,
  focused: PropTypes.bool,
  onFocusChange: PropTypes.func.isRequired
}

export default Datepicker;