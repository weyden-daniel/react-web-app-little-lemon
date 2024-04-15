import BookingForm from './BookingForm';
import './Reservations.css';

export default function Reservations({ availableTimesState, availableTimesDispatch, handleSubmitForm }) {
    return(
        <div id="section-reservations" class="reservations-screen">

            <h1>Reservations</h1>

            <BookingForm
                availableTimesState = { availableTimesState }
                availableTimesDispatch = { availableTimesDispatch }
                handleSubmitForm = { handleSubmitForm }
            />

        </div>
    );
}