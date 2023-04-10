import algoritmi_structuri_date from "./JSONS/algoritmi si structuri de date.json";
import baze_de_date from "./JSONS/baze de date.json";
import comert_electronic from "./JSONS/comert electronic.json";
import criptografie from "./JSONS/criptografie.json";
import cloud_computing from "./JSONS/cloud_computing.json";
import programare_in_c from "./JSONS/programare in c++.json";
import programare_in_java from "./JSONS/programare in java.json";
import {programare_procedurala} from "./JSONS/programare_procedurala"
import retele_de_calculatoare from "./JSONS/retele de calculatoare.json";
import sgbd from "./JSONS/sgbd.json";
import sisteme_de_operare from "./JSONS/sisteme de operare.json";
import tehnici_avansate_programare from "./JSONS/tehnici avansate de programare.json";
import tehnologii_web from "./JSONS/tehnologii web.json";

export const trivia = {
  algoritmi_structuri_date,
  baze_de_date,
  comert_electronic,
  cloud_computing,
  criptografie,
  programare_in_c,
  programare_in_java,
  programare_procedurala,
  retele_de_calculatoare,
  sgbd,
  sisteme_de_operare,
  tehnici_avansate_programare,
  tehnologii_web,
};

/**
 * @type {any[]}
 */
export const trimmedTrivia = [];

Object.entries(trivia).map(([, value]) => {
  value.forEach((/** @type {any} */ element) => trimmedTrivia.push(element));
});

export const triviaForCourse = (/** @type {string} */ course) => {
  if (course === "random") return trimmedTrivia;
  // @ts-ignore
  return trivia[course] ? trivia[course] : null;
};
