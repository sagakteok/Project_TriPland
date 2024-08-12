<template>
  <div v-if="Width500">
    <PagesHeader500/>
    <Bottombar500/>
    <div class="travel-container500">
        <div class="TravelText500">여행지 추천</div>
        <div class="content-box">
            <div class="info500">
                <v-icon color="purple" class="icon">mdi-lightbulb-on-outline</v-icon>
                <span>여행을 원하시는 지역을 선택해주세요</span>
            </div>
            <div class="button-group">
                <v-btn class="country-btn" color="purple" outlined>국내</v-btn>
                <v-btn class="country-btn" color="purple" outlined>해외</v-btn>
            </div>
        </div>
    </div>
  </div>
  <div v-else-if="Width800">
    <PagesHeader800/>
    <Bottombar800/>
    <div class="travel-container">
    <div class="TravelText800">여행지 추천</div>
    <div class="content-box">
            <div class="info800">
              <v-icon color="purple" class="icon">mdi-lightbulb-on-outline</v-icon>
              <span>여행을 원하시는 지역을 선택해주세요</span>
            </div>
            <div class="button-group">
              <v-btn class="country-btn" color="purple" outlined>국내</v-btn>
              <v-btn class="country-btn" color="purple" outlined>해외</v-btn>
            </div>
          </div>
    </div>
  </div>
  <div v-else>
    <PagesHeader1600/>
    <Bottombar1600/>
    <div class="travel-container">
        <div class="TravelText1600">여행지 추천</div>
        <div class="content-box">
            <div class="info1600">
              <v-icon color="purple" class="icon">mdi-lightbulb-on-outline</v-icon>
              <span>여행을 원하시는 지역을 선택해주세요</span>
            </div>
            <div class="button-group">
              <v-btn class="country-btn" color="purple" outlined>국내</v-btn>
              <v-btn class="country-btn" color="purple" outlined>해외</v-btn>
            </div>
        </div>
    </div>
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
.TravelText500{
  text-align: left;
  font-family: Inter-Bold;
  font-size: 180%;
  font-weight: 1000;
  color: #7000FF;
  position: fixed;
  left: 6%;
  top: 12%;
}
.TravelText800{
  text-align: left;
  font-family: Inter-Bold;
  font-size: 220%;
  font-weight: 1000;
  color: #7000FF;
  position: fixed;
  left: 6%;
  top: 12%;
}
.TravelText1600{
  text-align: left;
  font-family: Inter-Bold;
  font-size: 250%;
  font-weight: 1000;
  color: #7000FF;
  position: fixed;
  left: 6%;
  top: 12%;
}
.travel-container {
  max-width: 300px;
  margin: 0 auto;
  text-align: center;
}
.content-box {
  background-color: #f4f4f4;
  padding: 5%;
  border-radius: 12px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 50%;
}
.info500 {
  display: flex;
  align-items: center;
  margin-top: -2%;
  margin-bottom: 30%;
  font-size: 110%;
  color: #333;
}
.info800 {
  display: flex;
  align-items: center;
  margin-top: -2%;
  margin-bottom: 16%;
  font-size: 120%;
  color: #333;
}
.info1600 {
  display: flex;
  align-items: center;
  margin-top: -2%;
  margin-bottom: 14%;
  font-size: 150%;
  color: #333;
}
.icon {
  margin-right: 10px;
}
.button-group {
  display: flex;
  justify-content: space-around;
  margin-bottom: 16px;
}
.country-btn {
  width: 20%;
}
</style>