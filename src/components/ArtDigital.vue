<template>
  <div class="artBlock">
  <h2>Digital Art</h2>
  <p>I dabble in digital art. Here is small portfolio. These pictures are used
  in my business <a href="https://hindulit.com">HinduLit, LLC</a> and therefore,
  all rights are reserved.</p>

  <div class="imgBlock">
    <figure>
    <img src="@/assets/images/Podcast2_Picture_500x500.jpg" alt="">
    <figcaption>Ganesha Negative Space</figcaption>
    </figure>
    <figure>
    <img src="@/assets/images/Podcast3_Picture_500x500.jpg" alt="">
    <figcaption>Jewel</figcaption>
    </figure>
    <figure>
    <img src="@/assets/images/Podcast8_Picture_500x500.jpg" alt="">
    <figcaption>Hanuman and the Sun</figcaption>
    </figure>
    <figure>
    <img src="@/assets/images/Podcast22_Picture_500x500.jpg" alt="">
    <figcaption>Babaji</figcaption>
    </figure>
    <figure>
    <img src="@/assets/images/Podcast23_Picture_500x500.jpg" alt="">
    <figcaption>Poseidon</figcaption>
    </figure>
    <figure>
    <img src="@/assets/images/Podcast20_Picture_500x500.jpg" alt="">
    <figcaption>Ambedkar</figcaption>
    </figure>
  </div>
  </div>
</template>

<style scoped>
.artBlock {
  width: 100%;
  text-align: center;
  background-color: green;
}
.imgBlock {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2%;
  background-color: red;
}

.imgBlock figure {
  background-color: white;
}

.imgBlock figure:hover {
  transform: scale(1.2);
  transition: all 1s ease-out;
}

.imgBlock img {
  width: 100%;
}

.imgBlock figcaption {
  font-size: 1.4em;
  font-weight: bold;
  padding-top: 2%;
  padding-bottom: 2%;
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
