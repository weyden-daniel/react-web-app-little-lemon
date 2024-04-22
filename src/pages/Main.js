import { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Home from './Home';
import About from './About';
import Menu from './Menu';
import BookingForm from './BookingForm';
import ConfirmedBooking from "./ConfirmedBooking";
import OrderOnline from "./OrderOnline";
import Login from "./Login";

import { fetchAPI, submitAPI } from '../utils/fakeAPI';

export function initializeTimes( today ) {

    return fetchAPI(today);
}

export const todayAvailableTimes = initializeTimes(new Date());

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

                <Route
                    path="/order-online"
                    element={<OrderOnline/>}
                ></Route>

                <Route
                    path="/login"
                    element={<Login/>}
                ></Route>

            </Routes>

        </>
    );

}