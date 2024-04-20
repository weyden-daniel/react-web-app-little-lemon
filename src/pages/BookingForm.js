import { useEffect, useRef } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { threeMonthsFromNowDate } from '../utils/threeMonthsFromNowDate';

import './BookingForm.css';

export default function BookingForm({ availableTimesState, availableTimesDispatch, handleSubmitForm }) {

    const selectReservationTimeRef = useRef(null);

    useEffect(() => {

        if (availableTimesState.length > 0) {

            selectReservationTimeRef.current.value = availableTimesState[0].hour
        }

    }, [availableTimesState]);

    return (

        <div className="booking-screen">

            <div className="page-title">Reservations</div>

            <Formik
                initialValues={{
                    reservationDate: new Date(),
                    reservationTime: (availableTimesState.length > 0) ? availableTimesState[0].hour : null,
                    resNumGuests: 2,
                    resOccasion: 'Birthday'
                }}
                validationSchema={Yup.object({
                    reservationDate: Yup.date().required('Date required'),
                    reservationTime: Yup.string().required('Time required'),
                    resNumGuests: Yup.number()
                        .min(1, 'Min: 1')
                        .max(10, 'Max: 10')
                        .required('Number of guests required'),
                    resOccasion: Yup.string().required('Occasion required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    handleSubmitForm(values);
                    setSubmitting(false);
                }}
            >
                {({ values, setFieldValue, isValid }) => {

                    return (

                        <Form className="booking-form" aria-label="Form to make a table reservation">

                            <div className="form-title">Please provide the following details to reserve your table.</div>

                            <div className="fieldset">
                                <label htmlFor="reservationDate">Choose date<span class="mandatory"> *</span></label>
                                <Field name="reservationDate">
                                    {({ field }) => (
                                        <DatePicker
                                            className="form-field"
                                            {...field}
                                            selected = {values.reservationDate}
                                            minDate={new Date()} // Set minimum date to today's date
                                            maxDate={threeMonthsFromNowDate} // Set maximum date to three month from today
                                            onChange={(date) => {
                                                setFieldValue('reservationDate', date);
                                                availableTimesDispatch({ type: date });
                                            }}
                                            aria-required="true"
                                            aria-label="calendar"
                                            aria-description="Calendar for you to indicate the date of your reservation"
                                        />
                                    )}
                                </Field>
                                <ErrorMessage name="reservationDate" component="div" className="form-field-error"/>
                            </div>

                            <div className="fieldset">
                                <label htmlFor="reservationTime">Choose time<span class="mandatory"> *</span></label>

                                <Field
                                    className="form-field"
                                    name="reservationTime"
                                    as="select"
                                    data-testid="select-reservation-time"
                                    innerRef={selectReservationTimeRef}
                                    aria-required="true"
                                    aria-label="Select a time"
                                    aria-description="Select component with the available times for the previously selected date"
                                >
                                    {availableTimesState.map((time) => {
                                        return <option key={time.hour}>{time.hour}</option>
                                    })}
                                </Field>

                                <ErrorMessage name="reservationTime" component="div" className="form-field-error"/>
                            </div>

                            <div className="fieldset">
                                <label htmlFor="resNumGuests">Number of guests<span class="mandatory"> *</span></label>
                                <Field
                                    className="form-field"
                                    name="resNumGuests"
                                    type="number"
                                    min="1"
                                    max="10"
                                    data-testid="input-reservation-num-guests"
                                    aria-required="true"
                                    aria-label="Number of guests"
                                    aria-description="Numeric input field to indicate how many people you are reserving a table for"
                                />
                                <ErrorMessage name="resNumGuests" component="div" className="form-field-error"/>
                            </div>

                            <div className="fieldset">
                                <label htmlFor="resOccasion">Occasion<span class="mandatory"> *</span></label>
                                <Field
                                    className="form-field"
                                    name="resOccasion"
                                    as="select"
                                    data-testid="select-reservation-occasion"
                                    aria-required="true"
                                    aria-label="Occasion of the reservation"
                                    aria-description="Select component to indicate the occasion (e.g.: birthday, anniversary)"
                                >
                                    <option>Birthday</option>
                                    <option>Anniversary</option>
                                </Field>
                                <ErrorMessage name="resOccasion" component="div" className="form-field-error"/>
                            </div>

                            <button
                                type="submit"
                                className={"form-field " + (isValid ? "form-field-button-valid" : "form-field-button-invalid" )}
                                aria-label="Submit"
                            >
                                Submit
                            </button>

                        </Form>

                    );

                }}

            </Formik>

        </div>
    );
}