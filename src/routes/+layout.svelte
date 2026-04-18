<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.png";
  import { page } from "$app/state";
  import SunIcon from "$lib/SunIcon.svelte";
  import MoonIcon from "$lib/MoonIcon.svelte";
  import { onMount } from "svelte";

  let { children } = $props();

  let theme = $state("");

  onMount(() => {
    if (!localStorage.getItem("theme")) {
      theme = window.matchMedia("(prefers-color-scheme: dark)")
        ? "dark"
        : "light";
    } else {
      theme = localStorage.getItem("theme") || "light";
    }
  });

  $effect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>Sage's Minecraft Portfolio</title>
</svelte:head>

<div class="pt-5 flex flex-row justify-between w-full">
  <div class="w-1/4"></div>
  {#if page.url.pathname != "/"}
    <a class="md:text-3xl text-2xl text-center text-bold" href="/">
      <span class="hover:text-blue-900 dark:hover:text-emerald-500"
        >sage's minecraft "portfolio"</span
      ></a
    >
  {/if}
  <div class="w-1/4 text-end pe-5">
    <button
      onclick={() => (theme = theme == "dark" ? "light" : "dark")}
      class="dark:bg-emerald-500 bg-blue-900 dark:text-black text-white rounded-full p-2 self-end"
    >
      {#if theme == "dark"}
        <SunIcon />
      {:else}
        <MoonIcon />
      {/if}
    </button>
  </div>
</div>
{@render children()}
