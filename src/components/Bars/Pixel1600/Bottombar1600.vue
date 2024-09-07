<template>
  <v-bottom-navigation class="BottombarStyle" :elevation="0">
    <v-btn stacked prepend-icon="mdi-calendar-edit" rounded="lg">
      <text class="BottombarText" @click="gotoSchedule()">여행계획</text>
    </v-btn>
    <text class="SmallTriPlandLogoStyle" @click="gotomain()">
      <v-img :src="SmallTriPlandLogo"/>
    </text>
    <v-btn stacked prepend-icon="mdi-heart-outline" rounded="lg">
      <text class="BottombarText">위시리스트</text>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
import router from "../../../router.js";
export default {
  name: 'Bottombar1600',
  data(){
    return {
       SmallTriPlandLogo: new URL('../../../assets/SmallTriPlandLogo.png', import.meta.url).href
    }
  },
  methods: {
    gotomain() {
      router.push('/')
    },
    gotoSchedule(){
      router.push('/schedule');
    }
  }
};
</script>

<style>
.BottombarStyle {
  background: #ECD3FF90;
  color: #A532FF;
  border-top: 1px solid #A532FF;
  backdrop-filter: blur(20px);
}
.SmallTriPlandLogoStyle {
  transition: all 0.1s ease;
  width: 45px;
  display: flex;
  align-items: center;
  position: relative;
  left: 25px;
  margin-left: 83px;
  margin-right: 100px;
  cursor: pointer;
}
.SmallTriPlandLogoStyle:hover {
  transition: all 0.3s ease;
  width: 60px;
}
.BottombarText {
  color: #000000;
  font-family: Inter-Bold, Helvetica;
  font-size: 13px;
  font-weight: 700;
}
</style>