<script lang="ts">
  import ArrowLeftIcon from "$lib/ArrowLeftIcon.svelte";
  import ArrowRightIcon from "$lib/ArrowRightIcon.svelte";
  import Carousel from "svelte-light-carousel";
  import type { ResponsiveProperty } from "svelte-light-carousel/types";

  interface Slide {
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
  }

  let props: Props = $props()

  const onlyOneSlide: boolean = (props.slides !).length < 2;
</script>

<Carousel {...props}>
  {#snippet slide({ slide })}
    <img src={slide.src} alt={slide.alt} class={props.imageClass} />
  {/snippet}

  {#snippet next({ next, canScrollNext, a11y })}
    <button
      class={`absolute right-2 top-1/2 -translate-y-1/2 z-10 p-1.5 bg-black/50 text-white rounded-full ${onlyOneSlide ? "hidden" : ""} ${
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
      class={`absolute left-2 top-1/2 -translate-y-1/2 z-10 p-1.5 bg-black/50 text-white rounded-full ${onlyOneSlide ? "hidden" : ""} ${
        !canScrollPrev ? "opacity-50 cursor-not-allowed" : ""
      }`}
      {...a11y}
    >
      <ArrowLeftIcon />
    </button>
  {/snippet}
</Carousel>
