<script lang="ts">
  import { goto } from "$app/navigation";
  import { preloadImage } from "$lib/common";
  import { Content, Modal, Trigger } from "sv-popup";
  import { useMediaQuery } from "svelte-breakpoints";
  import type { Readable } from "svelte/store";
  import { fade } from "svelte/transition";

  const isDesktop: Readable<boolean> = useMediaQuery("(width >= 80rem)");
  const links = [
    {
      name: "my builds and bases",
      image: "ssmpBacapBase.webp",
      href: "/builds",
      alt: "my builds and bases cover",
      description: "bases and builds that I made in minecraft!",
    },
    {
      name: "my mods and packs",
      image: "riceMod.webp",
      href: "/mods",
      alt: "my mods and packs cover",
      description: "mods and resource packs that I coded!",
    },
    {
      name: "my favorite farms",
      image: "endermenFarm.webp",
      href: "/farms",
      alt: "my favorite farms cover",
      description: "list of my favorite farms!",
    },
  ];
</script>

<div class="flex flex-col justify-center items-center xl:h-[87vh] xl:m-0 my-20">
  <h1 class="text-3xl text-center mb-20 sm:mx-5">
    sage's
    {#if $isDesktop}
      <Modal button={true}>
        <Content>
          <iframe
            src="https://classic.minecraft.net/"
            title="minecraft"
            frameborder="0"
            class="h-full w-full border border-black/50 dark:border-white/50 rounded-2xl"
          ></iframe>
        </Content>
        <Trigger>minecraft</Trigger>
      </Modal>
    {:else}
      minecraft
    {/if}
    "portfolio"
  </h1>
  <div class="grid xl:grid-cols-3 grid-cols-1 gap-5 sm:mx-10 mx-5">
    {#each links as link}
      <button
        class="rounded-xl border border-blue-900 dark:border-emerald-500 hover:scale-105 xl:pb-5 flex xl:flex-col md:flex-row flex-col text-start"
        onclick={() => goto(link.href)}
      >
        {#await preloadImage(link.image)}
          <div
            class="flex justify-center items-center w-full h-82 border-bottom"
          >
            <p class="text-2xl">Loading...</p>
          </div>
        {:then}
          <img
            src={link.image}
            alt={link.alt}
            class="rounded-bl-none rounded-t-xl md:rounded-l-xl md:rounded-r-none xl:rounded-bl-none xl:rounded-t-xl w-max md:w-1/2 xl:w-max border-bottom"
            in:fade
          />
        {/await}
        <div class="flex flex-col gap-3 px-5 py-3 ws-10">
          <h1 class="text-2xl ws-10 text-bold">{link.name}</h1>
          <p class="text-lg">{link.description}</p>
        </div>
      </button>
    {/each}
  </div>
</div>
