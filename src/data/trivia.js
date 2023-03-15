export const trivia = {
  dezvoltare_app_mobile: [
    {
      question: "In poza urmatoare <<dezvoltare_app_mobile/test.png>> bla bla:",
      answers: [
        "corect1",
        "corect2",
        "getDataStringIntent()",
        "getStringExtra()",
      ],
      correct_answers: [0, 1],
    },
  ],
  programare_procedurala: [
    {
      question:
        "In care dintre variantele de mai jos se declară un tablou unidimensional (vector) x în care se pot memora cel mult 100 de numere reale?",
      answers: [
        "x=float[100];",
        "double x[100];",
        "float x[100];",
        "real x(100);",
      ],
      correct_answers: [1, 2],
    },
    {
      question:
        "Care dintre următoarele expresii logice este adevărată (are o valoare nenulă) dacă şi numai dacă numărul real memorat în variabila x nu aparţine intervalului (0,5]?",
      answers: [
        "(x<=0) || (x>5)",
        "(x<=0) && (x>5)",
        "(x<0) || (x>=5)",
        "(x<=0) && (x>5)",
      ],
      correct_answers: [1],
    },
    {
      question:
        "Care dintre următoarele expresii este adevărată (are o valoare nenulă) dacă şi numai dacă numărul întreg memorat în variabila x aparţine intervalului (1,6]?",
      answers: [
        "(x>=1) || (x<6)",
        "(x>1) || (x<=6)",
        "(x>1) && (x<6)",
        "(x>1) && (x<=6)",
      ],
      correct_answers: [3],
    },
    {
      question:
        "După executarea instrucţiunii float x = 55/17*5/8+48/5/8*15; ce valoare va fi memorată în variabila x?",
      answers: [
        "17.022058",
        "17",
        "16",
        "21.219914",
      ],
      correct_answers: [2],
    },
    {
      question:
        "Considerim urmitorul program:<<programare_procedurala/img1.png>>Ce valori vor fi afisate pe ecran dupa executarea programului de mai sus?",
      answers: [
        "-1 -3 -4",
        "2 5",
        "-1 2 -3 -4",
        "2 -3 -4 5",
      ],
      correct_answers: [1],
    },
  ],
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
