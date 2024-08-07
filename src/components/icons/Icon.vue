<template>
  <div style="max-width: 1600px; margin: auto; margin-top: 50px">
    <div class="text-center">
      <div class="icon-container">
        <div class="icon-item">
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

        <div class="icon-item">
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
        <div class="icon-item">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Icon',
  methods: {
    IconButtonStyle(isHovering){
      return{
        transition: isHovering ? 'all .1s linear 0s' : 'all 0s ease-in-out',
        color: isHovering ? '#A533FF' : '#000000',
      }
    }
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