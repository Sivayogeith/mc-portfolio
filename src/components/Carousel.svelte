<script lang="ts">
  import ArrowLeftIcon from "$lib/ArrowLeftIcon.svelte";
  import ArrowRightIcon from "$lib/ArrowRightIcon.svelte";
  import Carousel from "svelte-light-carousel";
  let {
    slides,
    imageClass,
    containerClass,
    slideClass,
  }: {
    slides: { src: string; alt: string }[];
    imageClass: string;
    containerClass: string;
    slideClass: string;
  } = $props();
</script>

<Carousel {containerClass} {slideClass} {slides}>
  {#snippet slide({ slide })}
    <img src={slide.src} alt={slide.alt} class={imageClass} />
  {/snippet}

  {#snippet next({ next, canScrollNext, a11y })}
    <button
      class={`absolute right-2 top-1/2 -translate-y-1/2 z-10 p-1.5 bg-black/50 text-white rounded-full ${
        !canScrollNext ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onclick={next}
      {...a11y}
    >
      <ArrowRightIcon />
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
      <ArrowLeftIcon />
    </button>
  {/snippet}
</Carousel>
