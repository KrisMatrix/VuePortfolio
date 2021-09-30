<template>
  <div class="content">
    <about-me v-if="showPage == 'about-me'">
      About me
    </about-me>
    <machine-learning v-else-if="showPage == 'machine-learning'">
      Machine Learning
    </machine-learning>
    <computer-vision v-else-if="showPage == 'computer-vision'">
      Computer Vision
    </computer-vision>
    <power-system v-else-if="showPage == 'power-system'">
      Power System
    </power-system>
    <game-dev v-else-if="showPage == 'game-dev'">
      Game Development
    </game-dev>
    <art-traditional v-else-if="showPage == 'art-traditional'">
      Art Traditional
    </art-traditional>
    <art-digital v-else-if="showPage == 'art-digital'">
      Art Digital
    </art-digital>
    <music v-else-if="showPage == 'music'">
      Music
    </music>
  </div>
</template>

<style scoped>
.content {
  position: relative;
  background-color: yellow;
  min-height: 100%;
  width: 100%;
}
</style>

<script>
import AboutMe from './AboutMe.vue';
import MachineLearning from './MachineLearning.vue';
import ComputerVision from './ComputerVision.vue';
import PowerSystem from './PowerSystem.vue';
import GameDev from './GameDev.vue';
import ArtTraditional from './ArtTraditional.vue';
import ArtDigital from './ArtDigital.vue';
import Music from './Music.vue';

export default {
  props: ['showPage'],
  components: {
    AboutMe,
    MachineLearning,
    ComputerVision,
    PowerSystem,
    GameDev,
    ArtTraditional,
    ArtDigital,
    Music,
  },
};
</script>
