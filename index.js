export default class Index {
    #lista = [];
    #szuloElem;
    constructor(lista, szuloElem) {
        this.#lista = lista;
        this.#szuloElem = szuloElem;
        this.megjelenit();
    }
    megjelenit() {
        this.#szuloElem.innerHTML = '';
        this.#lista.forEach(recept => {
            const elem = document.createElement("div");
            elem.innerHTML = `
            <div class= "menu">
                <h2 class = "cim">${recept.nev}</h2>
                <img src = "${recept.kep}" alt = "${recept.nev}">
                <button class = "gomb">${recept.kedvenc ? "Eltávoítás a kedvencek közöl" : "Kedvenc"}</button>
            </div>
        `;
            this.#szuloElem.appendChild(elem);


            const btn = elem.querySelector(".gomb");
            btn.addEventListener("click", () => {
                recept.kedvenc = !recept.kedvenc
                btn.textContent = recept.kedvenc ? 'Eltávoítás a kedvencek közöl' : 'Kedvenc';
            });
        });
    }
}