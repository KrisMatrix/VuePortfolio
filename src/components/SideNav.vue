<template>
  <div class="sidenav" v-show="sideNavFlag">
    <ul>
      <li @click="gotopage('about-me')">About Me</li>
      <li @click="gotopage('machine-learning')">Machine Learning</li>
      <li @click="gotopage('computer-vision')">Computer Vision</li>
      <li @click="gotopage('power-system')">Power System</li>
      <li @click="gotopage('game-dev')">Game Development</li>
      <li @click="gotopage('art-traditional')">Art</li>
      <li @click="gotopage('art-digital')">Digital Art</li>
      <li @click="gotopage('music')">Music</li>
    </ul>
  </div>
</template>

<style scoped>
.sidenav {
  position: relative;
  background-color: pink;
  min-height: 100%;
  z-index: 1;
}
</style>

<script>
export default {
  props: ['sideNavFlag'],
  methods: {
    gotopage(page) {
      this.$emit('gotopage', page);
    },
  },
};
</script>
