<template>
  <div class="cv-block">

    <div class="textBlock">
      <h2>Introduction</h2>
      <p>I decided to learn OpenCV (short for Open Computer Vision) in 2021.
        This is a software framework that allows you to use computer vision
        libraries and use it for facial detection, color detection,
        license plate detection and other projects. Here I am showcasing
        some of my more colorful projects.</p>
    </div>
    <div class="imgBlock">
      <img src="@/assets/images/face_detection2.png"
        alt="OpenCV facial detection of Lena">
    </div>

    <div class="imgBlock">
      <img src="@/assets/images/face_detection.png"
        alt="OpenCV facial detection of Krishna">
    </div>
    <div class="textBlock">
      <h2>Face Detection</h2>
      <p>I decided to learn OpenCV (short for Open Computer Vision) in 2021.</p>
    </div>
    <div class="textBlock">
      <h2>Number Plate Detection</h2>
      <p>some content.</p>
      <img src="@/assets/images/num_plate_detect_2.png"
        alt="Image of car license plate.">
    </div>
    <div class="imgBlock">
      <img src="@/assets/images/num_plate_detect_1.png"
        alt="Image of front facing car.">
    </div>
    <div>

    </div>
    <div class="textBlock">
      <h2>Color Detection</h2>
      <p>some content.</p>
    </div>
    <div class="imgBlock">
      <img src="@/assets/images/color_detect.gif"
        alt="Color detection">
    </div>
  </div>
</template>

<style scoped>
.cv-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  background-color: orange;
}

.cv-block img {
  width: 500px;
}

.textBlock {
  text-align: center;
  font-size: 1.4em;

}

.imgBlock {
  text-align: center;
}
</style>

<script>

export default {
  data() {
    return {
    };
  },
};
</script>
