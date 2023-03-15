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
