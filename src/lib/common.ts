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
