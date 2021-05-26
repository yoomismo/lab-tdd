//Requerimos la funcion que tenemos almacenada en modulo raiz y hacemos el test dandole los valores correctos para la prueba
const raiz = require('../calc-modulos/raiz');

test('la raiz de 121 es igual a 11.0', () => {
  expect(raiz(121)).toBe(11.0);
});
<<<<<<< HEAD
test('la raiz de 8 es igual a 2.828', () => { 
=======
test('la raiz de 8 es igual a 2.828', () => {
>>>>>>> raizCuadrada
  expect(raiz(8)).toBe(2.82842712474619);
});