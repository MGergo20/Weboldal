import { receptLista } from "./receptek.js";
import Index from "./index.js";
import Gomb from "./gomb.js";
import NagyKep from "./NagyKep.js";

const jatekElem = document.querySelector(".jatekter");

new Index(receptLista, jatekElem);

new Gomb(receptLista, jatekElem);

new NagyKep(receptLista, jatekElem)