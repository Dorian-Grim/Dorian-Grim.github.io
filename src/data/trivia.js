export const trivia = {
  dezvoltare_app_mobile: [
    {
      question: "Considerim urmitorul program:\n\n#include<stdio.h>\n\nvoid p(int v[],int *n)\n{\n  int i,3,9;:\n  do\n    {\n      g=0;\n      for (i=0;i<*n; i++)\n      1f(v[i]<0)\n    {\n  for (j=i;j<*n-1;j++) v[jl=v[j+1]1;\n    (*n)--;\n    g=1;\n  }\n}",
      answers: [
        "corect1",
        "incorect3",
        "incorect1",
        "incorect2",
      ],
      correct_answers: [0],
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
    }
  ]
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
