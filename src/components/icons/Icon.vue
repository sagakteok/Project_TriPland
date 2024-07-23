<template>
  <div class="text-center">
    <div class="icon-container">
      <div class="icon-item">
        <v-btn
            class="ma-2"

            icon="mdi-map-marker"
        ></v-btn>
        <div class="icon-text"><b> 여행지 추천 </b></div>
      </div>

      <div class="icon-item">
        <v-btn
            class="ma-2"

            icon="mdi-car"
        ></v-btn>
        <div class="icon-text"><b> 렌트카 </b></div>
      </div>

      <div class="icon-item">
        <v-btn
            class="ma-2"

            icon="mdi-home-modern"
        ></v-btn>
        <div class="icon-text"><b> 숙소 예약 </b></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Icon',
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
  margin: 0 30%;
}

.icon-text {
  margin-top: 8px;
  font-size: 70%;
  color: #6A0DAD;
  text-align: center;
}
</style>
