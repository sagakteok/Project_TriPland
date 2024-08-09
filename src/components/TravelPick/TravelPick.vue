<template>
  <MainHomeHeader/>
  <Bottombar/>
  <div>
    <h1>여행지 추천</h1>
  </div>
</template>

<script>
import MainHomeHeader from "../Bars/MainHomeHeader.vue";
import Bottombar from "../Bars/Bottombar.vue";
export default {
  name: 'TravelPick',components: {MainHomeHeader, Bottombar}
};
</script>
