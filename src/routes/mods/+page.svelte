<script>
  import Carousel from "../../components/Carousel.svelte";
  const mods = [
    {
      name: "Rice",
      description: "This mod adds rice and rice-related items to the game!",
      link: "https://modrinth.com/mod/rice-mod",
      slides: [
        {
          src: "riceMod.png",
          alt: "rice mod cover",
        },
        {
          src: "endermenFarm.png",
          alt: "rice mod",
        },
        {
          src: "ssmpBacapBase.png",
          alt: "rice mod",
        },
      ],
    },
  ];
</script>

<div class="p-5 mb-10 flex justify-center flex-col">
  <a class="text-3xl text-center" href="/">
    <span class="hover:text-blue-900">sage's minecraft "portfolio"</span></a
  >
  <h1 class="text-xl text-center">mods and resource packs</h1>
</div>
<div class="flex flex-col justify-center items-center m-5">
  <div class="grid xl:grid-cols-3 grid-cols-1 gap-5 mx-10">
    {#each mods as mod}
      <div
        class="border border-blue-900 rounded-xl xl:pb-5 flex xl:flex-col md:flex-row flex-col"
      >
        <Carousel
          containerClass={"!min-h-auto !min-w-auto xl:w-full md:w-1/2"}
          slideClass={"!p-0"}
          imageClass={"rounded-bl-none rounded-t-xl md:rounded-l-xl md:rounded-r-none xl:rounded-bl-none xl:rounded-t-xl w-max"}
          slides={mod.slides}
        />
        <div class="flex flex-col gap-4 p-5">
          <a class="text-3xl text-blue-900" target="_blank" href={mod.link}>{mod.name}</a>
          <p class="text-xl">{mod.description}</p>
        </div>
      </div>
    {/each}
  </div>
</div>
