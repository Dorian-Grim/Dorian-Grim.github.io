<script>
  import Checkbox from "$lib/checkbox.svelte";
  import Radio from "$lib/radio.svelte";
  import Select from "$lib/select.svelte";
  import {
    courseName,
    numberOfQuestions,
    maxNumberOfQuestions,
  } from "../data/store";

  import { trivia, trimmedTrivia } from "../data/trivia";

  const courses = ["random", "dezvoltare_app_mobile", "materie2"];

  let gameStarted = false;

  function handleSubmit() {
    gameStarted = true;
    // alert(`answered question ${selected.id} (${selected.text}) with "${answer}"`);
  }

  $: showAnswers = false;

  let numberOfQ = 1;
  $: {
    console.log("courseName : ", $courseName);
    console.log("numberOfQuestions : ", $numberOfQuestions);
  }
</script>

{#if !gameStarted}
  <form on:submit|preventDefault={handleSubmit}>
    <div>
      <p>Alege un curs anume sau random din toate:</p>

      <Select {courses} />
    </div>
    <div>
      <p>
        Alege cate intrebari vrei sa primesti, default 1 din nr max {$maxNumberOfQuestions}:
      </p>
      <input
        type="number"
        bind:value={numberOfQ}
        on:change={() => numberOfQuestions.set(numberOfQ)}
        min="0"
        max="10"
      />
    </div>
    <button type="submit">Start</button>
  </form>
{:else}
  {#each trimmedTrivia as question, index}
    {#if question.type === "checkbox"}
      <Checkbox {...question} index={index+1} />
    {:else}
      <Radio {...question} index={index+1} />
    {/if}
  {/each}
{/if}

<!-- <p>{trimmedTrivia[0].question}</p> -->
