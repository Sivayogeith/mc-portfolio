<script lang="ts">
  import ArrowLeftIcon from "$lib/ArrowLeftIcon.svelte";
  import ArrowRightIcon from "$lib/ArrowRightIcon.svelte";
  import { containerClass, iframeClass, imageClass, preloadSlides, slideClass } from "$lib/common";
  import Carousel from "svelte-light-carousel";
  import type { ResponsiveProperty } from "svelte-light-carousel/types";
  import { fade } from "svelte/transition";

  export interface Slide {
    src: string;
    alt: string;
  }

  interface Props {
    class?: string;
    id?: string;
    slides?: Slide[];
    withGrabCursor?: boolean;
    key?: keyof Slide | undefined;
    axis?: ResponsiveProperty<"x" | "y">;
    dragFree?: boolean;
    disableNativeScroll?: ResponsiveProperty<boolean>;
    oneAtTime?: boolean;
    autoHeight?: boolean;
    autoPlay?: number;
    pauseOnHover?: boolean;
    layout?: ResponsiveProperty;
    gaps?: ResponsiveProperty;
    partialDelta?: ResponsiveProperty;
    containerClass?: string;
    slideClass?: string;
    imageClass?: string;
    iframeClass?: string;
  }

  let props: Props = $props();

  const onlyOneSlide: boolean = props.slides!.length < 2;
</script>

{#await preloadSlides(props.slides!)}
  <div class="flex justify-center items-center w-full h-82 border-bottom">
    <p class="text-2xl">Loading...</p>
  </div>
{:then}
    <Carousel containerClass={props.containerClass || containerClass} slideClass={props.slideClass || slideClass} withGrabCursor={props.withGrabCursor || false} {...props}>
      {#snippet slide({ slide })}
        {#if slide.src.startsWith("https://sketchfab.com")}
          <iframe
            title={slide.alt}
            frameborder="0"
            allowfullscreen
            allow="autoplay; fullscreen; xr-spatial-tracking"
            src={slide.src}
            class={props.iframeClass || iframeClass}
          >
          </iframe>
        {:else}
          <enhanced:img
            src={slide.src}
            alt={slide.alt}
            class={props.imageClass || imageClass}
            in:fade|global
          />
        {/if}
      {/snippet}

      {#snippet next({ next, canScrollNext, a11y })}
        <button
          class={`absolute right-2 top-1/2 -translate-y-1/2 z-10 p-1.5 bg-blue-950/50 text-white dark:bg-emerald-200/50 dark:text-black rounded-full ${onlyOneSlide ? "hidden" : ""} ${
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
          class={`absolute left-2 top-1/2 -translate-y-1/2 z-10 p-1.5 bg-blue-950/50 text-white dark:bg-emerald-200/50 dark:text-black rounded-full ${onlyOneSlide ? "hidden" : ""} ${
            !canScrollPrev ? "opacity-50 cursor-not-allowed" : ""
          }`}
          {...a11y}
        >
          <ArrowLeftIcon />
        </button>
      {/snippet}
    </Carousel>
{/await}
