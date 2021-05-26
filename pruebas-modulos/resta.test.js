//Requerimos la funcion que tenemos almacenada en modulo resta y hacemos el test dandole los valores correctos para la prueba
const resta = require('../calc-modulos/resta');

test('restar 3 - 1 es igual a 2', () => {
  expect(resta(3, 1)).toBe(2);
});