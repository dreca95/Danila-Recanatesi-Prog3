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
    createHtmlElement() {
        const div = document.createElement("div");
        div.classList.add("carta");

        const value = document.createElement("h1");
        value.textContent = `${this.value} ${this.suit}`;

        const imagen = document.createElement("img");
        imagen.src = this.imagen;

        const code = document.createElement("h2");
        code.textContent = this.code;


        div.appendChild(value);
        div.appendChild(imagen);
        div.appendChild(code);

        return div;
    }
}