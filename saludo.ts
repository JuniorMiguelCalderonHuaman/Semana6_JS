// 2) TypeScript: variables con tipo (anotaciones).
let nombre: string = "María Torres";
let creditos: number = 10;
let activo: boolean = true;
console.log(nombre, creditos, activo);
// 3) Función tipada: recibe y devuelve tipos declarados.
function saludar(persona: string): string {
return "Bienvenido/a, " + persona;
}
console.log(saludar(nombre));
// 4) Interfaz: describe la forma de un dato.
interface Curso {
nombre: string;
creditos: number;
}
const curso: Curso = { nombre: "JavaScript Avanzado", creditos: 3 };
console.log(`Curso: ${curso.nombre} (${curso.creditos} créditos)`);

function resultado(creditos: number): String{
    if(creditos>21){
        return "Eres un buen estudiante"
    }
    return "estudia hijito"
}
console.log(resultado(creditos));

