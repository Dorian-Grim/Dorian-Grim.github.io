<script>
  import {auth} from "../lib/conf"
  import LoginComponent from "./LoginComponent.svelte";
  import AfterLogin from "./AfterLogin.svelte";

</script>
{#if $auth == null}
  <article>loading...</article>
{:else if $auth == 1 }
  <AfterLogin/>
{:else if $auth == 0}
  <LoginComponent/>
{/if}