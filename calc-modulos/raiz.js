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