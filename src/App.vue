<template>
  <pf-top-nav @toggle-side-nav="toggleSideNav()"></pf-top-nav>
  <pf-middle :sideNavFlag="sideNavFlag"></pf-middle>
  <pf-btm-nav></pf-btm-nav>
</template>

<script>

import PfTopNav from './components/TopNav.vue';
import PfBtmNav from './components/BottomNav.vue';
import PfMiddle from './components/Middle.vue';

export default {
  name: 'App',
  data() {
    return {
      sideNavFlag: 0,
    };
  },
  methods: {
    toggleSideNav() {
      if (this.sideNavFlag) {
        this.sideNavFlag = 0;
      } else {
        this.sideNavFlag = 1;
      }
    },
  },
  components: {
    PfTopNav, PfBtmNav, PfMiddle,
  },
};
</script>
