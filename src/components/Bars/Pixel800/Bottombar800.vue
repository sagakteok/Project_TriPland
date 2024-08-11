<template>
  <v-bottom-navigation class="BottombarStyle800" :elevation="0">
    <v-btn stacked prepend-icon="mdi-calendar-edit" rounded="lg">
      <text class="BottombarText800">여행계획</text>
    </v-btn>
    <text class="SmallTriPlandLogoStyle800" @click="gotomain()">
      <v-img :src="SmallTriPlandLogo"/>
    </text>
    <v-btn stacked prepend-icon="mdi-heart-outline" rounded="lg">
      <text class="BottombarText800">위시리스트</text>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
import router from "../../../router.js";
export default {
  name: 'Bottombar800',
  data(){
    return {
      SmallTriPlandLogo: new URL('../../../assets/SmallTriPlandLogo.png', import.meta.url).href
    }
  },
  methods: {
    gotomain() {
      router.push('/')
    }
  }
};
</script>

<style>
.BottombarStyle800 {
  background: #ECD3FF90;
  color: #A532FF;
  border-top: 1px solid #A532FF;
  backdrop-filter: blur(20px);
}
.SmallTriPlandLogoStyle800 {
  transition: all 0.1s ease;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 60px;
  margin-right: 60px;
  cursor: pointer;
}
.SmallTriPlandLogoStyle800:hover {
  transition: all 0.3s ease;
  width: 60px;
}
.BottombarText800 {
  color: #000000;
  font-family: Inter-Bold, Helvetica;
  font-size: 13px;
  font-weight: 700;
}
</style>