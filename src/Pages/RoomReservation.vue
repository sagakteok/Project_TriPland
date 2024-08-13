<template>
  <component :is="currentHeader" /> 
  <v-app>
    <v-container>
      <!-- 상자 추가 -->
      <div class="box-wrapper">
        <div class="table-container">
          <table border="1">
            <tr>
              <th colspan="2">
                <div class="location">
                  <v-icon icon="mdi-map-marker"></v-icon>
                  <input type="text" placeholder="지역, 숙소명 키워드로 찾아보세요">
                </div>
              </th>
            </tr>

            <tr>
              <th colspan="2">
                <div>
                  <v-btn @click="dialog = true" class="people-btn">
                    <v-icon icon="mdi-account"></v-icon>
                    성인 {{ adults }}, 아동 {{ children }}
                  </v-btn>
                </div>
              </th>
            </tr>

            <tr>
              <th class="date">
                <label for="start-date">입실: </label>
                <input type="date" id="start-date" v-model="startDate">
              </th>
              <th class="date">
                <label for="end-date">퇴실: </label>
                <input type="date" id="end-date" v-model="endDate">
              </th>
            </tr>
          </table>
        </div>

        <!-- 버튼 추가 -->
        <div class="button-container">
          <v-btn class="search">검색</v-btn>
          <v-btn class="confirm">예약확인</v-btn>
        </div>
      </div>

      <div v-for="(hotel, index) in hotels" :key="index" class="hotel-container">
        <div class="line1"></div>
        <img :src="hotel.image" alt="Room Image" class="img1" />
        <span class="hotel1">{{ hotel.name }}</span>
        <div class="site1">{{ hotel.address }}</div>

        <div class="gpa1">
          <v-icon class="star1">mdi-star</v-icon>
          <span class="score1">{{ hotel.rating }}</span>
        </div>
        
        <div class="box1">
          <span class="rent-room1">{{ hotel.rentDuration }}</span>
          <span class="rent-price1">{{ hotel.rentPrice }}</span>
          <span class="room1">{{ hotel.roomDuration }}</span>
          <span class="room-price1">{{ hotel.roomPrice }}</span>
        </div>
        <v-btn class="reservation1">예약</v-btn>
      </div>

      <!-- 인원 수 설정 다이얼로그 -->
      <v-dialog v-model="dialog" max-width="400px">
        <v-card>
          <v-card-title class="headline">인원 수 설정</v-card-title>
          <v-card-text>
            <v-row>
              <v-col>
                <span>성인</span>
              </v-col>
              <v-col>
                <v-btn icon @click="decreaseAdults">
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
                <v-text-field
                  v-model="adults"
                  type="number"
                  min="0"
                  readonly
                  hide-details
                ></v-text-field>
                <v-btn icon @click="increaseAdults">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <span>아동</span>
              </v-col>
              <v-col>
                <v-btn icon @click="decreaseChildren">
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
                <v-text-field
                  v-model="children"
                  type="number"
                  min="0"
                  readonly
                  hide-details
                ></v-text-field>
                <v-btn icon @click="increaseChildren">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">확인</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
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
      dialog: false,
      adults: 1,
      children: 0,
      startDate: '',
      endDate: '',
      hotels: [
        {
          image: room1Image,
          name: 'Hotel 1',
          address: '서울특별시 노원구 노해로 75길',
          rating: '4.9',
          rentDuration: '대실 5시간',
          rentPrice: '15,000원~',
          roomDuration: '숙박 20:00~',
          roomPrice: '35,000원~'
        },
        {
          image: room2Image,
          name: 'Hotel 2',
          address: '서울특별시 노원구 노해로 76길',
          rating: '4.9',
          rentDuration: '대실 6시간',
          rentPrice: '20,000원~',
          roomDuration: '숙박 21:00~',
          roomPrice: '40,000원~'
        },
        {
          image: room3Image,
          name: 'Hotel 3',
          address: '서울특별시 노원구 노해로 76길',
          rating: '4.9',
          rentDuration: '대실 6시간',
          rentPrice: '30,000원~',
          roomDuration: '숙박 21:00~',
          roomPrice: '60,000원~'
        }
      ]
    };
  },
  computed: {
    // 화면 크기에 따라 다른 헤더와 바텀바 컴포넌트를 선택합니다.
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
  mounted() {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const formatDate = (date) => date.toISOString().split('T')[0];

    this.startDate = formatDate(today);
    this.endDate = formatDate(tomorrow);
  },
  methods: {
    increaseAdults() {
      this.adults++;
    },
    decreaseAdults() {
      if (this.adults > 0) this.adults--;
    },
    increaseChildren() {
      this.children++;
    },
    decreaseChildren() {
      if (this.children > 0) this.children--;
    }
  },
  components: {
    PagesHeader500,
    PagesHeader800,
    PagesHeader1600,
    Bottombar500,
    Bottombar800,
    Bottombar1600
  }
};
</script>

<style>
.box-wrapper {
  padding: 20px; /* 상자의 여백 설정 */
  padding-top: 40px;
   padding-bottom: 30px;
  border: 1px solid #F6F6F6; /* 상자의 테두리 */
  border-radius: 15px; /* 상자의 둥근 테두리 */
  max-width: 760px; /* 상자의 최대 너비 */
  margin: 0 auto; /* 상자를 중앙 정렬 */
  display: flex; /* Flexbox 활성화 */
  flex-direction: column; /* 수직 방향으로 배치 */
  align-items: center; /* 수평 중앙 정렬 */
  background-color: #F6F6F6;
}

.table-container {
  border: 1px solid #A6A6A6; 
  border-radius: 15px; 
  overflow: hidden; /* 둥근 테두리 밖으로 내용이 넘어가지 않도록 */
  max-width: 500px; /* 테이블 컨테이너의 최대 너비 설정 */
  width: 100%; /* 상자 내부에서 너비 100%로 설정 */
}

table {
  border-collapse: collapse;
  background-color: #FBF8FF;
}

.location {
  display: flex;
  align-items: center;
  justify-content: flex-start; /* 왼쪽 정렬 */
  padding: 8px; /* 아이템 내부에 여백 추가 */
}

.people-btn {
  width: 100%; /* 너비 100%로 설정 */
  background-color: #FBF8FF !important;
}

.date {
  padding: 5px; /* 날짜 셀에 패딩 추가 */
}

input {
  outline: none;
  border: none;
  margin-left: 5px;
  flex-grow: 1;
}

th {
  width: 250px;
  border: 1px solid #EAEAEA;
}

.search, .confirm, .reservation1 {
  background-color: #BB65FF !important; 
  color: #FFFFFF !important;
}

.button-container {
  position: relative;
  left: 10vw;
  display: flex;
  gap: 13px;
  margin-top: 15px;
}

.hotel-container {
  position: relative;
  height: 42vh;
}

.line1 {
  position: absolute; /* 부모 요소 기준으로 위치 조정 */
  top: 8vh;
  left: 50%; /* 화면의 50% 지점으로 위치 조정 */
  transform: translateX(-50%); /* 요소의 너비의 절반만큼 왼쪽으로 이동하여 중앙 정렬 */
  width: 50vw;
  height: 1.7px; 
  background-color: #EAEAEA; 
}

.img1{
  position: relative;
  top: 14vh;
  left: 13vw;
  width: 18vw;
  height: 30vh;
}

.hotel1{
  position: relative;
  bottom: 13vh;
  left: 15vw;
  color: #726277;
  font-size: 27px;
}

.site1{
  position: relative;
  bottom: 14vh;
  left: 34vw;
  font-size: 18px;
}

.gpa1 {
  position: relative;
  bottom: 15vh;
  left: 34vw;
  display: flex;
  align-items: center; 
}

.star1 {
  color: #F9DE00;
  font-size: 25px;
}

.score1 {
  font-size: 17px;
  left: 24px;
}

.box1{
  position: relative;
  bottom: 16vh;
  left: 55vw;
  border: 1px solid #F7F2FF;
  border-radius: 10px;
  width: 120px;
  background-color: #F7F2FF;
}

.rent-room1{
  color: #726277;
  font-size: 15px;
  display: flex;
  justify-content: center;
}

.rent-price1{
  font-size: 20px;
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
}

.room1{
  color: #726277;
  font-size: 15px;
  display: flex;
  justify-content: center;
}

.room-price1{
  font-size: 20px;
   display: flex;
  justify-content: center;
}

.reservation1{
  position: relative !important;
  bottom: 15vh;
  left: 55.2vw;
  margin-left: 25px;
}
</style>
