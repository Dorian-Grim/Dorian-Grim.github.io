//source https://github.com/jasonlutterloh/trivia-app/blob/main/src/components/utils.js

const getRandomNumber = (/** @type {number} */ max) => {
  return Math.floor(Math.random() * max);
};

export const getArrayOfRandomNumbers = (
  /** @type {number} */ desiredLength,
  /** @type {any} */ max
) => {
  /**
   * @type {number[]}
   */
  let array = [];
  while (array.length < desiredLength) {
    let randomNumber = getRandomNumber(max);
    if (!array.includes(randomNumber)) {
      array.push(randomNumber);
    }
  }
  return array;
};

//Source: https://javascript.info/task/shuffle
export const shuffleAnswers = (/** @type {any[]} */ array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

export const getDisplayValue = (/** @type {boolean} */ value) => {
  if (typeof value === "boolean") {
    if (value === true) {
      return "True";
    } else if (value === false) {
      return "False";
    }
  }

  return value;
};

export const generateQuiz = (
  /** @type {string | any[]} */ quizQuestions,
  /** @type {any} */ desiredLength
) => {
  let indexes = getArrayOfRandomNumbers(desiredLength, quizQuestions.length);
  /**
   * @type {{ question: string; answers: string[]; correct_answers: string[]; }[]}
   */
  let quiz = [];

  indexes.forEach((index) => {
    let question = {};
    question.question = quizQuestions[index].question;
    let copiedAnswers = [...quizQuestions[index].answers];

    /**
     * @type {string[]}
     */
    question.correct_answers = [];
    quizQuestions[index].correct_answers.forEach(
      (/** @type {number} */ val) => {
        question.correct_answers.push(quizQuestions[index].answers[val]);
      }
    );

    question.answers = shuffleAnswers(copiedAnswers);
    quiz.push(question);
  });

  return quiz;
};

//Handle the image attribute if present
export const compileQuestion = (/** @type {string} */ question) => {
  if (question.includes("<<")) {
    let position;

    if (/<<$/.test(question)) position = 2;
    else if (/^<</.test(question)) position = 1;
    else position = 1;

    const tempArr = question.split(/<<|>>/);
    const img = `<img style="margin: 10px 0; width: 100%;" src="images/${tempArr[position]}" alt="Poza a fost incarcata gresit" />`;
    
    tempArr[position] = img;
    return tempArr.join("");
  }
  return null;
};
