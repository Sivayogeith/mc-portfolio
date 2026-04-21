<script>
  import Carousel from "../../components/Carousel.svelte";
  const builds = [
    {
      name: "SSMP Bacap Pale Oak Base",
      description:
        "This is the base I built in my Blaze and Caves server! (Traveled 25k blocks to find a Pale Oak!)",
      slides: [
        {
          src: "ssmpBacapBase.webp",
          alt: "ssmp bacap base cover",
        },
        {
          src: "ssmpBacapBase1.webp",
          alt: "ssmp bacap base image 1",
        },
        {
          src: "ssmpBacapBase2.webp",
          alt: "ssmp bacap base image 2",
        },
        {
          src: "https://sketchfab.com/models/112da0cf966d4428a641a15ad9358f04/embed",
          alt: "ssmp pale oak base 3d model",
        },
        {
          src: "ssmpBacapBase3.webp",
          alt: "ssmp bacap base image 3",
        },
        {
          src: "ssmpBacapBase4.webp",
          alt: "ssmp bacap base image 4",
        },
        {
          src: "ssmpBacapBase5.webp",
          alt: "ssmp bacap base image 5",
        },
        {
          src: "ssmpBacapBase6.webp",
          alt: "ssmp bacap base image 6",
        },
      ],
    },
    {
      name: "SSMP Main Base 1",
      description:
        "This is the first base I ever built in minecraft, in my first server and world.",
      slides: [
        {
          src: "ssmpMainBase.webp",
          alt: "ssmp main base cover",
        },
        {
          src: "ssmpMainBase1.webp",
          alt: "ssmp main base image 1",
        },
        {
          src: "ssmpMainBase6.webp",
          alt: "ssmp main base image 6",
        },
        {
          src: "https://sketchfab.com/models/fdee7b9a482b4c0eba22a134325ff072/embed",
          alt: "ssmp main base 1 3d model",
        },
        {
          src: "ssmpMainBase2.webp",
          alt: "ssmp main base image 2",
        },
        {
          src: "ssmpMainBase3.webp",
          alt: "ssmp main base image 3",
        },
        {
          src: "ssmpMainBase4.webp",
          alt: "ssmp main base image 4",
        },
        {
          src: "ssmpMainBase5.webp",
          alt: "ssmp main base image 5",
        },

        {
          src: "ssmpMainBase7.webp",
          alt: "ssmp main base image 7",
        },
      ],
    },
    {
      name: "SSMP Main Base 2",
      description:
        "This is the second base I built near the server's community trading hall!",
      slides: [
        {
          src: "ssmpMain2Base.webp",
          alt: "ssmp main base cover",
        },
        {
          src: "ssmpMain2Base1.webp",
          alt: "ssmp main base 2 image 1",
        },
        {
          src: "ssmpMain2Base7.webp",
          alt: "ssmp main base 2 image 7",
        },

        {
          src: "https://sketchfab.com/models/9c82ea595bfa4e8cb65cacf6ca6955c6/embed",
          alt: "ssmp main base 1 3d model",
        },
        {
          src: "ssmpMain2Base2.webp",
          alt: "ssmp main base 2 image 2",
        },
        {
          src: "ssmpMain2Base3.webp",
          alt: "ssmp main base 2 image 3",
        },
        {
          src: "ssmpMain2Base4.webp",
          alt: "ssmp main base 2 image 4",
        },
        {
          src: "ssmpMain2Base5.webp",
          alt: "ssmp main base 2 image 5",
        },
        {
          src: "ssmpMain2Base6.webp",
          alt: "ssmp main base 2 image 6",
        },
      ],
    },
  ];
</script>

<h1 class="mb-10 text-xl text-center">my builds and bases</h1>
<div class="flex flex-col justify-center items-center sm:m-5">
  <div class="grid xl:grid-cols-3 grid-cols-1 gap-5 sm:mx-10 mx-5">
    {#each builds as build}
      <div
        class="border border-blue-900 dark:border-emerald-500 rounded-xl xl:pb-5 flex xl:flex-col lm:flex-row flex-col"
      >
        <Carousel
          containerClass={"!min-h-auto !min-w-1/2 xl:w-full lm:w-1/2"}
          slideClass={"!p-0"}
          imageClass={"rounded-bl-none rounded-t-xl lm:rounded-l-xl lm:rounded-r-none xl:rounded-bl-none xl:rounded-t-xl w-max"}
          figureClass={"rounded-bl-none rounded-t-xl lm:rounded-l-xl lm:rounded-r-none xl:rounded-bl-none xl:rounded-t-xl h-full w-full"}
          slides={build.slides}
          withGrabCursor={false}
        />
        <div class="flex flex-col gap-4 p-5">
          <div>
            <h1
              class="text-xl text-blue-900 dark:text-emerald-500 hover:text-blue-950 dark:hover:text-emerald-600 font-bold"
            >
              {build.name}
            </h1>
            <p class="text-sm">3D Model Available</p>
          </div>
          <p class="text-lg">{build.description}</p>
        </div>
      </div>
    {/each}
  </div>
</div>
