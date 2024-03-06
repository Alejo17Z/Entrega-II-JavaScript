// arreglo de números
const crearArregloNumerico = () => {
    return [6,2,13,44,5];
};

// arreglo de strings
const crearArregloDeStrings = () => {
    return ["Juan","María","Pedro","Ana","Luis"];
};

//  arreglo de objetos
const crearArregloDeObjetos = () => {
    return [
        { nombre: "Juan"},
        { nombre: "María"},
        { nombre: "Pedro"},
    ];
};

const usarReduce = (arreglo) => {
    return arreglo.reduce((acumulador, valorActual) => {
        return acumulador + valorActual;
    }, 0);
};

const usarFilter = (arreglo) => {
    return arreglo.filter((elemento) => {
        return typeof elemento === "string";
    });
};

const usarMap = (arreglo) => arreglo.map(objeto => `Eres una grandiosa persona ${objeto.nombre}`);

const arregloNumerico = crearArregloNumerico();
const arregloDeStrings = crearArregloDeStrings();
const arregloDeObjetos = crearArregloDeObjetos();

console.log("Resultado de reduce() con arreglo numérico:", usarReduce(arregloNumerico));
console.log("Resultado de filter() con arreglo de strings:", usarFilter(arregloDeStrings));
console.log("Resultado de map() con arreglo de objetos:", usarMap(arregloDeObjetos));
