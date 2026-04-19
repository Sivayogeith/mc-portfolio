<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.png";
  import ariaMath from "$lib/assets/aria_math.ogg";
  import SunIcon from "$lib/SunIcon.svelte";
  import MoonIcon from "$lib/MoonIcon.svelte";

  import { onMount } from "svelte";
  import { page } from "$app/state";
  import PausedIcon from "$lib/PausedIcon.svelte";
  import PlayingIcon from "$lib/PlayingIcon.svelte";

  let { children } = $props();
  // let bgAudio: HTMLAudioElement = $state();
  let bgAudioTime: number = $state(166);
  let bgAudioPaused: boolean = $state(true);
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

<div class="pt-5 flex flex-col sm:flex-row justify-between w-full pb-5 sm:pb-0">
  <div class="w-1/4">
    <audio bind:paused={bgAudioPaused} bind:currentTime={bgAudioTime}>
      <source src={ariaMath} type="audio/ogg" />
    </audio>
  </div>
  {#if page.url.pathname != "/"}
    <a class="md:text-3xl text-2xl text-center text-bold" href="/">
      <span class="hover:text-blue-900 dark:hover:text-emerald-500"
        >sage's minecraft "portfolio"</span
      ></a
    >
  {/if}
  <div class="w-full sm:w-1/4 flex sm:block gap-5 px-5 sm:ps-0 text-end">
    <button
      onclick={() => (bgAudioPaused = !bgAudioPaused)}
      class="dark:bg-emerald-500 bg-blue-900 dark:text-black text-white rounded-full p-2 self-end w-full sm:w-auto flex sm:inline justify-center"
    >
      {#if bgAudioPaused}
        <PausedIcon />
      {:else}
        <PlayingIcon />
      {/if}
    </button>
    <button
      onclick={() => (theme = theme == "dark" ? "light" : "dark")}
      class="dark:bg-emerald-500 bg-blue-900 dark:text-black text-white rounded-full p-2 self-end w-full sm:w-auto flex sm:inline justify-center"
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
