<template>
  <div class="text">오늘의 여행지</div>
  <div class="center">
    <v-carousel show-arrows="hover" hide-delimiters cycle interval="3000" style="height: 70vh; width: 50vw;">
      <v-carousel-item src="@/assets/homeimage/castle.jpg" cover>
        <div class="attraction">
          오사카성
        </div>
        <img class="carousel-image" src="@/assets/homeimage/castle.jpg" alt="Castle">
      </v-carousel-item>

      <v-carousel-item src="@/assets/homeimage/mountain.jpg" cover>
        <div class="attraction">
          설악산
        </div>
        <img class="carousel-image" src="@/assets/homeimage/mountain.jpg" alt="Mountain">
      </v-carousel-item>

      <v-carousel-item src="@/assets/homeimage/sea.jpg" cover>
        <div class="attraction">
          강릉 바다
        </div>
        <img class="carousel-image" src="@/assets/homeimage/sea.jpg" alt="Sea">
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<style>

.text{
  position: relative;
  right: 50%;
  top: 6%;
  font-size: 35px;
  font-weight: bold;
  color: purple;
}

.center {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2%;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.attraction {
  position: relative;
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
</script>