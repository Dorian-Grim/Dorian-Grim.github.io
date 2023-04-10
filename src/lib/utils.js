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
  /** @type {number} */ desiredLength,
  /** @type {boolean} */ shuffled = true
) => {
  let indexes;
  if(!shuffled)
    indexes = Array.from(Array(desiredLength).keys());
  else{
   indexes= getArrayOfRandomNumbers(
    desiredLength,
    quizQuestions.length
  );}
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
        question.correct_answers.push(quizQuestions[index].answers[val-1]);
      }
    );

    question.answers = shuffled ? shuffleAnswers(copiedAnswers) : copiedAnswers;
    quiz.push(question);
  });

  return quiz;
};
