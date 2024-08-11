<template>
  <v-scroll-y-transition>
    <div style="max-width: 1600px; margin: auto; margin-top: 60px">
      <div class="icon-container">
        <v-scroll-y-transition>
          <div v-show="Transition1" class="icon-item">
            <v-btn
                class="ma-2 icon-button"
                icon="mdi-map-marker"
                @click="gotoTravelPick()"
            ></v-btn>
            <div class="icon-text"><b> 여행지 추천 </b></div>
          </div>
        </v-scroll-y-transition>
        <v-scroll-y-transition>
          <div v-show="Transition2" class="icon-item">
            <v-btn
                class="ma-2 icon-button"
                icon="mdi-car"
            ></v-btn>
            <div class="icon-text"><b> 렌트카 </b></div>
          </div>
        </v-scroll-y-transition>
        <v-scroll-y-transition>
          <div v-show="Transition3" class="icon-item">
            <v-btn
                class="ma-2 icon-button"
                icon="mdi-home-modern"
            ></v-btn>
            <div class="icon-text"><b> 숙소 예약 </b></div>
          </div>
        </v-scroll-y-transition>
      </div>
    </div>
  </v-scroll-y-transition>
</template>

<script>
import router from "../../router.js"
export default {
  name: 'Icon',
  data() {
    return {
      Transition1: false,
      Transition2: false,
      Transition3: false
    }
  },
  methods: {
    gotoTravelPick() {
      router.push('/travel-pick')
    }
  },
  mounted() {
    setTimeout(() => {
      this.Transition1 = true;
    }, 400)
    setTimeout(() => {
      this.Transition2 = true;
    }, 430)
    setTimeout(() => {
      this.Transition3 = true;
    }, 460)
  }
}
</script>

<style>
.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10%;
}

.icon-text {
  margin-top: 10%;
  font-size: 100%;
  color: #6A0DAD;
  text-align: center;
}

.icon-button {
  color: #000000;
}

.icon-button:hover {
  transition: all 0.1s ease;
  color: #A533FF;
}
</style>
