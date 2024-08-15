<template>
  <div v-if="Width500">
    <PagesHeader500/>
    <Bottombar500/>
    <div class="travel-container500">
        <div class="TravelText500">여행지 추천</div>
        <div class="content-box">
            <div v-if="!selectedContent" class="info500">
                <v-icon color="purple" class="icon">mdi-lightbulb-on-outline</v-icon>
                <span>여행을 원하시는 지역을 선택해주세요</span>
            </div>
            <div class="button-group500" v-if="!selectedContent">
                <v-btn class="country-btn500" color="purple" outlined @click="selectContent('domestic')">국내</v-btn>
                <v-btn class="country-btn500" color="purple" outlined @click="selectContent('international')">해외</v-btn>
            </div>
            <div v-if="selectedContent === 'domestic'">
                <div class="info500">
                    <v-icon color="purple" class="icon">mdi-lightbulb-on-outline</v-icon>
                    <span>원하시는 여행 유형을 선택해주세요</span>
                </div>
                <div class="button-group500">
                    <v-btn class="country-btn500" color="purple" outlined @click="selectContent('sea')">바다</v-btn>
                    <v-btn class="country-btn500" color="purple" outlined @click="selectContent('valley')">계곡</v-btn>
                    <v-btn class="country-btn500" color="purple" outlined @click="selectContent('camping')">캠핑</v-btn>
                    <v-btn class="country-btn500" color="purple" outlined @click="selectContent('poolvilla')">풀빌라</v-btn>
                </div>
                <v-btn v-if="selectedContent" class="back-btn500" color="grey" outlined @click="backToSelection">이전</v-btn>
            </div>
            <div v-if="selectedContent === 'international'">
                <div class="info500">
                    <v-icon color="purple" class="icon">mdi-lightbulb-on-outline</v-icon>
                    <span>여행을 원하시는 나라를 선택해주세요</span>
                </div>
                <div class="button-group500">
                    <v-btn class="country-btn500" color="purple" outlined @click="selectContent('japan')">일본</v-btn>
                    <v-btn class="country-btn500" color="purple" outlined @click="selectContent('vietnam')">베트남</v-btn>
                    <v-btn class="country-btn500" color="purple" outlined @click="selectContent('thailand')">태국</v-btn>
                    <v-btn class="country-btn500" color="purple" outlined @click="selectContent('singapore')">싱가포르</v-btn>
                </div>
                <v-btn v-if="selectedContent" class="back-btn500" color="grey" outlined @click="backToSelection">이전</v-btn>
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
            <div v-if="!selectedContent" class="info800">
                <v-icon color="purple" class="icon">mdi-lightbulb-on-outline</v-icon>
                <span>여행을 원하시는 지역을 선택해주세요</span>
            </div>
            <div class="button-group800" v-if="!selectedContent">
                <v-btn class="country-btn800" color="purple" outlined @click="selectContent('domestic')">국내</v-btn>
                <v-btn class="country-btn800" color="purple" outlined @click="selectContent('international')">해외</v-btn>
            </div>
            <div v-if="selectedContent === 'domestic'">
                <div class="info800">
                    <v-icon color="purple" class="icon">mdi-lightbulb-on-outline</v-icon>
                    <span>원하시는 여행 유형을 선택해주세요</span>
                </div>
                <div class="button-group800">
                    <v-btn class="country-btn800" color="purple" outlined @click="selectContent('sea')">바다</v-btn>
                    <v-btn class="country-btn800" color="purple" outlined @click="selectContent('valley')">계곡</v-btn>
                    <v-btn class="country-btn800" color="purple" outlined @click="selectContent('camping')">캠핑</v-btn>
                    <v-btn class="country-btn800" color="purple" outlined @click="selectContent('poolvilla')">풀빌라</v-btn>
                </div>
                <v-btn v-if="selectedContent" class="back-btn800" color="grey" outlined @click="backToSelection">이전</v-btn>
            </div>
            <div v-if="selectedContent === 'international'">
                <div class="info800">
                    <v-icon color="purple" class="icon">mdi-lightbulb-on-outline</v-icon>
                    <span>여행을 원하시는 나라를 선택해주세요</span>
                </div>
                <div class="button-group800">
                    <v-btn class="country-btn800" color="purple" outlined @click="selectContent('japan')">일본</v-btn>
                    <v-btn class="country-btn800" color="purple" outlined @click="selectContent('vietnam')">베트남</v-btn>
                    <v-btn class="country-btn800" color="purple" outlined @click="selectContent('thailand')">태국</v-btn>
                    <v-btn class="country-btn800" color="purple" outlined @click="selectContent('singapore')">싱가포르</v-btn>
                </div>
                <v-btn v-if="selectedContent" class="back-btn800" color="grey" outlined @click="backToSelection">이전</v-btn>
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
            <div v-if="!selectedContent" class="info1600">
                <v-icon color="purple" class="icon">mdi-lightbulb-on-outline</v-icon>
                <span>여행을 원하시는 지역을 선택해주세요</span>
            </div>
            <div class="button-group1600" v-if="!selectedContent">
                <v-btn class="country-btn1600" color="purple" outlined @click="selectContent('domestic')">국내</v-btn>
                <v-btn class="country-btn1600" color="purple" outlined @click="selectContent('international')">해외</v-btn>
            </div>
            <div v-if="selectedContent === 'domestic'">
                <div class="info1600">
                    <v-icon color="purple" class="icon">mdi-lightbulb-on-outline</v-icon>
                    <span>원하시는 여행 유형을 선택해주세요</span>
                </div>
                <div class="button-group1600">
                    <v-btn class="country-btn1600" color="purple" outlined @click="selectContent('sea')">바다</v-btn>
                    <v-btn class="country-btn1600" color="purple" outlined @click="selectContent('valley')">계곡</v-btn>
                    <v-btn class="country-btn1600" color="purple" outlined @click="selectContent('camping')">캠핑</v-btn>
                    <v-btn class="country-btn1600" color="purple" outlined @click="selectContent('poolvilla')">풀빌라</v-btn>
                </div>
                <v-btn v-if="selectedContent" class="back-btn1600" color="grey" outlined @click="backToSelection">이전</v-btn>
            </div>
            <div v-if="selectedContent === 'sea'">
                <div class="info1600">
                    <v-icon color="purple" class="icon">mdi-lightbulb-on-outline</v-icon>
                    <span>선택하신 유형 : 바다</span>
                </div>
                <v-btn v-if="selectedContent" class="back-btn1600" color="grey" outlined @click="backToDomestic">이전</v-btn>
            </div>
            <div v-if="selectedContent === 'valley'">
                <div class="info1600">
                    <v-icon color="purple" class="icon">mdi-lightbulb-on-outline</v-icon>
                    <span>선택하신 유형 : 계곡</span>
                </div>
                <v-btn v-if="selectedContent" class="back-btn1600" color="grey" outlined @click="backToDomestic">이전</v-btn>
            </div>
            <div v-if="selectedContent === 'camping'">
                <div class="info1600">
                    <v-icon color="purple" class="icon">mdi-lightbulb-on-outline</v-icon>
                    <span>선택하신 유형 : 캠핑</span>
                </div>
                <v-btn v-if="selectedContent" class="back-btn1600" color="grey" outlined @click="backToDomestic">이전</v-btn>
            </div>
            <div v-if="selectedContent === 'poolvilla'">
                <div class="info1600">
                    <v-icon color="purple" class="icon">mdi-lightbulb-on-outline</v-icon>
                    <span>선택하신 유형 : 풀빌라</span>
                </div>
                <v-btn v-if="selectedContent" class="back-btn1600" color="grey" outlined @click="backToDomestic">이전</v-btn>
            </div>
            <div v-if="selectedContent === 'international'">
                <div class="info1600">
                    <v-icon color="purple" class="icon">mdi-lightbulb-on-outline</v-icon>
                    <span>여행을 원하시는 나라를 선택해주세요</span>
                </div>
                <div class="button-group1600">
                    <v-btn class="country-btn1600" color="purple" outlined @click="selectContent('japan')">일본</v-btn>
                    <v-btn class="country-btn1600" color="purple" outlined @click="selectContent('vietnam')">베트남</v-btn>
                    <v-btn class="country-btn1600" color="purple" outlined @click="selectContent('thailand')">태국</v-btn>
                    <v-btn class="country-btn1600" color="purple" outlined @click="selectContent('singapore')">싱가포르</v-btn>
                </div>
                <v-btn v-if="selectedContent" class="back-btn1600" color="grey" outlined @click="backToSelection">이전</v-btn>
            </div>
            <div v-if="selectedContent === 'japan'">
                <div class="info1600">
                    <v-icon color="purple" class="icon">mdi-lightbulb-on-outline</v-icon>
                    <span>선택하신 나라 : 일본</span>
                </div>
                <v-btn v-if="selectedContent" class="back-btn1600" color="grey" outlined @click="backToInternational">이전</v-btn>
            </div>
            <div v-if="selectedContent === 'vietnam'">
                <div class="info1600">
                    <v-icon color="purple" class="icon">mdi-lightbulb-on-outline</v-icon>
                    <span>선택하신 나라 : 베트남</span>
                </div>
                <v-btn v-if="selectedContent" class="back-btn1600" color="grey" outlined @click="backToInternational">이전</v-btn>
            </div>
            <div v-if="selectedContent === 'thailand'">
                <div class="info1600">
                    <v-icon color="purple" class="icon">mdi-lightbulb-on-outline</v-icon>
                    <span>선택하신 나라 : 태국</span>
                </div>
                <v-btn v-if="selectedContent" class="back-btn1600" color="grey" outlined @click="backToInternational">이전</v-btn>
            </div>
            <div v-if="selectedContent === 'singapore'">
                <div class="info1600">
                    <v-icon color="purple" class="icon">mdi-lightbulb-on-outline</v-icon>
                    <span>선택하신 나라 : 싱가포르</span>
                </div>
                <v-btn v-if="selectedContent" class="back-btn1600" color="grey" outlined @click="backToInternational">이전</v-btn>
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
      windowWidth: window.innerWidth,
      selectedContent: null
    }
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    selectContent(contentType) {
      this.selectedContent = contentType;
    },
    backToSelection() {
      this.selectedContent = null;
    },
    backToDomestic(){
      this.selectedContent = 'domestic';
    },
    backToInternational(){
      this.selectedContent = 'international';
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
  margin-bottom: 20%;
  font-size: 120%;
  color: #333;
}
.info1600 {
  display: flex;
  align-items: center;
  margin-top: -2%;
  margin-bottom: 10%;
  font-size: 150%;
  color: #333;
}
.icon {
  margin-right: 10px;
}
.button-group500 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 16px;
}
.button-group800 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 16px;
}
.button-group1600 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 16px;
}
.country-btn500 {
  width: 48%;
  margin-bottom: 8px;
}
.country-btn800 {
  width: 48%;
  margin-bottom: 8px;
}
.country-btn1600 {
  width: 48%;
  margin-bottom: 8px;
}
.back-btn500 {
  margin-top: 16px;
  width: 100%;
}
.back-btn800 {
  margin-top: 16px;
  width: 100%;
}
.back-btn1600 {
  margin-top: 16px;
  width: 100%;
}
</style>