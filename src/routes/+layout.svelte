<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";
  import { page } from "$app/state";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>Sage's Minecraft Portfolio</title>
</svelte:head>

{#if page.url.pathname != "/"}
  <div class="pt-5 flex justify-center flex-col">
    <a class="text-3xl text-center" href="/">
      <span class="hover:text-blue-900">sage's minecraft "portfolio"</span></a
    >
  </div>
{/if}
{@render children()}
