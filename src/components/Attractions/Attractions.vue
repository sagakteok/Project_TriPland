<template>
  <div style="max-width: 1600px; width: 60vw; margin: auto; margin-top: 70px">
    <v-row>
      <v-scroll-y-reverse-transition>
        <div class="text" v-show="Transition1">오늘의 여행지</div>
      </v-scroll-y-reverse-transition>
      <v-dialog-transition>
        <v-carousel v-show="Transition2" show-arrows="hover" hide-delimiters cycle interval="3000" style="height: 40vh; width: 100vw; border-radius: 40px; margin-top: 20px; box-shadow: 0px 0px 10px #00000050;">
          <v-carousel-item :src="castle" cover>
            <div class="attraction">
              오사카성
            </div>
          </v-carousel-item>
          <v-carousel-item :src="mountain" cover>
            <div class="attraction">
              설악산
            </div>
          </v-carousel-item>
          <v-carousel-item :src="sea" cover>
            <div class="attraction">
              강릉 바다
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-dialog-transition>
    </v-row>
  </div>
</template>

<style>
.text{
  text-align: left;
  font-family: Inter-Bold, Helvetica;
  font-size: 35px;
  font-weight: 400;
  color: #A532FF;
}
.attraction {
  position: relative;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  padding: 20px;
  font-size: 40px;
  font-weight: 500;
}
</style>

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