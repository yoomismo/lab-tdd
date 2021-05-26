//Requerimos la funcion que tenemos almacenada en modulo mult y hacemos el test dandole los valores correctos para la prueba
const mult = require('../calc-modulos/mult');

test('multiplicar 7 * 8', () => {
  expect(mult(7, 8)).toBe(56);
});
