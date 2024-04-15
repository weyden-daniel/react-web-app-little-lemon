import { useState } from 'react';

import { todayFormattedDate } from '../utils/todayFormattedDate';

import './BookingForm.css';

export default function BookingForm({ availableTimesState, availableTimesDispatch, handleSubmitForm }) {

    const [ resDate, setResDate ] = useState(todayFormattedDate);
    const [ resTime, setResTime ] = useState();
    const [ resNumGuests, setResNumGuests ] = useState();
    const [ resOccasion, setResOccasion ] = useState();

    const handleSubmit = ( e ) => {

        e.preventDefault();

        handleSubmitForm({
            date: resDate,
            time: resTime,
            numGuests: resNumGuests,
            occasion: resOccasion
        });

    }

    return (
        <form onSubmit={handleSubmit} class="booking-form" aria-label="Form to make a table reservation">

            <h3>Please provide the following details to reserve your table.</h3>

            <label htmlFor="reservation-date">
                Choose date</label>
            <input
                type="date"
                id="reservation-date"
                value={resDate}
                onChange={ ( e ) => {
                    setResDate(e.target.value);
                    availableTimesDispatch({ type: e.target.value });
                }}
            />

            <label htmlFor="reservation-time">Choose time</label>
            <select
                id="reservation-time"
                value={resTime}
                onChange={ e => setResTime(e.target.value) }
            >
                {availableTimesState.map((time) => {
                    return <option key={time.hour}>{time.hour}</option>
                })}
            </select>

            <label htmlFor="rest-num-guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="rest-num-guests"
                value={resNumGuests}
                onChange={ e => setResNumGuests(e.target.value) }
            />

            <label htmlFor="res-occasion">Occasion</label>
            <select
                id="res-occasion"
                value={resOccasion}
                onChange={ e => setResOccasion(e.target.value) }
            >
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <button type="submit">Submit</button>
        </form>
    );
}