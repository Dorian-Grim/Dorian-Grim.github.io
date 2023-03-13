<script>
  export let index = 0;
  export const type = "checkbox";
  export let image = "";
  export let question = "Ai uitat sa pui titlul intrebarii";
  export let answers = [
    {answer: "lipsa rasp 1"},
    {answer: "lipsa rasp 2"},
    {answer: "lipsa rasp 3"},
    {answer: "lipsa rasp 4"}
  ];
  /**
   * @type {never[]}
   */
  let group = [];
</script>

<div class="question-wrapper">
  <div class="question-title">
    <p class="q-index">{index}.</p>
    <p>
      {question} <span class="required" />
      <span style="color: #014446;">(5 Points)</span>
    </p>
  </div>

  <div class="answer-wrapper">
    {#each answers as answer}
      <div class="radio">
        <label>
          <input type="radio" bind:group value={answer.answer} />
          <span>{answer.answer}</span>
        </label>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  label {
    font-size: 14px;
    span {
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
    margin: auto 0 auto -20px;
    outline-offset: 0;
    position: absolute;
    top: 0;
    width: 20px;
  }

  .radio input[type="radio"]:focus {
    outline: 1px dashed;
  }
</style>
