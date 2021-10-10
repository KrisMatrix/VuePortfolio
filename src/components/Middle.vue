<template>
  <div id="middle" class="middle">
    <pf-side-nav @gotopage="gotopage" :sideNavFlag="sideNavFlag"></pf-side-nav>
    <pf-content :showPage="showPage"></pf-content>
  </div>
</template>

<style scoped>
.middle {
  position: relative;
  display: flex;
  background-color: #6db07f;
  min-height: 100%;
}
</style>

<script>
import PfSideNav from './SideNav.vue';
import PfContent from './Content.vue';

export default {
  data() {
    return {
      showPage: 'about-me',
    };
  },
  props: ['sideNavFlag'],
  components: {
    PfContent, PfSideNav,
  },
  methods: {
    gotopage(page) {
      if (page === 'about-me') {
        this.showPage = 'about-me';
      } else if (page === 'machine-learning') {
        this.showPage = 'machine-learning';
      } else if (page === 'computer-vision') {
        this.showPage = 'computer-vision';
      } else if (page === 'power-system') {
        this.showPage = 'power-system';
      } else if (page === 'game-dev') {
        this.showPage = 'game-dev';
      } else if (page === 'art-traditional') {
        this.showPage = 'art-traditional';
      } else if (page === 'art-digital') {
        this.showPage = 'art-digital';
      } else if (page === 'music') {
        this.showPage = 'music';
      }
    },
  },
};
</script>
