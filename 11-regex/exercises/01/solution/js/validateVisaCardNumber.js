// 1. Írj egy függvényt `validateVisaCardNumber` néven, ami paraméterként egy visa kártyaszámot vár 
// stringként, szóközök nélkül! A függvény egy `Boolean` értékben visszaadja, hogy 
// a paraméterként megadott kártyaszám megfelelő formátumú e, vagy sem.

function validateVisaCardNumber(visaCardNumber) {
  const regEx = /^4[0-9]{12}(?:[0-9]{3})?$/;
    return visaCardNumber.match(regEx) ? true : false;
};

export default validateVisaCardNumber;
