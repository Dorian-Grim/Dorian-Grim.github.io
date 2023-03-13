//source https://github.com/jasonlutterloh/trivia-app/blob/main/src/components/utils.js

const getRandomNumber = (/** @type {number} */ max) => {
    return Math.floor(Math.random() * max);
  };
  
  export const getArrayOfRandomNumbers = (/** @type {number} */ desiredLength, /** @type {any} */ max) => {
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
  
  export const getPercentageColor = (/** @type {number} */ value) => {
    if (value >= 90) {
      return "#008568";
    } else if (value >= 80) {
      return "#0074C8";
    } else if (value >= 70) {
      return "#d17216";
    } else {
      return "#d11616";
    }
  };
  
  export const getPercentage = (/** @type {number} */ score, /** @type {number} */ max) => {
    let percentage = 0;
    if (typeof score === "number" && typeof max === "number") {
      percentage = Math.round((score / max) * 100);
    }
    return percentage;
  };
  
  export const generateQuiz = (/** @type {string | any[]} */ quizQuestions, /** @type {any} */ desiredLength) => {
      let indexes = getArrayOfRandomNumbers(
        desiredLength,
        quizQuestions.length
      );
      /**
       * @type {{ question: any; followup: any; correctAnswer: any; answers: any; }[]}
       */
      let quiz = [];
  
      indexes.forEach((index) => {
        let question = {};
        question.question = quizQuestions[index].q;
        question.followup = quizQuestions[index].followup;
        let copiedAnswers = [...quizQuestions[index].a];
        question.correctAnswer = quizQuestions[index].a[0];
        question.answers = shuffleAnswers(copiedAnswers);
  
        quiz.push(question);
      });
  
      return quiz;
  }