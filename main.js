import { Carta } from "./carta.js";

const url = "https://deckofcardsapi.com/api/deck/new/draw/?count=52";

const divCartas = document.getElementById("cartas");
let primeraCarta = 0;
let ultimaCarta = 6;
let arrayCartas = [];
const siguiente = document.getElementById("siguiente");
const anterior = document.getElementById("anterior");




async function cargarCartas() {

    const response = await fetch(url);

    if (response.ok) {
        const json = await response.json();

        arrayCartas = json.cards;

        mostrarCartas();
    } else {
        alert("Error al cargar las cartas");
    }
}



async function mostrarCartas() {

    try {

        divCartas.innerHTML = "";
        const seisCartas = arrayCartas.slice(primeraCarta, ultimaCarta);

        seisCartas.forEach(carta => {
            const obj = new Carta(carta.code, carta.value, carta.suit, carta.image);
            const cardelement = obj.createHtmlElement();
            divCartas.appendChild(cardelement);

        })

    }
    catch (e) {
        alert("fallo ");
    }
}


/*5*/

function paginaSiguiente() {
   
   
    if (ultimaCarta < arrayCartas.length) {
   
        primeraCarta += 6;
        ultimaCarta += 6;

        if (ultimaCarta > arrayCartas.length) {
            ultimaCarta = arrayCartas.length;
        }

        mostrarCartas();
    }
}

function paginaAnterior() {
    
    if (primeraCarta > 0) { 

        primeraCarta -= 6;
        ultimaCarta -= 6;

        if (primeraCarta < 0) {
            
            primeraCarta = 0;
        }

        mostrarCartas();
    }
}



window.paginaSiguiente = paginaSiguiente;
window.paginaAnterior = paginaAnterior;
window.addEventListener("load", cargarCartas);