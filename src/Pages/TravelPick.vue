<template>
  <div v-if="Width500">

  </div>
  <div v-else-if="Width800">

  </div>
  <div v-else>
    <PagesHeader1600/>
    <Bottombar1600/>
    <div class="TravelText">여행지 추천</div>
  </div>
</template>

<script>
import PagesHeader500 from "../components/Bars/Pixel500/PagesHeader500.vue";
import PagesHeader800 from "../components/Bars/Pixel800/PagesHeader800.vue";
import PagesHeader1600 from "../components/Bars/Pixel1600/PagesHeader1600.vue";
import Bottombar500 from "../components/Bars/Pixel500/Bottombar500.vue";
import Bottombar800 from "../components/Bars/Pixel800/Bottombar800.vue";
import Bottombar1600 from "../components/Bars/Pixel1600/Bottombar1600.vue";
export default {
  name: 'TravelPick',
  components: {PagesHeader500, PagesHeader800, PagesHeader1600, Bottombar500, Bottombar800, Bottombar1600},
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
};
</script>

<style>
.TravelText{
  text-align: left;
  font-family: Inter-Bold;
  font-size: 250%;
  font-weight: 1000;
  color: #7000FF;
  position: fixed;
  left: 6%;
  top: 12%;
}
</style>