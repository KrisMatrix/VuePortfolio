<template>
  <div class="block">
    <h2>About Me</h2>
    <div class="aboutMeBlock">
    <img src="@/assets/images/profile.jpeg" alt="Picture of Krishna">
    <p>Hi! I'm Krishna!</p>
    </div>
  </div>
</template>

<style scoped>
.block {
  text-align: center;
}

.aboutMeBlock {
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.aboutMeBlock img {
  border-radius: 100%;
}
</style>

<script>
export default {

};
</script>
