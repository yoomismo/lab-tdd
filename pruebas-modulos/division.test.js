
//Requerimos la funcion que tenemos almacenada en modulo division y hacemos el test dandole los valores correctos para la prueba
const division = require('../calc-modulos/division');

test('dividir 6 entre 2 es igual a 3', () => {
  expect(division(6, 2)).toBe(3);
});