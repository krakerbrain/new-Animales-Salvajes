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
    preview.style.backgroundImage = "none";
  }

  tarjetaAnimal() {
    const animal = document.getElementById("Animales");
    const edad = document.getElementById("edad").value;
    const comentarios = document.getElementById("comentarios").value;

    const sonidoID = `document.getElementById('${this.nombre}-sound')`;
    const cardAnimal = `
      <div class="card mr-3" style="width: 15rem">
        <img src="/assets/imgs/${this.imagen}" class="card-img-top" alt="..." data-toggle="modal" data-target="#${this.nombre}"/>
        <div class="card-body bg-secondary">
          <i id="btnSound" class="far fa-volume-up text-light" onclick = "${sonidoID}.play()">
            <audio id="${this.nombre}-sound" preload="none" src="/assets/sounds/${this.sonido}">
            </audio>
          </i>
        </div>
    </div>
      `;
    animal.innerHTML += cardAnimal;

    this.modalAnimal(this.nombre, edad, comentarios, this.imagen);
  }

  modalAnimal(nombre, edad, comentarios, imagen) {
    const nuevoModal = document.getElementById("nuevoModal");
    const renderModal = `
    <div class="modal fade" id="${nombre}">
      <div class="modal-dialog modal-dialog-centered w-25" role="document">
        <div class="modal-content bg-dark">
          <div class="modal-body">
          <div class="imgModal">
          <img src="./assets/imgs/${imagen}" alt="">
        </div>
        <div class="cuerpoModal">
            <h5>${edad}</h5>
            <h3>Comentarios</h3>
            <hr>
            <p>${comentarios}</p>
        </div>
          </div>
      </div>
    </div>
    `;
    nuevoModal.innerHTML += renderModal;
    console.log(edad, comentarios, imagen);
  }
}
