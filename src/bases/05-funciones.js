// Funciones en JS
const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

console.log(saludar("Aang"));
console.log(saludar2("Katara"));
console.log(saludar3("Sokka"));
console.log(saludar4());

const getUser = () => ({
  uid: "ABC123",
  username: "El_Papi1502",
});

const user = getUser();
console.log(user);

/*Tarea
1. Transformar a una funcion de flecha      --
2. Tienen qu retornar un objeto implícito   --
3. Prueba
*/

const getUsuarioActivo = (nombre) => ({
  uid: "ABC1234",
  username: nombre,
});

console.log(getUsuarioActivo("Enrique"));
