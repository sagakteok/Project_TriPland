<template>
  <div>
    <v-card>
      <v-card-title>부산</v-card-title>
      <v-card-text>
        부산은 대한민국의 제2의 도시로, 해운대와 같은 아름다운 해변과 다양한 관광지가 있는 곳입니다.
      </v-card-text>
      <v-card-actions>
        <v-btn color="purple" @click="$emit('close')">닫기</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Busan',
};
</script>

<style scoped>
/* 여기에 필요한 스타일을 추가하세요 */
</style>
