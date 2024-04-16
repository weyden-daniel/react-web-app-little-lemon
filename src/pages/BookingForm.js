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
                    reservationTime: (availableTimesState.length > 0) ? availableTimesState[0].hour : '',
                    resNumGuests: 2,
                    resOccasion: 'Birthday'
                }}
                validationSchema={Yup.object({
                    reservationDate: Yup.date().required('Required'),
                    reservationTime: Yup.string().required('Required'),
                    resNumGuests: Yup.number()
                        .min(1, 'Min: 1')
                        .max(10, 'Max: 10')
                        .required('Required'),
                    resOccasion: Yup.string().required('Required'),
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
                                <label htmlFor="reservationDate">Choose date</label>
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
                                        />
                                    )}
                                </Field>
                                <ErrorMessage name="reservationDate" component="div" className="form-field-error"/>
                            </div>

                            <div className="fieldset">
                                <label htmlFor="reservationTime">Choose time</label>

                                <Field
                                    className="form-field"
                                    name="reservationTime"
                                    as="select"
                                    innerRef={selectReservationTimeRef}
                                >
                                    {availableTimesState.map((time) => {
                                        return <option key={time.hour}>{time.hour}</option>
                                    })}
                                </Field>

                                <ErrorMessage name="reservationTime" component="div" className="form-field-error"/>
                            </div>

                            <div className="fieldset">
                                <label htmlFor="resNumGuests">Number of guests</label>
                                <Field
                                    className="form-field"
                                    name="resNumGuests"
                                    type="number"
                                    min="1"
                                    max="10"
                                />
                                <ErrorMessage name="resNumGuests" component="div" className="form-field-error"/>
                            </div>

                            <div className="fieldset">
                                <label htmlFor="resOccasion">Occasion</label>
                                <Field
                                    className="form-field"
                                    name="resOccasion"
                                    as="select"
                                >
                                    <option>Birthday</option>
                                    <option>Anniversary</option>
                                </Field>
                                <ErrorMessage name="resOccasion" component="div" className="form-field-error"/>
                            </div>

                            <button
                                type="submit"
                                className={"form-field " + (isValid ? "form-field-button-valid" : "form-field-button-invalid" )}
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