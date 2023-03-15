<script>
  import Checkbox from "$lib/checkbox.svelte";
  import Radio from "$lib/radio.svelte";
  import Select from "$lib/select.svelte";
  import {
    courseName,
    numberOfQuestions,
    maxNumberOfQuestions,
  } from "../data/store";
  import { trimmedTrivia, triviaForCourse } from "../data/trivia";
  import { generateQuiz } from "$lib/utils";
  import { userQuizSelections, validateCourse } from "../data/store";

  /**
   * @type {{ question: string; answers: string[]; correct_answers: string[]; }[]}
   */
  let pickedCourse = trimmedTrivia;
  const courses = ["random", "dezvoltare_app_mobile", "programare_procedurala"];

  let gameStarted = false;
  let showAnswers = false;
  let numberOfQ = 0;

  function handleStart() {
    if ($courseName === "random") {
      pickedCourse = generateQuiz(trimmedTrivia, numberOfQ);
      gameStarted = true;
      return;
    }
    pickedCourse = triviaForCourse($courseName);

    pickedCourse = generateQuiz(pickedCourse, numberOfQ);
    gameStarted = true;
    // alert(`answered question ${selected.id} (${selected.text}) with "${answer}"`);
  }

  /**
   * @param {any} event
   */
  function handleSubmit(event) {
    showAnswers = true;
  }
</script>

{#if !gameStarted}
  <form on:submit|preventDefault={handleStart}>
    <div>
      <p>Alege un curs anume sau random din toate:</p>

      <Select {courses} />
    </div>
    <div>
      <p>
        Alege cate intrebari vrei sa primesti, nr max pt materie {$maxNumberOfQuestions}:
      </p>
      <input
        type="number"
        bind:value={numberOfQ}
        on:change={() => numberOfQuestions.set(numberOfQ)}
        min="0"
        max={$maxNumberOfQuestions}
      />
    </div>
    <button type="submit">Start</button>
  </form>
{:else}
  <form on:submit|preventDefault={handleSubmit}>
    {#each pickedCourse as question, index}
      {#if question.correct_answers.length > 1}
        <Checkbox {...question} {index} bind:showAnswers />
      {:else}
        <Radio {...question} {index} bind:showAnswers />
      {/if}
    {/each}

    <div class="checkbox">
      <label>
        <input type="checkbox" />
        <span style="margin-left: 13px;"> Send me an email receipt of my responses</span>
      </label>
    </div>
    <button type="submit" class="submit-btn">Submit form</button>
  </form>
{/if}

<style lang="scss">
  .submit-btn {
    border: 1px solid transparent;
    color: #fff;
    margin: 20px 0 0 20px;
    background: #03787c;
    cursor: pointer;
    color: #fff;
    font-size: 15px;
    height: 40px;
    text-align: center;
    width: 180px;

    &:hover {
      background: #014446;
    }
  }
  input {
    line-height: normal;
  }

  input[type="checkbox"] {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
  }
  input[type="checkbox"] {
    line-height: normal;
    margin: 4px 0 0;
    margin-top: 1px\9;
  }
  input[type="checkbox"]:focus {
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
  }
  .checkbox {
    position: relative;
    margin: 20px 0 0 20px;
  }

  fieldset[disabled] .checkbox label {
    cursor: not-allowed;
  }

  .checkbox label {
    cursor: pointer;
    font-weight: 400;
    margin-bottom: 0;
    min-height: 20px;
    padding-left: 20px;
  }

  .checkbox input[type="checkbox"] {
    margin-left: -20px;
    margin-top: 4px\9;
  }

  .checkbox + .checkbox {
    margin-top: -5px;
  }
  .checkbox input[type="checkbox"] {
    bottom: 0;
    height: 18px;
    margin: auto 0 auto -20px;
    outline-offset: 0;
    position: absolute;
    top: 0;
    width: 20px;
  }

  .checkbox input[type="checkbox"]:focus {
    outline: 1px dashed;
  }
</style>
