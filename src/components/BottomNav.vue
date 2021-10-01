<template>
  <div class="btmnav">
    <div>
      <a href="https://github.com/KrisMatrix">GitHub Repo</a>
    </div>
    <div>
    &copy; Copyright 2021 Krishna Karnamadakala
    </div>
    <div>
      <a href="mailto:krishnaprashanth2004@yahoo.com">Contact</a>
    </div>
  </div>
</template>

<style scoped>
.btmnav {
  position: relative;
  bottom: 0;
  width: 100%;
  background-color: #333333;
  color: white;
  text-align: center;
  font-size: 1.0em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  display: grid;
  grid-template-columns: repeat(3,1fr);
}

.btmnav a:hover {
  cursor: pointer;
}

.btmnav a {
  text-decoration: none;
  color: white;
  margin-left: 5%;
  margin-right: 5%;
}

</style>

<script>
export default {

};
</script>
