<script>
  import { trimmedTrivia } from "../../data/trivia";
  import Radio from "$lib/radio.svelte";
  import Checkbox from "$lib/checkbox.svelte";
  import { generateQuiz } from "$lib/utils";

  let showAnswers = true;
  let generateAnswered = true;

  const everything = generateQuiz(trimmedTrivia, trimmedTrivia.length)
</script>

{#each everything as question, index}
  {#if question.correct_answers.length > 1}
    <Checkbox {...question} {index} {showAnswers} {generateAnswered} />
  {:else}
    <Radio {...question} {index} {showAnswers} {generateAnswered} />
  {/if}
{/each}
