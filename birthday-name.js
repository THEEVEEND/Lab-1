//dependencia normal
const calculator = require('birthday-calculator');

const date = new Date('2002,02,01')
const result = calculator.getDayWhenBorn(date);
console.log(result);

