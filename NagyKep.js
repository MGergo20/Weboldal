export default class NagyKep {
    #lista = [];
    #szuloElem;
    #index = 0;
    constructor(lista, szuloElem) {
        this.#lista = lista;
        this.#szuloElem = document.querySelector(".nagykep");
        this.nagymegjelenites();
    }
    nagymegjelenites() {
        this.#szuloElem.innerHTML = "";
        const elem = this.#lista[this.#index];
        const kivalasztas = document.createElement("div")
        kivalasztas.innerHTML = `
            <div class = "menu2">
                <h2>${elem.nev}</h2>
                <img src = "${elem.kep}" alt = "${elem.nev}">
                <p>${elem.leiras}</p>
                <ul>${elem.hozzavalok}</ul>
                <p>${elem.kategoria}</p>
                <button class ="hatra"><=</button>
                <button class ="elore">=></button>
            </div>
            `;
        this.#szuloElem.appendChild(kivalasztas);

        kivalasztas.querySelector(".hatra").addEventListener("click", () => {
            this.#index=(this.#index - 1 + this.#lista.length) % this.#lista.length;
            this.nagymegjelenites();
        });

        kivalasztas.querySelector(".elore").addEventListener("click", () => {
            this.#index=(this.#index + 1 )% this.#lista.length;
            this.nagymegjelenites();
        });
    }
}