
//Requerimos la funcion que tenemos almacenada en modulo suma y hacemos el test dandole los valores correctos para la prueba
const suma = require('../calc-modulos/suma');

test('sumar 3 + 1 es igual a 4', () => {
  expect(suma(3, 1)).toBe(4);
});