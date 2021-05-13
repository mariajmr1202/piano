const containerBtn = document.getElementById("start");
const notaDo = document.getElementById("notaDo");
const notaRe = document.getElementById("notaRe");
const notaMi = document.getElementById("notaMi");
const notaFa = document.getElementById("notaFa");
const notaSol = document.getElementById("notaSol");
const notaLa = document.getElementById("notaLa");
const notaSi = document.getElementById("notaSi");
const notaDoBml = document.getElementById("notaDoBml");
const notaReBml = document.getElementById("notaReBml");
const notaFaBml = document.getElementById("notaFaBml");
const notaSolBml = document.getElementById("notaSolBml");
const notaLaBml = document.getElementById("notaLaBml");
let nivelSpan = document.getElementById("nivel");
const ULTIMO_NIVEL = 10;
const soundDo = document.getElementById("sound-do");
const soundRe = document.getElementById("sound-re");
const soundMi = document.getElementById("sound-mi");
const soundFa = document.getElementById("sound-fa");
const soundSol = document.getElementById("sound-sol");
const soundLa = document.getElementById("sound-la");
const soundSi = document.getElementById("sound-si");
const soundDob = document.getElementById("sound-dob");
const soundReb = document.getElementById("sound-reb");
const soundFab = document.getElementById("sound-fab");
const soundSolb = document.getElementById("sound-solb");
const soundLab = document.getElementById("sound-lab");

class Juego {
  constructor() {
    this.inicializar();
    this.generarSecuencia();
    setTimeout(() => {
      this.siguienteNivel();
    }, 800);
  }

  inicializar() {
    this.elegirNota = this.elegirNota.bind(this);
    containerBtn.classList.add("hide");
    this.nivel = 1;
    this.notas = {
      notaDo,
      notaRe,
      notaMi,
      notaFa,
      notaSol,
      notaLa,
      notaSi,
      notaDoBml,
      notaReBml,
      notaFaBml,
      notaSolBml,
      notaLaBml,
    };
  }

  generarSecuencia() {
    this.secuencia = new Array(ULTIMO_NIVEL)
      .fill(0)
      .map(() => Math.floor(Math.random() * 12));
  }

  siguienteNivel() {
    nivelSpan.innerHTML = this.nivel;
    this.subNivel = 0;
    this.iluminarSecuencia();
  }

  transformarANota(num) {
    switch (num) {
      case 0:
        return "notaDo";
      case 1:
        return "notaRe";
      case 2:
        return "notaMi";
      case 3:
        return "notaFa";
      case 4:
        return "notaSol";
      case 5:
        return "notaLa";
      case 6:
        return "notaSi";
      case 7:
        return "notaDoBml";
      case 8:
        return "notaReBml";
      case 9:
        return "notaFaBml";
      case 10:
        return "notaSolBml";
      case 11:
        return "notaLaBml";
    }
  }

  transformarANumero(nota) {
    switch (nota) {
      case "notaDo":
        return 0;
      case "notaRe":
        return 1;
      case "notaMi":
        return 2;
      case "notaFa":
        return 3;
      case "notaSol":
        return 4;
      case "notaLa":
        return 5;
      case "notaSi":
        return 6;
      case "notaDoBml":
        return 7;
      case "notaReBml":
        return 8;
      case "notaFaBml":
        return 9;
      case "notaSolBml":
        return 10;
      case "notaLaBml":
        return 11;
    }
  }

  iluminarSecuencia() {
    for (let i = 0; i < this.nivel; i++) {
      const nota = this.transformarANota(this.secuencia[i]);
      setTimeout(() => this.iluminarNota(nota, i), 1500 * i);
    }
  }

  iluminarNota(nota, i) {
    this.notas[nota].classList.add("light");
    this.playSound(nota);
    setTimeout(() => this.apagarColor(nota, i), 450);
  }

  apagarColor(nota, i) {
    this.notas[nota].classList.remove("light");
    if (i + 1 === this.nivel) {
      this.agregarEventosClick();
    }
  }

  playSound(nota) {
    switch (nota) {
      case "notaDo":
        soundDo.play();
        break;
      case "notaRe":
        soundRe.play();
        break;
      case "notaMi":
        soundMi.play();
        break;
      case "notaFa":
        soundFa.play();
        break;
      case "notaSol":
        soundSol.play();
        break;
      case "notaLa":
        soundLa.play();
        break;
      case "notaSi":
        soundSi.play();
        break;
      case "notaDoBml":
        soundDob.play();
        break;
      case "notaReBml":
        soundReb.play();
        break;
      case "notaFaBml":
        soundFab.play();
        break;
      case "notaSolBml":
        soundSolb.play();
        break;
      case "notaLaBml":
        soundLab.play();
        break;
    }
  }

  agregarEventosClick() {
    this.notas.notaDo.addEventListener("click", this.elegirNota);
    this.notas.notaRe.addEventListener("click", this.elegirNota);
    this.notas.notaMi.addEventListener("click", this.elegirNota);
    this.notas.notaFa.addEventListener("click", this.elegirNota);
    this.notas.notaSol.addEventListener("click", this.elegirNota);
    this.notas.notaLa.addEventListener("click", this.elegirNota);
    this.notas.notaSi.addEventListener("click", this.elegirNota);
    this.notas.notaDoBml.addEventListener("click", this.elegirNota);
    this.notas.notaReBml.addEventListener("click", this.elegirNota);
    this.notas.notaFaBml.addEventListener("click", this.elegirNota);
    this.notas.notaSolBml.addEventListener("click", this.elegirNota);
    this.notas.notaLaBml.addEventListener("click", this.elegirNota);
  }

  eliminarEventosClick() {
    this.notas.notaDo.removeEventListener("click", this.elegirNota);
    this.notas.notaRe.removeEventListener("click", this.elegirNota);
    this.notas.notaMi.removeEventListener("click", this.elegirNota);
    this.notas.notaFa.removeEventListener("click", this.elegirNota);
    this.notas.notaSol.removeEventListener("click", this.elegirNota);
    this.notas.notaLa.removeEventListener("click", this.elegirNota);
    this.notas.notaSi.removeEventListener("click", this.elegirNota);
    this.notas.notaDoBml.removeEventListener("click", this.elegirNota);
    this.notas.notaReBml.removeEventListener("click", this.elegirNota);
    this.notas.notaFaBml.removeEventListener("click", this.elegirNota);
    this.notas.notaSolBml.removeEventListener("click", this.elegirNota);
    this.notas.notaLaBml.removeEventListener("click", this.elegirNota);
  }

  elegirNota(event) {
    const nombreNota = event.target.dataset.nota;
    const numeroNota = this.transformarANumero(nombreNota);
    this.iluminarNota(nombreNota);

    if (numeroNota === this.secuencia[this.subNivel]) {
      this.subNivel++;
      //Pasa de nivel
      if (this.subNivel === this.nivel) {
        this.nivel++;
        this.eliminarEventosClick();
        if (this.nivel === ULTIMO_NIVEL + 1) {
          this.ganoElJuego();
        } else {
          setTimeout(() => this.siguienteNivel(), 1500);
        }
      }
    } else {
      this.perdioElJuego();
    }
  }

  ganoElJuego() {
    swal("You win!", "Congratulations", "success").then(() => {
      containerBtn.classList.remove("hide");
    });
  }

  perdioElJuego() {
    swal("You lose :(", "Try again!", "error").then(() => {
      this.eliminarEventosClick();
      containerBtn.classList.remove("hide");
    });
  }
}

function empezarJuego() {
  let juego = new Juego();
}
