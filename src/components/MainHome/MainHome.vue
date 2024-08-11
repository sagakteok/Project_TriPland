<template>
  <div v-if="Width500">
    <MainHomeHeader500/>
    <Bottombar500/>
  </div>
  <div v-else-if="Width800">
    <MainHomeHeader800/>
    <Bottombar800/>
  </div>
  <div v-else>
    <MainHomeHeader1600/>
    <Attractions/>
    <Icon/>
    <Bottombar1600/>
  </div>
</template>

<script>
import MainHomeHeader500 from "../Bars/Pixel500/MainHomeHeader500.vue";
import MainHomeHeader800 from "../Bars/Pixel800/MainHomeHeader800.vue";
import MainHomeHeader1600 from "../Bars/Pixel1600/MainHomeHeader1600.vue";
import Bottombar500 from "../Bars/Pixel500/Bottombar500.vue";
import Bottombar800 from "../Bars/Pixel800/Bottombar800.vue";
import Bottombar1600 from "../Bars/Pixel1600/Bottombar1600.vue";
import Icon from "../MainHome/Icon.vue";
import Attractions from "../MainHome/Attractions.vue";

export default {
  components: {MainHomeHeader500, MainHomeHeader800, MainHomeHeader1600, Bottombar500, Bottombar800, Bottombar1600, Icon, Attractions},
  data() {
    return {
      windowWidth: window.innerWidth
    }
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    }
  },
  computed: {
    Width500() {
      return this.windowWidth < 500;
    },
    Width800() {
      return this.windowWidth < 800;
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  }
}
</script>