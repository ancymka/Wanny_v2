import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import moment from 'moment';
import Bath from "./Bath/Bath";

const Calendar = props => {
    const showCalendar = () => {
        this.state = {
            startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


        handleChange(date)
        {
            this.setState({
                startDate: date
            })
        }

        handleSubmit(e)
        {
            e.preventDefault();
            let main = this.state.startDate
            console.log(main.format('L'));
        }

            return (
                <div className = "container">
                    <h3>React Datepicker Example</h3>
                    <form onSubmit={ this.handleSubmit }>
                        <div className="form-group">
                            <label>Select Date: </label>
                            <DatePicker
                                selected={ this.state.startDate }
                                onChange={ this.handleChange }
                                name="startDate"
                                dateFormat="MM/DD/YYYY"
                            />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-success">Add Date</button>
                        </div>
                    </form>
                </div>
            );
    }

    return <div>{showCalendar()}</div>
}

export default Calendar;
