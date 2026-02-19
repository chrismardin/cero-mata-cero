const casillas = document.querySelectorAll(".casilla");
const estado = document.querySelector(".estado");
const boton = document.querySelector(".reiniciar");

let turno = "X";
let juegoActivo = true;

// Agregar evento a cada casilla
for (let i = 0; i < casillas.length; i++) {

    casillas[i].addEventListener("click", function () {

        // Si ya tiene algo o el juego terminó
        if (casillas[i].textContent !== "" || juegoActivo === false) {
            return;
        }

        casillas[i].textContent = turno;

        verificarGanador();

    }); 

}

function verificarGanador() {



    if (
        casillas[0].textContent === turno &&
        casillas[1].textContent === turno &&
        casillas[2].textContent === turno
    ) {
        terminarJuego();
        return;
    }

    if (
        casillas[3].textContent === turno &&
        casillas[4].textContent === turno &&
        casillas[5].textContent === turno
    ) {
        terminarJuego();
        return;
    }

    if (
        casillas[6].textContent === turno &&
        casillas[7].textContent === turno &&
        casillas[8].textContent === turno
    ) {
        terminarJuego();
        return;
    }

    if (
        casillas[0].textContent === turno &&
        casillas[3].textContent === turno &&
        casillas[6].textContent === turno
    ) {
        terminarJuego();
        return;
    }

    if (
        casillas[1].textContent === turno &&
        casillas[4].textContent === turno &&
        casillas[7].textContent === turno
    ) {
        terminarJuego();
        return;
    }

    if (
        casillas[2].textContent === turno &&
        casillas[5].textContent === turno &&
        casillas[8].textContent === turno
    ) {
        terminarJuego();
        return;
    }

    if (
        casillas[0].textContent === turno &&
        casillas[4].textContent === turno &&
        casillas[8].textContent === turno
    ) {
        terminarJuego();
        return;
    }

    if (
        casillas[2].textContent === turno &&
        casillas[4].textContent === turno &&
        casillas[6].textContent === turno
    ) {

        terminarJuego();
        return;
    }

    // esto es para ver si hay un empate manual
    let lleno = true;

    for (let i = 0; i < casillas.length; i++) {
        if (casillas[i].textContent === "") {
            lleno = false;
        }
    }

    if (lleno === true) {
        estado.textContent = "Empate";
        juegoActivo = false;
        return;
    }

    // esto sirve para cambiar el turno
    if (turno === "X") {
        turno = "O";
    } else {
        turno = "X";
    }

    estado.textContent = "Turno del jugador " + turno;
}

function terminarJuego() {
    estado.textContent = "Ganó el jugador " + turno;
    juegoActivo = false;
}

boton.addEventListener("click", function () {

    for (let i = 0; i < casillas.length; i++) {
        casillas[i].textContent = "";
    }

    turno = "X";
    juegoActivo = true;
    estado.textContent = "Comenzar partida o seleccionar jugador";

});
