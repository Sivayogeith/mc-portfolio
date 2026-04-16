<script>
  import Carousel from "../../components/Carousel.svelte";
  const builds = [
    {
      name: "SSMP Bacap Pale Oak Base",
      description:
        "This is the base I built in my Blaze and Caves server! (Traveled 25k blocks to find a Pale Oak!)",
      slides: [
        {
          src: "ssmpBacapBase.png",
          alt: "ssmp bacap base cover",
        },
        {
          src: "ssmpBacapBase1.png",
          alt: "ssmp bacap base image 1",
        },
        {
          src: "ssmpBacapBase2.png",
          alt: "ssmp bacap base image 2",
        },
        {
          src: "ssmpBacapBase3.png",
          alt: "ssmp bacap base image 3",
        },
        {
          src: "ssmpBacapBase4.png",
          alt: "ssmp bacap base image 4",
        },
        {
          src: "ssmpBacapBase5.png",
          alt: "ssmp bacap base image 5",
        },
        {
          src: "ssmpBacapBase6.png",
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
          src: "ssmpMainBase.png",
          alt: "ssmp main base cover",
        },
        {
          src: "ssmpMainBase1.png",
          alt: "ssmp main base image 1",
        },
        {
          src: "ssmpMainBase2.png",
          alt: "ssmp main base image 2",
        },
        {
          src: "ssmpMainBase3.png",
          alt: "ssmp main base image 3",
        },
        {
          src: "ssmpMainBase4.png",
          alt: "ssmp main base image 4",
        },
        {
          src: "ssmpMainBase5.png",
          alt: "ssmp main base image 5",
        },
        {
          src: "ssmpMainBase6.png",
          alt: "ssmp main base image 6",
        },
        {
          src: "ssmpMainBase7.png",
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
          src: "ssmpMain2Base.png",
          alt: "ssmp main base cover",
        },
        {
          src: "ssmpMain2Base1.png",
          alt: "ssmp main base 2 image 1",
        },
        {
          src: "ssmpMain2Base2.png",
          alt: "ssmp main base 2 image 2",
        },
        {
          src: "ssmpMain2Base3.png",
          alt: "ssmp main base 2 image 3",
        },
        {
          src: "ssmpMain2Base4.png",
          alt: "ssmp main base 2 image 4",
        },
        {
          src: "ssmpMain2Base5.png",
          alt: "ssmp main base 2 image 5",
        },
        {
          src: "ssmpMain2Base6.png",
          alt: "ssmp main base 2 image 6",
        },
        {
          src: "ssmpMain2Base7.png",
          alt: "ssmp main base 2 image 7",
        },
      ],
    },
  ];
</script>

<h1 class="mb-10 text-xl text-center">my builds and bases</h1>
<div class="flex flex-col justify-center items-center m-5">
  <div class="grid xl:grid-cols-3 grid-cols-1 gap-5 mx-10">
    {#each builds as build}
      <div
        class="border border-blue-900 rounded-xl xl:pb-5 flex xl:flex-col lm:flex-row flex-col"
      >
        <Carousel
          containerClass={"!min-h-1/2 !min-w-1/2 xl:w-full lm:w-1/2"}
          slideClass={"!p-0"}
          imageClass={"rounded-bl-none rounded-t-xl lm:rounded-l-xl lm:rounded-r-none xl:rounded-bl-none xl:rounded-t-xl w-max"}
          slides={build.slides}
          withGrabCursor={false}
        />
        <div class="flex flex-col gap-4 p-5">
          <h1 class="text-xl text-blue-900 hover:text-blue-950 font-bold">
            {build.name}
          </h1>
          <p class="text-lg">{build.description}</p>
        </div>
      </div>
    {/each}
  </div>
</div>
