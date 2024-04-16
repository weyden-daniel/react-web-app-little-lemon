const seededRandom = seed => {
    const m = 2 ** 25 - 19;
    const a = 574298;
    let s = seed % m;

    return () => (s = s * a % m) / m;
  };

  const fetchAPI = ( date ) => {

    if ( !( date instanceof Date) ) {
        return [];
    }

    const year = parseInt(date.getFullYear());
    const month = parseInt(('0' + (date.getMonth() + 1)).slice(-2));
    const day = parseInt(('0' + date.getDate()).slice(-2));

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

    console.log("Submitted form data: ", formData);

    return true;
}

  export {
    fetchAPI,
    submitAPI
  };