const seededRandom = seed => {
    const m = 2 ** 25 - 19;
    const a = 574298;
    let s = seed % m;

    return () => (s = s * a % m) / m;
  };

  const fetchAPI = ( stringFormattedDate ) => {

    // YYYY-MM-DD
    const dateParts = stringFormattedDate.split("-");

    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]);
    const day = parseInt(dateParts[2]);

    const numericalDate = year * 10000 + month * 100 + day;

    let result = [];
    let random = seededRandom(numericalDate);

    for(let i = 17; i <= 22; i++) {
        const timeSlot = i + ':00';
        if(random() < 0.5) result.push({hour: timeSlot});
    }

    return result;
  };

const submitAPI = ( formData ) => {

    console.log(formData);

    return true;
}

  export {
    fetchAPI,
    submitAPI
  };