export const trivia = {
  dezvoltare_app_mobile: [
    {
      question:
        "Pentru a extrage informații de tip String asociate unui intent se utilizează metoda:",
      image: "",
      type: "checkbox",
      answers: [
        {
          answer: "getString()",
          image: "",
          correct: true,
        },
        {
          answer: "getIntentString()",
          image: "",
          correct: true,
        },
        {
          answer: "getDataStringIntent()",
          image: "",
          correct: true,
        },
        {
          answer: "getStringExtra()",
          image: "",
          correct: true,
        },
      ],
    },
    {
      question:
        "Test Pentru a extrage informații de tip String asociate unui intent se utilizează metoda:",
      image: "",
      type: "radio",
      answers: [
        {
          answer: "getString()",
          image: "",
          correct: true,
        },
        {
          answer: "getIntentString()",
          image: "",
          correct: true,
        },
        {
          answer: "getDataStringIntent()",
          image: "",
          correct: true,
        },
        {
          answer: "getStringExtra()",
          image: "",
          correct: true,
        },
      ],
    },
  ],
};

/**
 * @type {any[]}
 */
export const trimmedTrivia = [];

Object.entries(trivia).map(([key, value]) => {
    value.forEach( (/** @type {any} */ element) => trimmedTrivia.push(element))
} );