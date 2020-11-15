// import heroes, { owners } from "../data/heroes";
import heroes from "../data/heroes";

const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

// Find -> Solo encuentra una coincidencia
// Filter -> Encuentra todas las coincidencias posibles
const getHeroeByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner);

export { getHeroeById, getHeroeByOwner };
