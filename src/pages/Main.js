import { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Home from './Home';
import About from './About';
import Menu from './Menu';
import BookingForm from './BookingForm';
import ConfirmedBooking from "./ConfirmedBooking";

import { fetchAPI, submitAPI } from '../utils/fakeAPI';
import { todayFormattedDate } from "../utils/todayFormattedDate";

export function initializeTimes( stringFormattedDate ) {

    return fetchAPI(stringFormattedDate);
}

export const todayAvailableTimes = initializeTimes(todayFormattedDate);

export function updateTimesReducer(state, action) {

    return fetchAPI(action.type);

}

export default function Main () {

    const navigate = useNavigate();

    const [ availableTimesState, availableTimesDispatch ] = useReducer(
        updateTimesReducer,
        todayAvailableTimes,
    );

    const handleSubmitForm = ( formData ) => {

        if ( submitAPI( formData )) {
            navigate('/confirmed-booking');
        }
    };

    return(
        <>

            <Routes>

                <Route
                    path="/"
                    element={<Home/>}
                ></Route>

                <Route
                    path="/about"
                    element={<About/>}
                ></Route>

                <Route
                    path="/menu"
                    element={<Menu/>}
                ></Route>

                <Route
                    path="/booking-form"
                    element={<BookingForm
                        availableTimesState = { availableTimesState }
                        availableTimesDispatch = { availableTimesDispatch }
                        handleSubmitForm = { handleSubmitForm }
                    />}
                ></Route>

                <Route
                    path="/confirmed-booking"
                    element={<ConfirmedBooking/>}
                ></Route>

            </Routes>

        </>
    );

}