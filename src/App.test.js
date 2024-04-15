import { render, screen } from "@testing-library/react";

import BookingForm from "./img/BookingForm";

import { todayFormattedDate } from "./utils/todayFormattedDate";

import { todayAvailableTimes, initializeTimes, updateTimesReducer } from "./utils/App";

test('Renders the BookingForm heading', () => {
    //ARRANGE

    const mockDispatch = jest.fn();

    render(<BookingForm
        availableTimesState = { todayAvailableTimes }
        availableTimesDispatch = { mockDispatch }
    />);

    //ACT
    const headingElement = screen.getByText("Please provide the following details to reserve your table.");

    //ASSERT
    expect(headingElement).toBeInTheDocument();
});

test('initializeTimes function returns the expected value', () => {
    expect(initializeTimes(new Date())).toEqual(todayAvailableTimes);
});

describe('updateTimesReducer', () => {

    test('today', () => {
        const state = todayAvailableTimes;
        const action = { type: todayFormattedDate };
        expect(updateTimesReducer(state, action)).toEqual(todayAvailableTimes);
    });

})