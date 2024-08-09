<template>
  <div style="max-width: 1600px; width: 80vw; margin: auto; margin-top: 70px">
    <v-row>
      <v-scroll-y-reverse-transition>
        <div class="AttractionText" v-show="Transition1">오늘의 여행지</div>
      </v-scroll-y-reverse-transition>
      <v-dialog-transition>
        <v-carousel v-show="Transition2" show-arrows="hover" hide-delimiters cycle interval="3000" style="width: 100vw; height: 45vh; border-radius: 40px; margin-top: 20px; box-shadow: 0px 0px 10px #A532FF50;">
          <v-carousel-item>
            <img :src="castle" class="carousel-image" alt="Castle">
            <div class="attraction">
              오사카성
            </div>
          </v-carousel-item>
          <v-carousel-item>
            <img :src="mountain" class="carousel-image" alt="Mountain">
            <div class="attraction">
              설악산
            </div>
          </v-carousel-item>
          <v-carousel-item>
            <img :src="sea" class="carousel-image" alt="Sea">
            <div class="attraction">
              강릉 바다
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-dialog-transition>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Attractions',
  data() {
    return {
      Transition1: false,
      Transition2: false,
      castle: new URL('../../assets/homeimage/castle.jpg', import.meta.url).href,
      mountain: new URL('../../assets/homeimage/mountain.jpg', import.meta.url).href,
      sea: new URL('../../assets/homeimage/sea.jpg', import.meta.url).href,
    }
  },
  mounted() {
    setTimeout(() => {
      this.Transition1 = true;
    }, 100)
    setTimeout(() => {
      this.Transition2 = true;
    }, 200)
  }
}
</script>

<style>
.AttractionText {
  text-align: left;
  font-family: Inter-Bold, Helvetica;
  font-size: 35px;
  font-weight: 500;
  color: #A532FF;
}
.attraction {
  position: absolute !important;
  bottom: 20px !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  text-align: center !important;
  color: white !important;
  padding: 20px !important;
  font-size: 35px !important;
  font-weight: 500 !important;
}
.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-radius: 40px;
}
</style>