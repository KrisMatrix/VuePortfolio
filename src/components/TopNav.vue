<template>
  <div class="topnav">
    <div style="background-color: #419c59; cursor: pointer;"
      @click="toggleSideNav()">Menu</div>
    <div>EngrExpo (Work In Progress)</div>
    <!--
    <div style="background-color: #419c59; cursor: pointer;">Settings</div>
    -->
  </div>
</template>

<style>
.topnav {
  background-color: #333333;
  color: white;
  width: 100%;
  text-align: center;
  font-size: 1.5em;
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
