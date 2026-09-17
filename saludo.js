"use strict";
// 2) TypeScript: variables con tipo (anotaciones).
let nombre = "María Torres";
let creditos = 10;
let activo = true;
console.log(nombre, creditos, activo);
// 3) Función tipada: recibe y devuelve tipos declarados.
function saludar(persona) {
    return "Bienvenido/a, " + persona;
}
console.log(saludar(nombre));
const curso = { nombre: "JavaScript Avanzado", creditos: 3 };
console.log(`Curso: ${curso.nombre} (${curso.creditos} créditos)`);
function resultado(creditos) {
    if (creditos > 21) {
        return "Eres un buen estudiante";
    }
    return "estudia hijito";
}
console.log(resultado(creditos));
