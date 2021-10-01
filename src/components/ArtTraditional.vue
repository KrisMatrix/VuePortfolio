<template>
<div class="artBlock">
  <h2>Traditional Art</h2>
  <p>I enjoy pencil sketching, painting, and creating art in the traditional
  way. Here I showcase some of my art pieces.</p>

<!--Horizontal-->
  <div class="imgBlock">
  <figure>
    <img src="@/assets/images/tradart1_small.jpeg" alt="Traditional Art 1">
    <figcaption>Pencil Sketching Portrait</figcaption>
  </figure>
  <figure>
    <img src="@/assets/images/tradart2_small.jpeg" alt="Traditional Art 1">
    <figcaption>Ghost in the Shell Anime Art</figcaption>
  </figure>
  <figure>
    <img src="@/assets/images/tradart4_small.jpeg" alt="Traditional Art 1">
    <figcaption>Acrylic Pouring</figcaption>
  </figure>
  <figure>
    <img src="@/assets/images/tradart5_small.jpeg" alt="Traditional Art 1">
    <figcaption>Oil Painting Indian Girl</figcaption>
  </figure>
  <figure>
    <img src="@/assets/images/tradart8_small.jpeg" alt="Traditional Art 1">
    <figcaption>Sunset Landscape</figcaption>
  </figure>
  <figure>
    <img src="@/assets/images/tradart9_small.jpeg" alt="Traditional Art 1">
    <figcaption>Negative Space Girl in Village</figcaption>
  </figure>
  <!--Vertical-->
  <figure>
    <img src="@/assets/images/tradart13_small.jpeg" alt="Traditional Art 1">
    <figcaption>Snow Girl</figcaption>
  </figure>
  <figure>
    <img src="@/assets/images/tradart3_small.jpeg" alt="Traditional Art 1">
    <figcaption>Horse Acrylic with Pallete Knife</figcaption>
  </figure>
  <figure>
    <img src="@/assets/images/tradart6_small.jpeg" alt="Traditional Art 1">
    <figcaption>River Front Acrylic</figcaption>
  </figure>
  <figure>
    <img src="@/assets/images/tradart7_small.jpeg" alt="Traditional Art 1">
    <figcaption></figcaption>
  </figure>
  <figure>
    <img src="@/assets/images/tradart10_small.jpeg" alt="Traditional Art 1">
    <figcaption>Kenshin kills Tomoe</figcaption>
  </figure>
  <figure>
    <img src="@/assets/images/tradart11_small.jpeg" alt="Traditional Art 1">
    <figcaption>Comic Art</figcaption>
  </figure>

  <!--Horizontal-->
  <figure>
    <img src="@/assets/images/tradart12_small.jpeg" alt="Traditional Art 1">
    <figcaption>Negative Space Murder</figcaption>
  </figure>

  </div>
</div>

</template>

<style scoped>
.artBlock {
  text-align: center;
  width: 100%;
  background-color: orange;
}

.imgBlock {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2%;
  background-color: red;
}

.imgBlock figure {
    background-color: #222222;
}

.imgBlock img {
  width: 100%;
  border-radius: 150px;
}

.imgBlock figure:hover {
  transform: scale(1.2);
  transition: all 1s ease-out;
}

.imgBlock figcaption {
    color: #ffffff;
    font-weight: bold;
    font-size: 1.4em;
    text-align: center;
}

@media screen and (max-width: 600px) {
  .imgBlock {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2%;
  }
}
</style>

<script>
export default {

};
</script>
