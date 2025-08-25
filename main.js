import { receptLista } from "./receptek.js";
import Index from "./index.js";
import Gombok from "./Gombok.js";
import NagyKep from "./NagyKep.js";

const jatekElem = document.querySelector(".jatekter");

new Index(receptLista, jatekElem);

new Gombok(receptLista, jatekElem);

new NagyKep(receptLista, jatekElem)