<script>
  import Carousel from "../../components/Carousel.svelte";
  const farms = [
    {
      name: "BigBooty17's Endermen Farm",
      description:
        "This is my favorite endermen farm made by bigbooty17. The images are of the farm I built in SSMP Bacap!",
      link: "https://www.youtube.com/watch?v=jn8C8uY3fHM",
      slides: [
        {
          src: "endermenFarm.png",
          alt: "endermen farm cover",
        },
        {
          src: "endermenFarm1.png",
          alt: "endermen farm image 1",
        },
        {
          src: "endermenFarm2.png",
          alt: "endermen farm image 2",
        },
        {
          src: "endermenFarm3.png",
          alt: "endermen farm image 3",
        },
        {
          src: "endermenFarm4.png",
          alt: "endermen farm image 4",
        },
      ],
    },
    {
      name: "BigBooty17's Iron Farm",
      description:
        "This is favorite iron farm made by bigbooty17. The images are of the farm I built in SSMP Bacap!",
      link: "https://www.youtube.com/watch?v=icbCWOybI80",
      slides: [
        {
          src: "ironFarm.png",
          alt: "iron farm cover",
        },
        {
          src: "ironFarm1.png",
          alt: "iron farm image 1",
        },
        {
          src: "ironFarm2.png",
          alt: "iron farm image 2",
        },
        {
          src: "ironFarm3.png",
          alt: "iron farm image 3",
        },
        {
          src: "ironFarm4.png",
          alt: "iron farm image 4",
        },
      ],
    },
    {
      name: "Ray Works' Villager Breeder",
      description:
        "This is favorite villager breeder made by Ray Works. The images are of the breeder I built in SSMP Bacap!",
      link: "https://www.youtube.com/watch?v=icbCWOybI80",
      slides: [
        {
          src: "villagerFarm.png",
          alt: "villager farm cover",
        },
        {
          src: "villagerFarm1.png",
          alt: "villager farm image 1",
        },
        {
          src: "villagerFarm2.png",
          alt: "villager farm image 2",
        },
        {
          src: "villagerFarm3.png",
          alt: "villager farm image 3",
        },
        {
          src: "villagerFarm4.png",
          alt: "villager farm image 4",
        },
      ],
    },
];
</script>

<h1 class="mb-10 text-xl text-center">all my favorite farms</h1>
<div class="flex flex-col justify-center items-center m-5">
  <div class="grid xl:grid-cols-3 grid-cols-1 gap-5 mx-10">
    {#each farms as farm}
      <div
        class="border border-blue-900 rounded-xl xl:pb-5 flex xl:flex-col lm:flex-row flex-col"
      >
        <Carousel
          containerClass={"!min-h-1/2 !min-w-1/2 xl:w-full lm:w-1/2"}
          slideClass={"!p-0"}
          imageClass={"rounded-bl-none rounded-t-xl lm:rounded-l-xl lm:rounded-r-none xl:rounded-bl-none xl:rounded-t-xl w-max"}
          slides={farm.slides}
          withGrabCursor={false}
        />
        <div class="flex flex-col gap-4 p-5">
          <a
            class="text-xl text-blue-900 hover:text-blue-950 font-bold"
            href={farm.link}
          >
            {farm.name}
          </a>
          <p class="text-lg">{farm.description}</p>
        </div>
      </div>
    {/each}
  </div>
</div>
