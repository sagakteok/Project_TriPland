<template>
<component :is="currentHeader" />
  <v-app>
    <div class="main">
      <div class="box-wrapper2">
        <span class="confirm2">예약 확인</span>
      </div>

      <div v-for="(hotel, index) in hotels" :key="index" class="reservation-container"
          :style="{ top: `${37 + index * 45}vh` }">
        <div class="Line"></div>
        <img :src="hotel.image" alt="Room Image" class="img2" />
        <span class="hotel2">{{ hotel.name }}</span>
        <div class="site2">{{ hotel.address }}</div>

        <div class="gpa2">
          <v-icon class="star2">mdi-star</v-icon>
          <span class="score2">{{ hotel.rating }}</span>
        </div>

        <div class="box2">
          <span class="room-select">숙박</span>
          <span class="entrance">입실: 2024-08-17</span>
          <span class="out">퇴실: 2024-08-17</span>
          <span class="people">인원: 성인2, 아동1</span>
        </div>

        <div class="gpa3">
          <v-btn class="reservation2" @click="showReservationDialog(hotel)">결제</v-btn>
          <v-btn class="cancel" @click="">취소</v-btn>
        </div>
      </div>
    </div>
  </v-app>
  <component :is="currentBottomBar" />
</template>

<script>
import PagesHeader500 from "../components/Bars/Pixel500/PagesHeader500.vue";
import PagesHeader800 from "../components/Bars/Pixel800/PagesHeader800.vue";
import PagesHeader1600 from "../components/Bars/Pixel1600/PagesHeader1600.vue";
import Bottombar500 from "../components/Bars/Pixel500/Bottombar500.vue";
import Bottombar800 from "../components/Bars/Pixel800/Bottombar800.vue";
import Bottombar1600 from "../components/Bars/Pixel1600/Bottombar1600.vue";

import room1Image from '@/assets/roomimage/bedroom1.jpg';
import room2Image from '@/assets/roomimage/bedroom2.jpg';
import room3Image from '@/assets/roomimage/bedroom3.jpg';

export default {
  data() {
    return {
      hotels: [
        {
          image: room1Image,
          name: 'Hotel 1',
          address: '서울특별시 노원구 노해로 75길',
          rating: '4.9',
          rentDuration: '대실 5시간',
          rentPrice: '15,000원~',
          roomDuration: '숙박 20:00~',
          roomPrice: '35,000원~',
        },
        {
          image: room2Image,
          name: 'Hotel 2',
          address: '서울특별시 노원구 노해로 75길',
          rating: '4.9',
          rentDuration: '대실 5시간',
          rentPrice: '15,000원~',
          roomDuration: '숙박 20:00~',
          roomPrice: '35,000원~',
        },
        {
          image: room3Image,
          name: 'Hotel 3',
          address: '서울특별시 노원구 노해로 75길',
          rating: '4.9',
          rentDuration: '대실 5시간',
          rentPrice: '15,000원~',
          roomDuration: '숙박 20:00~',
          roomPrice: '35,000원~',
        }
      ]
    };
  },
  computed: {
    currentHeader() {
      const width = window.innerWidth;
      if (width <= 500) {
        return PagesHeader500;
      } else if (width <= 800) {
        return PagesHeader800;
      } else {
        return PagesHeader1600;
      }
    },
    currentBottomBar() {
      const width = window.innerWidth;
      if (width <= 500) {
        return Bottombar500;
      } else if (width <= 800) {
        return Bottombar800;
      } else {
        return Bottombar1600;
      }
    }
  },
};
</script>

<style>

.main {
  position: absolute; /* 절대 위치 설정 */
  top: 0; /* 상단에서 0 위치 */
  left: 50%; /* 좌측에서 50% 위치 */
  transform: translateX(-50%); /* 수평 중앙 정렬 */
  width: 80vw; /* 화면 너비의 80%로 설정 (최대 너비는 700px) */
  max-width: 700px; /* 최대 너비 설정 */
  height: 180vh; /* 화면 높이의 100%로 설정 */
  display: flex; /* Flexbox 사용 */
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  padding: 20px;
  padding-top: 30px;
  padding-bottom: 30px;
  border: 1px solid #F6F6F6;
}

.box-wrapper2 {
  position: absolute; /* 절대 위치 설정 */
  top: 8%; /* 상단에서 15% 위치 */
  left: 50%; /* 좌측에서 50% 위치 */
  transform: translate(-50%, -25%); /* 중앙 정렬을 위해 요소의 크기만큼 이동 */
  padding: 20px;
  padding-top: 30px;
  padding-bottom: 30px;
  border: 1px solid #F6F6F6;
  border-radius: 15px;
  max-width: 700px; /* 최대 너비 설정 */
  width: 80vw; /* 화면 너비의 80%로 설정 (최대 너비는 700px) */
  background-color: #F6F6F6;
  display: flex; /* Flexbox 사용 */
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
}

.confirm2 {
  font-size: 27px; /* 원하는 폰트 크기로 설정 */
  color: #8142DB;
  font-weight: bold; /* 폰트 굵기 설정 */
}

.Line {
  position: relative; /* 절대 위치 설정 */
  bottom: 6vh;
  left: 50%; /* 좌측에서 50% 위치 */
  transform: translate(-50%); /* 중앙 정렬을 위해 요소의 크기만큼 이동 */
  width: 80vw; /* .box-wrapper와 동일한 너비 */
  max-width: 700px; /* .box-wrapper와 동일한 최대 너비 */
  height: 1px; /* 선의 두께 설정 */
  background-color: #EAEAEA; /* 선의 색상 */
}

.reservation-container {
  position: absolute; /* 절대 위치 설정 */
  left: 0;
}

.img2 {
  width: 40%; /* 부모 요소의 너비에 맞게 조정 */
  max-width: 300px; /* 최대 너비를 설정 */
  height: 240px; /* 고정된 높이 설정 (필요에 따라 조정) */
  object-fit: cover; /* 비율에 맞게 자르기 */
  margin-bottom: 10vh; /* 아래쪽 여백 추가 */
}

.hotel2 {
  position: relative;
  bottom: 39.5vh;
  left: 2vw; /* 상대적인 위치 지정 */
  color: #726277;
  font-size:32px;
  font-size: clamp(16px, 5vw, 32px); /* 최소 16px, 최대 32px로 설정, 5vw로 계산된 값 */
}

.site2 {
  position: relative;
  bottom: 40.5vh;
  left: 47%; /* 상대적인 위치 지정 */
  font-size: clamp(12px, 3vw, 18px); /* 최소 14px, 최대 28px로 설정, 4vw로 계산된 값 */
  max-width: 100%; /* 부모 요소를 넘어가지 않도록 제한 */
}

.gpa2 {
  position: relative;
  bottom: 41.5vh;
  left: 47%; /* 상대적인 위치 지정 */
  display: flex;
  align-items: center; 
}

.star2 {
  color: #F9DE00;
  font-size: 25px;
}

.score2 {
  font-size: 17px;
  left: 24px;
}

.box2 {
  position: absolute;
  bottom: 24vh;
  right: 0%; /* 상대적인 위치 지정 */
  font-size: clamp(12px, 3vw, 18px); /* 최소 14px, 최대 28px로 설정, 4vw로 계산된 값 */
  max-width: 100%; /* 부모 요소를 넘어가지 않도록 제한 */
  border: 1px solid #F7F2FF;
  border-radius: 10px;
  width: 160px;
  background-color: #F7F2FF;
}

.room-select {
  color: #726277;
  font-size: 16px;
  display: flex;
  justify-content: center;
  margin-bottom: 4px;
  margin-top: 4px;
}

.entrance {
  font-size: 15px;
  display: flex;
  justify-content: center;
}

.out {
  font-size: 15px;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.people {
  font-size: 14.5px;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.gpa3{
  position: absolute;
  bottom: 18vh;
  right: 1%; /* 상대적인 위치 지정 */
  display: flex;
  align-items: center; 
}

.reservation2 {
  margin-right: 5px;
  z-index: 10; /* 버튼을 다른 요소 위로 표시 */
  width: 70px;
}

.cancel{
  z-index: 10; /* 버튼을 다른 요소 위로 표시 */
  width: 70px;
}

.cancel, .reservation2 {
  background-color: #BB65FF !important; 
  color: #FFFFFF !important;
}

</style>
