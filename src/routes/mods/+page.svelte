<script>
  import Carousel from "svelte-light-carousel";
  const mods = [{
    name: "Rice",
    slides: [
      {
        src: "riceMod.png",
        alt: "rice mod cover"
      },
      {
        src: "endermenFarm.png",
        alt: "rice mod"
      },
      {
        src: "ssmpBacapBase.png",
        alt: "rice mod"
      },
    ],
  },{
    name: "Rice",
    slides: [
      {
        src: "riceMod.png",
        alt: "rice mod cover"
      },
      {
        src: "endermenFarm.png",
        alt: "rice mod"
      },
      {
        src: "ssmpBacapBase.png",
        alt: "rice mod"
      },
    ],
  },{
    name: "Rice",
    slides: [
      {
        src: "riceMod.png",
        alt: "rice mod cover"
      },
      {
        src: "endermenFarm.png",
        alt: "rice mod"
      },
      {
        src: "ssmpBacapBase.png",
        alt: "rice mod"
      },
    ],
  },{
    name: "Rice",
    slides: [
      {
        src: "riceMod.png",
        alt: "rice mod cover"
      },
      {
        src: "endermenFarm.png",
        alt: "rice mod"
      },
      {
        src: "ssmpBacapBase.png",
        alt: "rice mod"
      },
    ],
  }]
</script>
<div class="p-5 mb-10 flex justify-center flex-col">
  <a class="text-3xl text-center" href="/"> <span class="hover:text-blue-900">sage's minecraft "portfolio"</span></a>
  <h1 class="text-xl text-center">mods and resource packs</h1>
</div>
<div class="flex flex-col justify-center items-center m-5">
  <div class="grid xl:grid-cols-3 grid-cols-1 gap-5 mx-10">
  {#each mods as mod}
    <div
      class="border border-sky-800 rounded-xl xl:pb-5 flex xl:flex-col md:flex-row flex-col"
    >
      <Carousel
        containerClass={"!min-h-auto !min-w-auto xl:w-full md:w-1/2"}
        slideClass={"!p-0"}
        slides={mod.slides}
      >
        {#snippet slide({ slide })}
          <img
            src={slide.src}
            alt={slide.alt}
            class="rounded-bl-none rounded-t-xl md:rounded-l-xl md:rounded-r-none xl:rounded-bl-none xl:rounded-t-xl w-max"
          />
        {/snippet}

        {#snippet next({ next, canScrollNext, a11y })}
          <button
            class={`absolute right-2 top-1/2 -translate-y-1/2 z-10 p-1.5 bg-black/50 text-white rounded-full ${
              !canScrollNext ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onclick={next}
            {...a11y}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        {/snippet}
        {#snippet prev({ prev, canScrollPrev, a11y })}
          <button
            onclick={prev}
            class={`absolute left-2 top-1/2 -translate-y-1/2 z-10 p-1.5 bg-black/50 text-white rounded-full ${
              !canScrollPrev ? "opacity-50 !cursor-not-allowed" : ""
            }`}
            {...a11y}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        {/snippet}
      </Carousel>
      <h1 class="text-2xl p-5">{mod.name}</h1>
    </div>
    {/each}
  </div>
</div>
