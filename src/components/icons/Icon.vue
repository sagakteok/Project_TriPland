<template>
  <v-scroll-y-transition>
    <div style="max-width: 1600px; margin: auto; margin-top: 80px">
      <div class="icon-container">
        <v-scroll-y-transition>
          <div v-show="Transition1" class="icon-item">
            <v-hover v-slot="{ isHovering, props }">
              <v-btn
                  class="ma-2"
                  :style="IconButtonStyle(isHovering)"
                  icon="mdi-map-marker"
                  v-bind="props"
              ></v-btn>
            </v-hover>
            <div class="icon-text"><b> 여행지 추천 </b></div>
          </div>
        </v-scroll-y-transition>
        <v-scroll-y-transition>
          <div v-show="Transition2" class="icon-item">
            <v-hover v-slot="{ isHovering, props }">
              <v-btn
                  class="ma-2"
                  :style="IconButtonStyle(isHovering)"
                  icon="mdi-car"
                  v-bind="props"
              ></v-btn>
            </v-hover>
            <div class="icon-text"><b> 렌트카 </b></div>
          </div>
        </v-scroll-y-transition>
        <v-scroll-y-transition>
          <div v-show="Transition3" class="icon-item">
            <v-hover v-slot="{ isHovering, props }">
              <v-btn
                  class="ma-2"
                  :style="IconButtonStyle(isHovering)"
                  icon="mdi-home-modern"
                  v-bind="props"
              ></v-btn>
            </v-hover>
            <div class="icon-text"><b> 숙소 예약 </b></div>
          </div>
        </v-scroll-y-transition>
      </div>
    </div>
  </v-scroll-y-transition>
</template>

<script>
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
    IconButtonStyle(isHovering){
      return{
        transition: isHovering ? 'all .1s linear 0s' : 'all 0s ease-in-out',
        color: isHovering ? '#A533FF' : '#000000',
      }
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

<style scoped>
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
</style>