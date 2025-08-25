import { receptLista } from "./receptek.js";
import Index from "./index.js";
import Gomb from "./gomb.js";
import NagyKep from "./NagyKep.js";

const jatekElem = document.querySelector(".jatekter");
const nagyKep = document.querySelector(".nagykep");

new Index(receptLista, jatekElem);

new Gomb(receptLista, jatekElem);

new NagyKep(receptLista, nagyKep)