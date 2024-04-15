import { render, screen } from "@testing-library/react";

import BookingForm from "./pages/BookingForm";

import { todayFormattedDate } from "./utils/todayFormattedDate";
import xDaysFromNowFormattedDate from "./utils/xDaysFromNowFormattedDate";

import { todayAvailableTimes, initializeTimes, updateTimesReducer } from "./pages/Main";

import { fetchAPI } from "./utils/fakeAPI";

test('Renders the BookingForm heading', () => {
    //ARRANGE

    const mockDispatch = jest.fn();
    const mockSubmitForm = jest.fn();

    render(<BookingForm
        availableTimesState = { todayAvailableTimes }
        availableTimesDispatch = { mockDispatch }
        handleSubmitForm = { mockSubmitForm }
    />);

    //ACT
    const headingElement = screen.getByText("Please provide the following details to reserve your table.");

    //ASSERT
    expect(headingElement).toBeInTheDocument();
});

test('initializeTimes function returns the expected value', () => {
    expect(initializeTimes(todayFormattedDate)).toEqual(todayAvailableTimes);
});

describe('updateTimesReducer function returns the expected value', () => {

    test('Tomorrow: ' + xDaysFromNowFormattedDate(1), () => {
        const state = todayAvailableTimes;
        const action = { type: xDaysFromNowFormattedDate(1) };
        expect(updateTimesReducer(state, action)).toEqual(fetchAPI(xDaysFromNowFormattedDate(1)));
    });

    test('5 days from now: ' + xDaysFromNowFormattedDate(5), () => {
        const state = todayAvailableTimes;
        const action = { type: xDaysFromNowFormattedDate(5) };
        expect(updateTimesReducer(state, action)).toEqual(fetchAPI(xDaysFromNowFormattedDate(5)));
    });

})