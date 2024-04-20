import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from "./pages/BookingForm";
import { todayAvailableTimes, initializeTimes, updateTimesReducer } from "./pages/Main";
import { fetchAPI } from "./utils/fakeAPI";

const mockDispatch = jest.fn();
const mockSubmitForm = jest.fn();

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

    const todayData = fetchAPI(new Date());

    expect(initializeTimes(new Date())).toEqual(todayData);
});

describe('updateTimesReducer function returns the expected value', () => {

    const currentDate = new Date();

    const tomorrow = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1);
    const tomorrowString = tomorrow.getFullYear() + '-' + (tomorrow.getMonth() + 1) + '-' + tomorrow.getDate();

    const fiveDaysFromNow = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 5);
    const fiveDaysFromNowString = fiveDaysFromNow.getFullYear() + '-' + (fiveDaysFromNow.getMonth() + 1) + '-' + fiveDaysFromNow.getDate();

    test('Tomorrow: ' + tomorrowString, () => {
        const state = todayAvailableTimes;
        const action = { type: tomorrow };
        expect(updateTimesReducer(state, action)).toEqual(fetchAPI(tomorrow));
    });

    test('Five days from now: ' + fiveDaysFromNowString, () => {
        const state = todayAvailableTimes;
        const action = { type: fiveDaysFromNow };
        expect(updateTimesReducer(state, action)).toEqual(fetchAPI(fiveDaysFromNow));
    });

});

describe('Booking Form - check fields and its attributes', () => {

    describe('reservationDate', () => {

        test('DatePicker component is present', () => {

            //ARRANGE

            render(<BookingForm
                availableTimesState = { todayAvailableTimes }
                availableTimesDispatch = { mockDispatch }
                handleSubmitForm = { mockSubmitForm }
            />);

            //ACT
            // we are not able to select the react-datepicker component with data-testid since the component is generated
            // as an <input> element wrapped within two DIVs
            const reservationDate = document.querySelector(".react-datepicker__input-container input");

            //ASSERT
            expect(reservationDate).toBeInTheDocument();

        });

    });

    describe('reservationTime', () => {

        test('Select component is present', () => {

            //ARRANGE

            render(<BookingForm
                availableTimesState = { todayAvailableTimes }
                availableTimesDispatch = { mockDispatch }
                handleSubmitForm = { mockSubmitForm }
            />);

            //ACT
            const reservationTime = screen.getByTestId("select-reservation-time");

            //ASSERT
            expect(reservationTime).toBeInTheDocument();

        });

    });

    describe('reservationNumberGuests', () => {

        test('Input component is present', () => {

            //ARRANGE

            render(<BookingForm
                availableTimesState = { todayAvailableTimes }
                availableTimesDispatch = { mockDispatch }
                handleSubmitForm = { mockSubmitForm }
            />);

            //ACT
            const resNumGuests = screen.getByTestId("input-reservation-num-guests");

            //ASSERT
            expect(resNumGuests).toBeInTheDocument();

        });

        test('Input component\' "type" attribute is equal to "number"', () => {

            //ARRANGE

            render(<BookingForm
                availableTimesState = { todayAvailableTimes }
                availableTimesDispatch = { mockDispatch }
                handleSubmitForm = { mockSubmitForm }
            />);

            //ACT
            const resNumGuests = screen.getByTestId("input-reservation-num-guests");
            const resNumGuestsTypeAttributeValue = resNumGuests.getAttribute("type");

            //ASSERT
            expect(resNumGuestsTypeAttributeValue).toEqual("number");

        });

        test('Input component has attribute "min"', () => {

            //ARRANGE

            render(<BookingForm
                availableTimesState = { todayAvailableTimes }
                availableTimesDispatch = { mockDispatch }
                handleSubmitForm = { mockSubmitForm }
            />);

            //ACT
            const resNumGuests = screen.getByTestId("input-reservation-num-guests");
            const resNumGuestsHasAttributeMin = resNumGuests.hasAttribute("min");

            //ASSERT
            expect(resNumGuestsHasAttributeMin).toEqual(true);

        });

        test('Input component\'s "min" attribute is equal to "1"', () => {

            //ARRANGE

            render(<BookingForm
                availableTimesState = { todayAvailableTimes }
                availableTimesDispatch = { mockDispatch }
                handleSubmitForm = { mockSubmitForm }
            />);

            //ACT
            const resNumGuests = screen.getByTestId("input-reservation-num-guests");
            const resNumGuestsMinAttributeValue = resNumGuests.getAttribute("min");

            //ASSERT
            expect(resNumGuestsMinAttributeValue).toEqual("1");

        });

        test('Input component has attribute "max"', () => {

            //ARRANGE

            render(<BookingForm
                availableTimesState = { todayAvailableTimes }
                availableTimesDispatch = { mockDispatch }
                handleSubmitForm = { mockSubmitForm }
            />);

            //ACT
            const resNumGuests = screen.getByTestId("input-reservation-num-guests");
            const resNumGuestsHasAttributeMax = resNumGuests.hasAttribute("max");

            //ASSERT
            expect(resNumGuestsHasAttributeMax).toEqual(true);

        });

        test('Input component\'s "max" attribute is equal to "10"', () => {

            //ARRANGE

            render(<BookingForm
                availableTimesState = { todayAvailableTimes }
                availableTimesDispatch = { mockDispatch }
                handleSubmitForm = { mockSubmitForm }
            />);

            //ACT
            const resNumGuests = screen.getByTestId("input-reservation-num-guests");
            const resNumGuestsMaxAttributeValue = resNumGuests.getAttribute("max");

            //ASSERT
            expect(resNumGuestsMaxAttributeValue).toEqual("10");

        });

    });

    describe('reservationOccasion', () => {

        test('Select component is present', () => {

            //ARRANGE

            render(<BookingForm
                availableTimesState = { todayAvailableTimes }
                availableTimesDispatch = { mockDispatch }
                handleSubmitForm = { mockSubmitForm }
            />);

            //ACT
            const reservationOccasion = screen.getByTestId("select-reservation-occasion");

            //ASSERT
            expect(reservationOccasion).toBeInTheDocument();

        });

    });

});

describe('Booking Form - test field validations', () => {

    describe('reservationDate', () => {

        test('INVALID - empty', async () => {

            //ARRANGE

            render(<BookingForm
                availableTimesState = { todayAvailableTimes }
                availableTimesDispatch = { mockDispatch }
                handleSubmitForm = { mockSubmitForm }
            />);

            //ACT
            const reservationDateInput = document.querySelector(".react-datepicker__input-container input");
            const submitButton = screen.getByText("Submit");

            fireEvent.input(reservationDateInput, { target: { value: '' } });
            fireEvent.click(submitButton);

            //ASSERT
            await waitFor( () => {

                expect(screen.getByText("Date required")).toBeInTheDocument();
            });

        });

        test('VALID - Date value provided', async () => {

            //ARRANGE

            render(<BookingForm
                availableTimesState = { todayAvailableTimes }
                availableTimesDispatch = { mockDispatch }
                handleSubmitForm = { mockSubmitForm }
            />);

            //ACT
            const reservationDateInput = document.querySelector(".react-datepicker__input-container input");
            const submitButton = screen.getByText("Submit");

            fireEvent.input(reservationDateInput, { target: { value: (new Date()).toJSON() } });
            fireEvent.click(submitButton);

            //ASSERT
            await waitFor( () => {

                expect(screen.queryByText("Date required")).not.toBeInTheDocument();
            });

        });

    });

    describe('reservationTime', () => {

        test('INVALID - empty', async () => {

            //ARRANGE

            render(<BookingForm
                availableTimesState = { todayAvailableTimes }
                availableTimesDispatch = { mockDispatch }
                handleSubmitForm = { mockSubmitForm }
            />);

            //ACT
            const reservationTime = screen.getByTestId("select-reservation-time");
            const submitButton = screen.getByText("Submit");

            fireEvent.change(reservationTime, { target: { value: null } });
            fireEvent.click(submitButton);

            //ASSERT
            await waitFor( () => {

                expect(screen.getByText("Time required")).toBeInTheDocument();
            });

        });

        test('VALID - Option selected', async () => {

            //ARRANGE

            render(<BookingForm
                availableTimesState = { todayAvailableTimes }
                availableTimesDispatch = { mockDispatch }
                handleSubmitForm = { mockSubmitForm }
            />);

            //ACT
            const reservationTime = screen.getByTestId("select-reservation-time");
            const submitButton = screen.getByText("Submit");

            fireEvent.change(reservationTime, { target: { value: '17:00' } });
            fireEvent.click(submitButton);

            //ASSERT
            await waitFor( () => {

                expect(screen.queryByText("Time required")).not.toBeInTheDocument();
            });

        });

    });

    describe('reservationNumberGuests', () => {

        test('INVALID - empty', async () => {

            //ARRANGE

            render(<BookingForm
                availableTimesState = { todayAvailableTimes }
                availableTimesDispatch = { mockDispatch }
                handleSubmitForm = { mockSubmitForm }
            />);

            //ACT
            const reservationNumberGuests = screen.getByTestId("input-reservation-num-guests");
            const submitButton = screen.getByText("Submit");

            fireEvent.input(reservationNumberGuests, { target: { value: null } });
            fireEvent.click(submitButton);

            //ASSERT
            await waitFor( () => {

                expect(screen.getByText("Number of guests required")).toBeInTheDocument();
            });

        });

        test('INVALID - Below minimum: -2', async () => {

            //ARRANGE

            render(<BookingForm
                availableTimesState = { todayAvailableTimes }
                availableTimesDispatch = { mockDispatch }
                handleSubmitForm = { mockSubmitForm }
            />);

            //ACT
            const reservationNumberGuests = screen.getByTestId("input-reservation-num-guests");
            const submitButton = screen.getByText("Submit");

            fireEvent.input(reservationNumberGuests, { target: { value: -2 } });
            fireEvent.click(submitButton);

            //ASSERT
            await waitFor( () => {

                expect(screen.getByText("Min: 1")).toBeInTheDocument();
            });

        });

        test('INVALID - Above maximum: 14', async () => {

            //ARRANGE

            render(<BookingForm
                availableTimesState = { todayAvailableTimes }
                availableTimesDispatch = { mockDispatch }
                handleSubmitForm = { mockSubmitForm }
            />);

            //ACT
            const reservationNumberGuests = screen.getByTestId("input-reservation-num-guests");
            const submitButton = screen.getByText("Submit");

            fireEvent.input(reservationNumberGuests, { target: { value: 14 } });
            fireEvent.click(submitButton);

            //ASSERT
            await waitFor( () => {

                expect(screen.getByText("Max: 10")).toBeInTheDocument();
            });

        });

        test('VALID - Within range: 4', async () => {

            //ARRANGE

            render(<BookingForm
                availableTimesState = { todayAvailableTimes }
                availableTimesDispatch = { mockDispatch }
                handleSubmitForm = { mockSubmitForm }
            />);

            //ACT
            const reservationNumberGuests = screen.getByTestId("input-reservation-num-guests");
            const submitButton = screen.getByText("Submit");

            fireEvent.input(reservationNumberGuests, { target: { value: 4 } });
            fireEvent.click(submitButton);

            //ASSERT
            await waitFor( () => {
                expect(screen.queryByText("Min: 1")).not.toBeInTheDocument();
            });
            await waitFor( () => {
                expect(screen.queryByText("Max: 10")).not.toBeInTheDocument();
            });
            await waitFor( () => {
                expect(screen.queryByText("Number of guests required")).not.toBeInTheDocument();
            });
        });

        test('VALID - Within range: 7', async () => {

            //ARRANGE

            render(<BookingForm
                availableTimesState = { todayAvailableTimes }
                availableTimesDispatch = { mockDispatch }
                handleSubmitForm = { mockSubmitForm }
            />);

            //ACT
            const reservationNumberGuests = screen.getByTestId("input-reservation-num-guests");
            const submitButton = screen.getByText("Submit");

            fireEvent.input(reservationNumberGuests, { target: { value: 7 } });
            fireEvent.click(submitButton);

            //ASSERT
            await waitFor( () => {
                expect(screen.queryByText("Min: 1")).not.toBeInTheDocument();
            });
            await waitFor( () => {
                expect(screen.queryByText("Max: 10")).not.toBeInTheDocument();
            });
            await waitFor( () => {
                expect(screen.queryByText("Number of guests required")).not.toBeInTheDocument();
            });
        });

    });

    describe('reservationOccasion', () => {

        test('INVALID - empty', async () => {

            //ARRANGE

            render(<BookingForm
                availableTimesState = { todayAvailableTimes }
                availableTimesDispatch = { mockDispatch }
                handleSubmitForm = { mockSubmitForm }
            />);

            //ACT
            const reservationOccasion = screen.getByTestId("select-reservation-occasion");
            const submitButton = screen.getByText("Submit");

            fireEvent.change(reservationOccasion, { target: { value: null } });
            fireEvent.click(submitButton);

            //ASSERT
            await waitFor( () => {

                expect(screen.getByText("Occasion required")).toBeInTheDocument();
            });

        });

        test('VALID - Option selected', async () => {

            //ARRANGE

            render(<BookingForm
                availableTimesState = { todayAvailableTimes }
                availableTimesDispatch = { mockDispatch }
                handleSubmitForm = { mockSubmitForm }
            />);

            //ACT
            const reservationOccasion = screen.getByTestId("select-reservation-occasion");
            const submitButton = screen.getByText("Submit");

            fireEvent.change(reservationOccasion, { target: { value: 'Birthday' } });
            fireEvent.click(submitButton);

            //ASSERT
            await waitFor( () => {

                expect(screen.queryByText("Occasion required")).not.toBeInTheDocument();
            });

        });

    });

});