<script>
  import Carousel from "../../components/Carousel.svelte";

  const mods = [
    {
      name: "Rice",
      description: "This mod adds rice and rice-related items to the game!",
      link: "https://modrinth.com/mod/rice-mod",
      slides: [
        {
          src: "riceMod.webp",
          alt: "rice mod cover",
        },
      ],
    },
    {
      name: "Unstable Music",
      description:
        "This resource pack adds popular Unstable Universe music to the game!",
      link: "https://modrinth.com/resourcepack/unstable-music",
      slides: [
        {
          src: "unstableMusicPack.webp",
          alt: "unstable music pack working",
        },
      ],
    },
    {
      name: "Gobble Felix's Rats",
      description: "This mod makes cats gobble nearby rats from Felix's rats!",
      link: "https://modrinth.com/mod/gobble-felixs-rats",
      slides: [
        {
          src: "gobbleFelixRatsMod.webp",
          alt: "gobble felixs rats mod works",
        },
      ],
    },
  ];
</script>

<h1 class="mb-10 text-xl text-center">my mods and resource packs</h1>
<div class="flex flex-col justify-center items-center sm:m-5">
  <div class="grid xl:grid-cols-3 grid-cols-1 gap-5 sm:mx-10 mx-5">
    {#each mods as mod}
      <div
        class="border border-blue-900 dark:border-emerald-500 rounded-xl xl:pb-5 flex xl:flex-col lm:flex-row flex-col"
      >
        <Carousel slides={mod.slides} />
        <div class="flex flex-col gap-4 p-5">
          <a
            class="text-xl text-blue-900 dark:text-emerald-500 hover:text-blue-950 dark:hover:text-emerald-600 font-bold"
            target="_blank"
            href={mod.link}>{mod.name}</a
          >
          <p class="text-lg">{mod.description}</p>
        </div>
      </div>
    {/each}
  </div>
</div>
