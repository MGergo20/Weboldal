import Index from "./index.js";
export default class Gomb {
    #lista = [];
    #szuloElem;
    constructor(lista, szuloElem) {
        this.#lista = lista;
        this.#szuloElem = szuloElem;
        this.fooldal();
        this.kedvencgomb();
    }
    fooldal() {
        const fgomb = document.querySelector(".fooldal")
        fgomb.addEventListener("click", () => {
            new Index(this.#lista, this.#szuloElem)
        })
    }
    kedvencgomb() {
        const kgomb = document.querySelector(".kedvenc")
        kgomb.addEventListener("click", () => {
            const k = this.#lista.filter(recept => recept.kedvenc === true)
            new Index(k, this.#szuloElem)
        })
    }
}