<template>
  <div class="topnav">
    <div style="background-color: blue;"
      @click="toggleSideNav()">Menu</div>
    <div>EngrExpo</div>
    <div style="background-color: blue;">Settings</div>
  </div>
</template>

<style>
.topnav {
  background-color: black;
  color: white;
  width: 100%;
  text-align: center;
  font-size: 2em;
  display: grid;
  grid-template-columns: 1fr 10fr 1fr

}
</style>

<script>
export default {
  methods: {
    toggleSideNav() {
      this.$emit('toggle-side-nav');
    },
  },
};
</script>
