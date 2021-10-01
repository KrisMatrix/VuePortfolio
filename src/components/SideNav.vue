<template>
  <div class="sidenav" v-show="sideNavFlag">
    <ul>
      <li @click="gotopage('about-me')">About Me</li>
<!--      <li @click="gotopage('machine-learning')">Machine Learning</li> -->
      <li @click="gotopage('computer-vision')">Computer Vision</li>
<!--      <li @click="gotopage('power-system')">Power System</li>-->
      <li @click="gotopage('game-dev')">Game Development</li>
      <li @click="gotopage('art-traditional')">Art</li>
      <li @click="gotopage('art-digital')">Digital Art</li>
<!--      <li @click="gotopage('music')">Music</li>-->
    </ul>
  </div>
</template>

<style scoped>
.sidenav {
  position: relative;
  background-color: pink;
  min-height: 100%;
  width: 100%;
  z-index: 1;
}

.sidenav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: center;
}

.sidenav li {
  font-size: 2em;
  padding-top: 10%;
  padding-bottom: 10%;
}

.sidenav li:hover {
  cursor: pointer;
  background-color: yellow;
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
