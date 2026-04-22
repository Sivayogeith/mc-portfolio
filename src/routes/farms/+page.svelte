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
          src: "endermenFarm.webp",
          alt: "endermen farm cover",
        },
        {
          src: "endermenFarm1.webp",
          alt: "endermen farm image 1",
        },
        {
          src: "endermenFarm2.webp",
          alt: "endermen farm image 2",
        },
        {
          src: "endermenFarm3.webp",
          alt: "endermen farm image 3",
        },
        {
          src: "endermenFarm4.webp",
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
          src: "ironFarm.webp",
          alt: "iron farm cover",
        },
        {
          src: "ironFarm1.webp",
          alt: "iron farm image 1",
        },
        {
          src: "ironFarm2.webp",
          alt: "iron farm image 2",
        },
        {
          src: "ironFarm3.webp",
          alt: "iron farm image 3",
        },
        {
          src: "ironFarm4.webp",
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
          src: "villagerFarm.webp",
          alt: "villager farm cover",
        },
        {
          src: "villagerFarm1.webp",
          alt: "villager farm image 1",
        },
        {
          src: "villagerFarm2.webp",
          alt: "villager farm image 2",
        },
        {
          src: "villagerFarm3.webp",
          alt: "villager farm image 3",
        },
        {
          src: "villagerFarm4.webp",
          alt: "villager farm image 4",
        },
      ],
    },
  ];
</script>

<h1 class="mb-10 text-xl text-center">all my favorite farms</h1>
<div class="flex flex-col justify-center items-center sm:m-5">
  <div class="grid xl:grid-cols-3 grid-cols-1 gap-5 sm:mx-10 mx-5">
    {#each farms as farm}
      <div
        class="card"
      >
        <Carousel slides={farm.slides} />
        <div class="flex flex-col gap-4 p-5">
          <a class="card-header" href={farm.link}>
            {farm.name}
          </a>
          <p class="text-lg">{farm.description}</p>
        </div>
      </div>
    {/each}
  </div>
</div>
