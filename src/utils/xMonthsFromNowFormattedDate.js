
export default function xMonthsFromNowFormattedDate( xMonthsFromNow ) {

    // Get today's date in local timezone
    const today = new Date();

    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1 + xMonthsFromNow)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);

    // Format the date as YYYY-MM-DD
    return `${year}-${month}-${day}`;
}