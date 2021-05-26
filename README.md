## lab-tdd
# Introducción
Lo primero que hay que hacer es un npm install --save-dev jest que ello te genera la carpeta node_modules, el package.json y el package-lock.json junto con el jest, el cual usaremos para realizar las pruebas

## Suma

#### Función utilizada para resolver la suma

```javascript
//Función suma que recibe dos números y retorna la suma de dichos números
function suma(a, b) { 
    return a + b;
}
module.exports = suma;
```

#### Test utilizado para la suma:

```javascript
//Requerimos la funcion que tenemos almacenada en modulo suma y hacemos el test dandole los valores correctos para la prueba
const suma = require('../calc-modulos/suma');

test('sumar 3 + 1 es igual a 4', () => {
  expect(suma(3, 1)).toBe(4);
});
```

#### Resultado del test suma:

![1622059574843](https://raw.githubusercontent.com/yoomismo/lab-tdd/main/src/testSuma.png)



## Resta

#### Función utilizada para resolver la resta

```javascript
//Función suma que recibe dos números y retorna la suma de dichos números
function suma(a, b) { 
    return a + b;
}
module.exports = suma;
```

#### Test utilizado para la resta:

```javascript
//Requerimos la funcion que tenemos almacenada en modulo suma y hacemos el test dandole los valores correctos para la prueba
const suma = require('../calc-modulos/suma');

test('sumar 3 + 1 es igual a 4', () => {
  expect(suma(3, 1)).toBe(4);
});
```

#### Resultado del test resta:

![1622059574843](https://raw.githubusercontent.com/yoomismo/lab-tdd/main/src/testResta.png)

# Raiz

Utilizamos esta página como referencia en la forma de realizar la raíz cuadrada: https://wizardprogrammer.blogspot.com/2018/12/calcular-la-raiz-caudrada-sin-la-clase.html que está en otros lenguajes y esta fórmula para resolverlo  

![1622059574843](https://raw.githubusercontent.com/yoomismo/lab-tdd/main/src/formula.png)



#### Función utilizada para resolver la raiz

```javascript
//Función raíz que recibe dos números y retorna la raíz de dichos números
function raiz(a) {
    x= 1.0;
    for(k = 1; k < 10; k++){
        x = (x + a/x) / 2;
    }
    a = x;
    return a;
}
//Exporta el módulo raíz
module.exports = raiz;
```

#### Test utilizado para la raíz:

```javascript
//Requerimos la funcion que tenemos almacenada en modulo raiz y hacemos el test dandole los valores correctos para la prueba
const raiz = require('../calc-modulos/raiz');

test('la raiz de 121 es igual a 11.0', () => {
  expect(raiz(121)).toBe(11.0);
});

test('la raiz de 8 es igual a 2.828', () => {
  expect(raiz(8)).toBe(2.82842712474619);
});
```

