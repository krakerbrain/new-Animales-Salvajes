export class BuscarAnimal {
  constructor(nombre, imagen, sonido) {
    this.nombre = nombre;
    this.imagen = imagen;
    this.sonido = sonido;
  }

  encontrarAnimal() {
    const preview = document.getElementById("preview");
    const img = `<img class = "preview2" src="assets/imgs/${this.imagen}" alt="">`;
    preview.innerHTML = img;
    preview.classList.add("previewAnimal");
  }

  tarjetaAnimal() {
    const animal = document.getElementById("Animales");
    const cardAnimal = `
      <div class="card mr-3" style="width: 15rem">
        <img src="/assets/imgs/${this.imagen}" class="card-img-top" alt="..." />
        <div class="card-body bg-secondary">
          <i id="btnSound" class="far fa-volume-up text-light"><audio id="${this.nombre}-sound" preload="none" src="/assets/sounds/${this.sonido}"></audio></i>
        </div>
    </div>
      `;
    animal.innerHTML += cardAnimal;
    //this.sonidoAnimal(this.nombre, this.sonido);
  }

  sonidosCard() {
    const player = document.getElementById("player");
    player.setAttribute("src", `/assets/sounds/${this.sonido}`);
  }
}
