<script>
  import { triviaForCourse, courseName, maxNumberOfQuestions, courses } from "./conf";
  /**
   * @type {any}
   */
  let selected;
  function updateTriviaOnChange() 
  {
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
<style>
  select 
  {
    width: 300px;
    padding: 7px 20px;
    font-size: 16px;
    margin-top: 10px;
  }
</style>
