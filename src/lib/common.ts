import type { Slide } from "../components/Carousel.svelte";

export const preloadSlides = (slides: Slide[]): Promise<void[]> => {
  return Promise.all(
    slides.map((slide) => {
      if (slide.src.startsWith("https://sketchfab.com")) {
        return;
      }
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = reject;
        img.src = slide.src;
      });
    }),
  );
};
