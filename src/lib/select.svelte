<script>
    import { courseName } from "../data/store";
    /**
     * @type {any}
     */
    let selected;

    /**
   * @type {any[]}
   */
     export let courses = [];
</script>

<select bind:value={selected} on:change={() => courseName.set(selected)}>
  {#each courses as course}
    <option value={course}>
      {course}
    </option>
  {/each}
</select>
