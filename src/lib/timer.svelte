<script>
  import { onMount } from "svelte";

  /**
   * @type {any}
   */
  let timer = null;
  let countdown = 60 * 60;
  let gameOver = false;
  export let formSubmitted = false;

  onMount(() => {
    timer = setInterval(() => {
      countdown -= 1;
    }, 1000);
  });
  $: {
    if (countdown === 0 || formSubmitted) {
      clearInterval(timer);
      timer = null;
      if(!formSubmitted) gameOver = true;
    }
  }
</script>

{#if gameOver}<div class="game-over-wrapper">
    Nu mai poti da submit, a expirat timpul! 🙃
  </div>{/if}
<div
  class="timer-wrapper"
  style={formSubmitted ? "display: none" : ""}
>
  {Math.floor(countdown / 60)}:{(countdown % 60).toString().padStart(2, "0")}
</div>

<style lang="scss">
  .game-over-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ff4237;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    color: white;
    font-size: 24px;
    font-weight: 600;
    padding: 20px;
    text-align: center;
  }
  .timer-wrapper {
    position: sticky;
    z-index: 1;
    top: 20px;
    margin-left: auto;
    text-align: right;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: green;
    color: white;
    opacity: 0.5;
    font-weight: 600;
  }
</style>
