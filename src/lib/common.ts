import type { Slide } from "../components/Carousel.svelte";

export const preloadSlides = (slides: Slide[]) => {
  return Promise.all(
    slides.map((slide) => {
      if (slide.src.startsWith("https://sketchfab.com")) {
        return;
      }
      return preloadImage(slide.src);
    }),
  );
};

export const preloadImage = (src: string) => {
  return new Promise(function (resolve, reject) {
    let img = new Image();
    img.onload = resolve;
    img.onerror = reject;
    img.src = src;
  });
};

export const imageClass =
  "rounded-bl-none rounded-t-xl lm:rounded-l-xl lm:rounded-r-none xl:rounded-bl-none xl:rounded-t-xl w-full border-bottom";
export const iframeClass = imageClass + " h-full";
export const slideClass = "!p-0";
export const containerClass = "!min-h-auto !min-w-1/2 xl:w-full lm:w-1/2";
