<script>
  import { courseName, maxNumberOfQuestions } from "../data/store";
  import { triviaForCourse } from "../data/trivia";
  /**
   * @type {any}
   */
  let selected;

  /**
   * @type {any[]}
   */
  export let courses = [];

  function updateTriviaOnChange() {
    $courseName = selected;
    $maxNumberOfQuestions = triviaForCourse($courseName)
      ? triviaForCourse($courseName).length
      : 0;
  }
</script>

<select bind:value={selected} on:change={updateTriviaOnChange}>
  {#each courses as course}
    <option value={course}>
      {course}
    </option>
  {/each}
</select>
