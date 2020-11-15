import { getHeroeById } from "./bases/08-imports-exports";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //Tarea
//     //Importar los metodos de la clase pasada
//     const heroe = getHeroeById(4);
//     resolve(heroe);
//     reject("No se pudo encontrar el heroe");
//     // resolve(heroe);
//   }, 2000);
// });

// promesa
//   .then((heroe) => {
//     console.log("Heroe:", heroe);
//   })
//   .catch((err) => console.warn(err));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //Tarea
      //Importar los metodos de la clase pasada
      const heroe = getHeroeById(id);
      if (heroe !== undefined) {
        resolve(heroe);
      } else {
        reject("No se pudo encontrar el heroe");
      }
    }, 2000);
  });
};

getHeroeByIdAsync(4)
  //Cuando del Then o catch es enviado a otra función se puede enviar de la siguiente manera (Ver Then)
  .then(console.log)
  .catch((err) => console.warn(err));
