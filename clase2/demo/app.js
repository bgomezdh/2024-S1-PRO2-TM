/* requerir modulo de tercero */
const moment = require('moment');

/* console.log(moment().format("MMM Do YY"));
 */

/* requerir modulo propio */
const calcu = require('./my_modules/calculadora');

let resultado = calcu.sumar(2,40);

console.log(resultado);