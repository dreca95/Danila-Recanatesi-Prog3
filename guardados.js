import { Carta } from "./carta.js";

const seccion = document.getElementById("cartas");

const cartas = JSON.parse(localStorage.getItem("cartas") || "[]");

const botonOrdenPalo = document.getElementById("ordenPalo");

mostrarCartasGuardadas(cartas);




function mostrarCartasGuardadas(cartasGuardadas) {

    try {
        seccion.innerHTML = "";
        if (cartasGuardadas.length < 1) {
            alert("No hay cartas guardadas.");
        } else {
            cartasGuardadas.forEach(cartaJson => {
                const carta = new Carta(cartaJson.code, cartaJson.value, cartaJson.suit, cartaJson.imagen);
                seccion.appendChild(carta.createHtmlElement(false));
            });
        }
    } catch (e) {
        alert("Error al cargar");
    }
}


botonOrdenPalo.addEventListener("click", () => {
    const cartasOrdenadas = [...cartas];
    cartasOrdenadas.sort((a, b) => { return a.suit.localeCompare(b.suit); });

    mostrarCartasGuardadas(cartasOrdenadas);
});
