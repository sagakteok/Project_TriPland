<template>
  <div class="popup-content">
    <button class="close-button" @click="$emit('close')">X</button>
    <h2>부산 여행지 정보</h2>
    <p>부산은 한국에서 가장 큰 항구 도시 중 하나로, 아름다운 해변과 다양한 관광 명소가 많습니다.</p>
    <!-- 추가적인 여행지 정보 작성 -->
  </div>
</template>

<script>
export default {
  name: 'BusanPopup'
};
</script>

<style scoped>
.popup-content {
  padding: 20px;
  text-align: center;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
</style>
