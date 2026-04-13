<script>
  import { goto } from "$app/navigation";
  const links = [
    { name: "my builds and bases", image: "/ssmpBacapBase.png", href: "/builds"},
    { name: "my mods and packs ", image: "/riceMod.png", href: "/mods" },
    { name: "my favorite farms", image: "/endermenFarm.png", href: "/farms" },
  ];
</script>

<div class="flex flex-col justify-center items-center xl:h-screen xl:m-0 my-20">
  <h1 class="text-3xl text-center mb-20 mx-5">sage's minecraft "portfolio"</h1>
  <div class="grid xl:grid-cols-3 grid-cols-1 gap-5 mx-10">
    {#each links as link}
      <button
        class="rounded-xl border border-blue-900 hover:scale-105 xl:pb-5 flex xl:flex-col md:flex-row flex-col text-start"
        onclick={() => goto(link.href)}
      >
        <img
          src={link.image}
          alt="minecraft builds cover"
          class="rounded-bl-none rounded-t-xl md:rounded-l-xl md:rounded-r-none xl:rounded-bl-none xl:rounded-t-xl w-max md:w-1/2 xl:w-max"
        />
        <h1 class="text-2xl p-5 ws-10">{link.name}</h1>
      </button>
    {/each}
  </div>
</div>
