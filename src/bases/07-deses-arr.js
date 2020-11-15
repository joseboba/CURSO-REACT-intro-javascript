const personajes = ["Suko", "Katara", "Aang"];

const [, , p3] = personajes;

console.log(p3);

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Tarea
// 1. El primer valor del arr se llamará nombre
// 2. Se llamara setNombre
const useState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};

const [nombre, setNombre] = useState("Goku");
console.log(nombre);
console.log(setNombre());
