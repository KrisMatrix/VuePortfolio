<template>
  <div class="sidenav" v-show="sideNavFlag">
    <ul>
      <li @click="gotopage('about-me')">About Me</li>
<!--      <li @click="gotopage('machine-learning')">Machine Learning</li> -->
      <li @click="gotopage('computer-vision')">Computer Vision</li>
<!--      <li @click="gotopage('power-system')">Power System</li>-->
      <li @click="gotopage('game-dev')">Game Development</li>
      <li @click="gotopage('art-traditional')">Art</li>
      <li @click="gotopage('art-digital')">DigiArt</li>
<!--      <li @click="gotopage('music')">Music</li>-->
    </ul>
  </div>
</template>

<style scoped>
.sidenav {
  position: relative;
  background-color: #419c59;
  min-height: 100%;
  width: 35%;
  z-index: 1;
}

.sidenav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: center;
}

.sidenav li {
  font-size: 1.5em;
  padding-top: 8%;
  padding-bottom: 8%;
}

.sidenav li:hover {
  cursor: pointer;
  background-color: #90e8a7;
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
