<script>
  import 
  { 
    trimmedTrivia, 
    triviaForCourse,
    courseName,
    numberOfQuestions,
    maxNumberOfQuestions,
    failedQuestions
  } from "../lib/conf"
  import Select from "$lib/select.svelte";
  import UserUi from "$lib/userUI.svelte";
  import { generateQuiz } from "$lib/utils";
  import Timer from "$lib/timer.svelte";
  /**
   * @type {{ question: string; answers: string[]; correct_answers: string[]; }[]}
   */
  let pickedCourse = trimmedTrivia;
  let gameStarted = false;
  let showAnswers = false;
  let numberOfQ = 1;
  let useTimer = false;
  function handleStart() 
  {
    pickedCourse = generateQuiz($courseName === "random" ? trimmedTrivia : triviaForCourse($courseName), numberOfQ);
    gameStarted = true;
    localStorage.setItem("history", JSON.stringify(pickedCourse))
  }
  let loadHistory = () =>
  {
    // @ts-ignore
    pickedCourse = JSON.parse(localStorage.getItem("history"))
    gameStarted = true;
  }
  function handleSubmit() 
  {
    showAnswers = true;
  }
  let generateAnswered = false;
  /**
   * @type {{ question: string; answers: string[]; correct_answers: string[]; }[]}
   */
  let everything;
  function showEverything() 
  {
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
    <form on:submit|preventDefault={handleStart}>
      <div style="margin-bottom: 20px;">
        <p>Alege un curs anume sau random din toate:</p>
        <Select/>
      </div>
      <div>
        <p>Vrei timer?</p>
        <input type=checkbox bind:checked={useTimer} style="height: 20px;width: 20px">
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
        {#each [10, 20, 30, 40] as nQ}
          {#if $maxNumberOfQuestions >= nQ}
            <button on:click|preventDefault={() => (numberOfQ = nQ)} class="input-btn">
              select {nQ}
            </button>
          {/if}
        {/each}  
        <button on:click|preventDefault={() => (numberOfQ = $maxNumberOfQuestions)} class="input-btn">
          MAX
        </button>
      </div>
      <button type="submit" class="submit-btn">Start</button>
      <button class="resume-btn" on:click|preventDefault={loadHistory}>Reia quiz</button>
      <button class="all-btn" on:click={showEverything}>Vezi totul</button>
    </form>
  {:else}
    {#if useTimer}
      <Timer formSubmitted={showAnswers} />
    {/if}
    <form style="position: relative;" on:submit|preventDefault={handleSubmit}>
      {#each pickedCourse as question, index}
        <UserUi {...question} {index} bind:showAnswers />
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
          }}>Genereaza inca un quizz</button>
        <h4 style="position: absolute; bottom: 0; right: 0; background-color: grey; padding: 10px 20px; color: white; font-weight: 600; font-size: 20px;">
          Ai nimerit {numberOfQ - $failedQuestions} din {numberOfQ}
        </h4>
      {/if}
    </form>
  {/if}
  <style lang="scss" global>
  .input-btn {
    min-width: 50px;
    padding: 7px 20px;
    font-size: 16px;
    margin-top: 10px;
  }

  .input-btn {
    margin-left: 3px;
    border: 1px solid transparent;
    background-color: darkgray;
    font-weight: 700;
    cursor: pointer;

    &:hover {
      color: #fff;
      background-color: darkslategray;
    }
  }

  .submit-btn, .resume-btn, .all-btn
  {
    border: 1px solid transparent;
    color: #fff;
    margin: 20px 0 0 0px;
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