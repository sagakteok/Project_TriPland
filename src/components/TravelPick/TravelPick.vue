<template>
  <MainHomeHeader/>
  <Bottombar/>
  <div class="text">여행지 추천</div>
</template>

<style>
.text {
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

<script>
import MainHomeHeader from "../Bars/MainHomeHeader.vue";
import Bottombar from "../Bars/Bottombar.vue";
export default {
  name: 'TravelPick',components: {MainHomeHeader, Bottombar}
};
</script>
