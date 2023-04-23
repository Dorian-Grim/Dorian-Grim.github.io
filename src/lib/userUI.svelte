<script>
// @ts-nocheck
  import { userQuizSelections, failedQuestions} from "./conf";

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
  let type = correct_answers.length == 1 ? "radio" : "checkbox"
/**
   * @type {string[]}
   */
  let userSelectedAnswers = [];

  /**
   * @type {("wrong"|"correct"|"")[]}
   */
  let errors = [];
  /**
   * @type {[]}
   */
  let checked = [];

  $userQuizSelections[index] = { userSelectedAnswers };
  if (generateAnswered) 
  {
    answers.forEach((val, index) => 
    {
      if (correct_answers.includes(val)) {
        userSelectedAnswers.push(val);
        errors[index] = "correct";
      }
    });
    errors = [...errors];
  }
  let checker = false;
  let showThisAnswer = false;
  /**
   * @type {string[]}
   */
  
  $: if (showAnswers || showThisAnswer) 
  {
    $userQuizSelections[index] = { userSelectedAnswers };
    
    // let e = localStorage.getItem("errors")
    // if (e) errors = JSON.parse(e)
    // else
    // {
      answers.forEach((val, index) => 
      {
        const userSelected = userSelectedAnswers.includes(val);
        const answerIsCorrect = correct_answers.includes(val);
        checked.push(userSelected ? "checked" : "");
        if ((answerIsCorrect && !userSelected) || (!answerIsCorrect && userSelected)) checker = true;

        if (answerIsCorrect) errors[index] = "correct";
        if (userSelected && !answerIsCorrect) errors[index] = "wrong";
      });
      errors = [...errors];
      let sERRORS = localStorage.getItem(`errors${index}`)
      let sCHECKED = localStorage.getItem(`checked${index}`)
      if (!generateAnswered && !sERRORS) localStorage.setItem(`errors${index}`, JSON.stringify(errors))
      if (!generateAnswered && !sCHECKED) localStorage.setItem(`checked${index}`, JSON.stringify(checked))
      if(checker) failedQuestions.update(n => n + 1);
    // }
  }
  // https://stackoverflow.com/questions/57392773/error-type-attribute-cannot-be-dynamic-if-input-uses-two-way-binding
  const handleInput = e => 
  {
    // // in here, you can switch on type and implement
    // // whatever behaviour you need
    userSelectedAnswers.push(e.target.defaultValue)
  };
</script>

<div class="question-wrapper">
  <div class="question-title">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <p class="q-index" on:click|preventDefault={() => 
    {
      localStorage.setItem("userSelections", JSON.stringify($userQuizSelections));
      showThisAnswer = true
    }}>{index + 1}.</p>
    <pre>{@html compiledQuestion}</pre>
  </div>

  <div class="answer-wrapper">
    {#each answers as answer, i}
      <div class="{type} {localStorage.getItem(`errors${index}`) ? JSON.parse(localStorage.getItem(`errors${index}`))[i] : errors[i]}">
        <label>
          <input
            type={type}
            on:input={handleInput}
            name="answers{index}"
            value={answer}
            disabled={showAnswers || showThisAnswer}
            checked={localStorage.getItem(`checked${index}`) ? JSON.parse(localStorage.getItem(`checked${index}`))[i] : ""}
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
