export class Carta {
    /*2a*/
    code;
    value;
    suit;
    imagen;
    /*2b*/
    constructor(code, value, suit, imagen) {
        this.code = code;
        this.value = value;
        this.suit = suit;
        this.imagen = imagen;
    }
    /*2ci*/
    toJsonString() {
        return `[{"code":${this.code},"value":${this.value},"suit":${this.suit},"imagen":"${this.imagen}"}]`;
    }

    /*2cII*/
    static createFromJsonString(json) {
        const jsonParsed = JSON.parse(json);
        return new Carta(jsonParsed.code, jsonParsed.value, jsonParsed.suit, jsonParsed.imagen);
    }

    /*2ciii*/
    createHtmlElement(guardar = true) {
        const div = document.createElement("div");
        div.classList.add("carta");

        const value = document.createElement("h1");
        value.textContent = `${this.value} ${this.suit}`;

        const imagen = document.createElement("img");
        imagen.src = this.imagen;

        const code = document.createElement("h2");
        code.textContent = this.code;


        const link = document.createElement("a");
        link.href = this.imagen;
        link.target = "_blank";

        
        link.appendChild(imagen);



        
        div.appendChild(value);
        div.appendChild(link);
        div.appendChild(code);


        if (guardar) {
            const btnGuardar = document.createElement("button");
            btnGuardar.textContent = "Guardar";
            btnGuardar.classList.add("guardar");
            div.appendChild(btnGuardar);

            btnGuardar.addEventListener("click", () => {
                Carta.guardarCarta(this);

            });
        }
        return div;

    }


    static guardarCarta(carta) {
        let cartas = JSON.parse(localStorage.getItem("cartas") || "[]");
        let esta = false;

        cartas.forEach(elemento => {
            if (elemento.code === carta.code) {
                esta = true;
            }
        });
        if (!esta) {
            cartas.push(carta);
        }
        localStorage.setItem("cartas", JSON.stringify(cartas));
    }

}