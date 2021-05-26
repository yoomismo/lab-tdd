// Archivo que contiene la implementacion de nuestra prueba actual:
const mult = require('../calc-modulos/mult');

test('multiplicar 7 * 8', () => {
  expect(mult(7, 8)).toBe(56);
});
