
const currentDate = new Date();
const maxDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 3, currentDate.getDate());

// Handle case where the month exceeds 11 (December)
if (maxDate.getMonth() > 11) {
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    maxDate.setMonth(maxDate.getMonth() % 12);
}

export const threeMonthsFromNowDate = maxDate;