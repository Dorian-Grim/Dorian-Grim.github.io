<script>
  import Select from "$lib/select.svelte";
  import UserUi from "$lib/userUI.svelte";
  import {
    courseName,
    numberOfQuestions,
    maxNumberOfQuestions,
    failedQuestions,
  } from "../data/store";
  import { trimmedTrivia, triviaForCourse } from "../data/trivia";
  import { generateQuiz } from "$lib/utils";
  import Timer from "$lib/timer.svelte";

  /**
   * @type {{ question: string; answers: string[]; correct_answers: string[]; }[]}
   */
  let pickedCourse = trimmedTrivia;
  const courses = [
    "random",
    "algoritmi_structuri_date",
    "baze_de_date",
    "cloud_computing",
    "comert_electronic",
    "criptografie",
    "programare_in_c",
    "programare_in_java",
    "programare_procedurala",
    "retele_de_calculatoare",
    "sgbd",
    "sisteme_de_operare",
    "tehnici_avansate_programare",
    "tehnologii_web",
  ];

  let gameStarted = false;
  let showAnswers = false;
  let numberOfQ = 1;

  function handleStart() {
    if ($courseName === "random") {
      pickedCourse = generateQuiz(trimmedTrivia, numberOfQ);
      gameStarted = true;
      return;
    }
    pickedCourse = triviaForCourse($courseName);

    pickedCourse = generateQuiz(pickedCourse, numberOfQ);
    gameStarted = true;
  }

  /**
   * @param {any} event
   */
  function handleSubmit(event) {
    showAnswers = true;
  }

  let generateAnswered = false;
  /**
   * @type {{ question: string; answers: string[]; correct_answers: string[]; }[]}
   */
  let everything;
  function showEverything() {
    pickedCourse = triviaForCourse($courseName);
    everything = generateQuiz(pickedCourse, pickedCourse.length, false);
    generateAnswered = true;
    showAnswers = true;
  }
</script>

{#if generateAnswered}
  {#each everything as question, index}
    <UserUi {...question} {index} {showAnswers} {generateAnswered} />
  {/each}
{:else if !gameStarted}
  <button style="margin-bottom: 20px;" on:click={showEverything}
    >vezi totul</button
  >
  <form on:submit|preventDefault={handleStart}>
    <div style="margin-bottom: 20px;">
      <p>Alege un curs anume sau random din toate:</p>

      <Select {courses} />
    </div>
    <div>
      <p>
        Alege cate intrebari vrei sa primesti, nr max pt materie {$maxNumberOfQuestions}:
      </p>
      <input
        style="min-width: 50px; padding: 7px 20px; font-size: 16px; margin-top: 10px;"
        type="number"
        bind:value={numberOfQ}
        on:change={() => numberOfQuestions.set(numberOfQ)}
        min="1"
        max={$maxNumberOfQuestions}
      />
      {#if $maxNumberOfQuestions >= 10}
        <button
          on:click|preventDefault={() => (numberOfQ = 10)}
          class="input-btn"
        >
          select 10</button
        >
      {/if}
      {#if $maxNumberOfQuestions >= 20}
        <button
          on:click|preventDefault={() => (numberOfQ = 20)}
          class="input-btn"
        >
          select 20</button
        >
      {/if}

      {#if $maxNumberOfQuestions >= 40}
        <button
          on:click|preventDefault={() => (numberOfQ = 40)}
          class="input-btn"
        >
          select 40</button
        >
      {/if}
      <button
        on:click|preventDefault={() => (numberOfQ = $maxNumberOfQuestions)}
        class="input-btn"
      >
        MAX
      </button>
    </div>
    <button type="submit" class="submit-btn" style="margin-left: 0"
      >Start</button
    >
  </form>
{:else}
  <Timer formSubmitted={showAnswers} />
  <form style="position: relative;" on:submit|preventDefault={handleSubmit}>
    {#each pickedCourse as question, index}
      {#if question.correct_answers.length > 1}
        <Checkbox {...question} {index} bind:showAnswers />
      {:else}
        <Radio {...question} {index} bind:showAnswers />
      {/if}
    {/each}

    {#if !showAnswers}
      <button type="submit" class="submit-btn">Submit form</button>
    {/if}

    {#if showAnswers}
      <button
        type="button"
        class="submit-btn"
        style="position: sticky; bottom: 20px;"
        on:click={() => {
          showAnswers = false;
          gameStarted = false;
          failedQuestions.update((n) => 0);
        }}>Genereaza inca un quizz</button
      >
      <h4
        style="position: absolute; bottom: 0; right: 0; background-color: grey; padding: 10px 20px; color: white; font-weight: 600; font-size: 20px;"
      >
        Ai nimerit {numberOfQ - $failedQuestions} din {numberOfQ}
      </h4>
    {/if}
  </form>
{/if}

<style lang="scss">
  .input-btn {
    min-width: 50px;
    padding: 7px 20px;
    font-size: 16px;
    margin-top: 10px;
  }

  .input-btn {
    border: 1px solid transparent;
    background-color: darkgray;
    font-weight: 700;
    cursor: pointer;

    &:hover {
      color: #fff;
      background-color: darkslategray;
    }
  }

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
