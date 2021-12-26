import { BuscarAnimal } from "../../models/BuscarAnimal.js";
import { data } from "../../data/assetsAnimales.js";

const animalSeleccionado = document.getElementById("animal");
const edadAnimal = document.getElementById("edad");
const button = document.getElementById("btnRegistrar");

const select = () => {
  animalSeleccionado.addEventListener("change", () => {
    const animal = animalSeleccionado.options[animalSeleccionado.selectedIndex].value;
    selectAnimal(animal);
  });
  button.addEventListener("click", () => {
    const animal = animalSeleccionado.options[animalSeleccionado.selectedIndex].value;
    tarjetaAnimales(animal);
  });
};
select();

const selectAnimal = (animal) => {
  let animalObject = data.find((data) => data.name == animal);
  const buscarAnimal = new BuscarAnimal(animalObject.name, animalObject.imagen, animalObject.sonido);
  buscarAnimal.encontrarAnimal();
};

const tarjetaAnimales = (animal) => {
  let animalObject = data.find((data) => data.name == animal);
  const cardAnimal = new BuscarAnimal(animalObject.name, animalObject.imagen, animalObject.sonido);
  cardAnimal.tarjetaAnimal();
};
