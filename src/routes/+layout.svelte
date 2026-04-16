<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";
  import { page } from "$app/state";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Saira:ital,wght@0,100..900;1,100..900&display=swap"
    rel="stylesheet"
  />

  <link rel="icon" href={favicon} />
  <title>Sage's Minecraft Portfolio</title>

  <style>
    body {
      font-family: "Mojangles", sans-serif;
      word-spacing: 10px;
    }
  </style>
</svelte:head>

{#if page.url.pathname != "/"}
  <div class="pt-5 flex justify-center flex-col">
    <a class="text-3xl text-center" href="/">
      <span class="hover:text-blue-900">sage's minecraft "portfolio"</span></a
    >
  </div>
{/if}
{@render children()}
