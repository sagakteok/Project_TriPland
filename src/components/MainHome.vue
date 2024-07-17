<template>
  <v-app>
    <Icon/>
    <div class="text">오늘의 여행지</div>
    <div class="center">
      <v-carousel show-arrows="hover" hide-delimiters style="height: 60vh; width: 50vw;">
        <v-carousel-item src="/homeimage/castle.jpg" cover>
          <div class="attraction">
            오사카성
          </div>
          <img class="carousel-image" src="/homeimage/castle.jpg" alt="Castle">
        </v-carousel-item>

        <v-carousel-item src="/homeimage/mountain.jpg" cover>
          <div class="attraction">
            설악산
          </div>
          <img class="carousel-image" src="/homeimage/mountain.jpg" alt="Mountain">
        </v-carousel-item>

        <v-carousel-item src="/homeimage/sea.jpg" cover>
          <div class="attraction">
            강릉 바다
          </div>
          <img class="carousel-image" src="/homeimage/sea.jpg" alt="Sea">
        </v-carousel-item>
      </v-carousel>
    </div>
    <Bottombar/>
  </v-app>
</template>

<style scoped>

.text{
  position: static;
  left: 18%;
  top: 13%;
  font-size: 40px;
  font-weight: bold;
  color: purple;
}

.center {
  position: static;
  left: 25%;
  top: 25%;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.attraction {
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
}
</style>

<script setup>
import Bottombar from "./Bars/Bottombar.vue";
import Icon from "./icons/Icon.vue";
</script>