<script>
  import { userQuizSelections, failedQuestions } from "../data/store";

  /**
   * @type {string[]}
   */
  export let correct_answers = [];
  export let showAnswers = false;
  export let generateAnswered = false;
  export let index = 0;
  export let question = "Ai uitat sa pui titlul intrebarii";
  export let answers = [
    "lipsa rasp 1",
    "lipsa rasp 2",
    "lipsa rasp 3",
    "lipsa rasp 4",
  ];
  /**
   * @type {string}
   */
  const compiledQuestion = question;

  // if needed add this to compiledQuestion
  /*
    + ` <span class="required" /><span style="color: #014446;">(5 Points)</span>`
  */

  /**
   * @type {string}
   */
  let userSelectedAnswers = "";

  /**
   * @type {("wrong"|"correct"|"")[]}
   */
  let errors = [];

  $userQuizSelections[index] = { userSelectedAnswers };

  if (generateAnswered) {
    answers.forEach((val, index) => {
      if (correct_answers.includes(val)) {
        userSelectedAnswers = val;
        errors[index] = "correct";
      }
    });
    errors = [...errors];
  }

  let checker = false;
  let showThisAnswer = false;

  $: if (showAnswers || showThisAnswer) {
    $userQuizSelections[index] = { userSelectedAnswers };

    answers.forEach((val, index) => {
      const userSelected = userSelectedAnswers === val;
      const answerIsCorrect = correct_answers.includes(val);

      if ((answerIsCorrect && !userSelected) || (!answerIsCorrect && userSelected)) checker = true;

      if (answerIsCorrect) errors[index] = "correct";
      if (userSelected && !answerIsCorrect) errors[index] = "wrong";
    });
    errors = [...errors];

    if(checker) failedQuestions.update(n => n + 1);
  }
</script>

<div class="question-wrapper">
  <div class="question-title">
    <p class="q-index" on:click={() => {showThisAnswer = true}}>{index + 1}.</p>
    <pre>{@html compiledQuestion}</pre>
  </div>

  <div class="answer-wrapper">
    {#each answers as answer, i}
      <div class="radio {errors[i]}">
        <label>
          <input
            type="radio"
            bind:group={userSelectedAnswers}
            name="answers{index}"
            value={answer}
            disabled={showAnswers}
          />
          <span><pre>{@html answer}</pre></span>
        </label>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  pre {
    margin: 0;
    display: inline-block;
  }
  .wrong {
    color: red;
  }
  .correct {
    color: green;
  }
  label {
    display: flex;
    font-size: 14px;
    span {
      margin-top: 2px;
      margin-left: 8px;
    }
  }
  .required {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 18px;
    height: 18px;

    &::before {
      content: "*";
      color: #ae1515;
      position: absolute;
      top: -4px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 22px;
    }
  }
  .question-title {
    position: relative;
    margin-left: 20px;

    .q-index {
      position: absolute;
      right: 100%;
      top: 0;
      padding-right: 3px;
    }
  }

  .answer-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin-left: 20px;
    margin-top: 20px;

    pre {
      font-size: 14px;
    }
  }

  .question-wrapper {
    padding: 35px 20px;
  }

  input {
    line-height: normal;
  }

  input[type="radio"] {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
  }

  input[type="radio"] {
    line-height: normal;
    margin: 4px 0 0;
    margin-top: 1px\9;
  }

  input[type="radio"]:focus {
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
  }

  .radio {
    position: relative;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  fieldset[disabled] .radio label {
    cursor: not-allowed;
  }

  .radio label {
    cursor: pointer;
    font-weight: 400;
    margin-bottom: 0;
    min-height: 20px;
    padding-left: 20px;
  }

  .radio input[type="radio"] {
    margin-left: -20px;
    margin-top: 4px\9;
  }

  .radio + .radio {
    margin-top: -5px;
  }

  .radio input[type="radio"] {
    bottom: 0;
    height: 18px;
    outline-offset: 0;
    position: absolute;
    top: 0;
    width: 20px;
  }

  .radio input[type="radio"]:focus {
    outline: 1px dashed;
  }
</style>
