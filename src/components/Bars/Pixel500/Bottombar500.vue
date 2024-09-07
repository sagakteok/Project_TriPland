<template>
  <v-bottom-navigation class="BottombarStyle500" :elevation="0">
    <v-btn stacked prepend-icon="mdi-calendar-edit" rounded="lg">
      <text class="BottombarText500" @click="gotoSchedule()">여행계획</text>
    </v-btn>
    <text class="SmallTriPlandLogoStyle500" @click="gotomain()">
      <v-img :src="SmallTriPlandLogo"/>
    </text>
    <v-btn stacked prepend-icon="mdi-heart-outline" rounded="lg">
      <text class="BottombarText500">위시리스트</text>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
import router from "../../../router.js";
export default {
  name: 'Bottombar500',
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
.BottombarStyle500 {
  background: #ECD3FF90;
  color: #A532FF;
  border-top: 1px solid #A532FF;
  backdrop-filter: blur(20px);
}
.SmallTriPlandLogoStyle500 {
  transition: all 0.1s ease;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
  margin-right: 30px;
  cursor: pointer;
}
.SmallTriPlandLogoStyle500:hover {
  transition: all 0.3s ease;
  width: 60px;
}
.BottombarText500 {
  color: #000000;
  font-family: Inter-Bold, Helvetica;
  font-size: 10px;
  font-weight: 700;
}
</style>