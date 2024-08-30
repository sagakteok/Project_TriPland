<template>
  <component :is="currentHeader" />
  <v-app>
    <v-container>
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

        <div class="button-container">
          <v-btn class="search">검색</v-btn>
          <v-btn class="confirm" @click="gotoConfirm()">예약확인</v-btn>
        </div>
      </div>

      <!-- 화면 너비에 따라 다른 레이아웃을 렌더링 -->
      <div v-if="screenWidth <= 500">
        <!-- 모바일 레이아웃 -->
        <div v-for="(hotel, index) in hotels" :key="index" class="hotel-container">
          <img :src="hotel.image" alt="Room Image" class="img1" />
          <span class="hotel1">{{ hotel.name }}</span>
          <div class="site1">{{ hotel.address }}</div>
          <div class="gpa1">
            <v-icon class="star1">mdi-star</v-icon>
            <span class="score1">{{ hotel.rating }}</span>
          </div>
          <v-icon 
            :icon="hotel.liked ? 'mdi-heart' : 'mdi-heart-outline'" 
            :color="hotel.liked ? 'red' : ''" 
            @click="toggleLike(index)"
            class="heart"
          ></v-icon>
          <div class="box1">
            <span class="rent-room1">{{ hotel.rentDuration }}</span>
            <span class="rent-price1">{{ hotel.rentPrice }}</span>
            <span class="room1">{{ hotel.roomDuration }}</span>
            <span class="room-price1">{{ hotel.roomPrice }}</span>
          </div>
          <v-btn class="reservation1" @click="showReservationDialog(hotel)">예약</v-btn>
        </div>
      </div>

      <div v-else-if="screenWidth <= 800">
        <!-- 태블릿 레이아웃 -->
        <div v-for="(hotel, index) in hotels" :key="index" class="hotel-container">
          <img :src="hotel.image" alt="Room Image" class="img1" />
          <span class="hotel1">{{ hotel.name }}</span>
          <div class="site1">{{ hotel.address }}</div>
          <div class="gpa1">
            <v-icon class="star1">mdi-star</v-icon>
            <span class="score1">{{ hotel.rating }}</span>
          </div>
          <v-icon 
            :icon="hotel.liked ? 'mdi-heart' : 'mdi-heart-outline'" 
            :color="hotel.liked ? 'red' : ''" 
            @click="toggleLike(index)"
            class="heart"
          ></v-icon>
          <div class="box1">
            <span class="rent-room1">{{ hotel.rentDuration }}</span>
            <span class="rent-price1">{{ hotel.rentPrice }}</span>
            <span class="room1">{{ hotel.roomDuration }}</span>
            <span class="room-price1">{{ hotel.roomPrice }}</span>
          </div>
          <v-btn class="reservation1" @click="showReservationDialog(hotel)">예약</v-btn>
        </div>
      </div>

      <div v-else>
        <!-- 데스크탑 레이아웃 -->
          <div v-for="(hotel, index) in hotels" :key="index" class="hotel-container">
            <div class="line1"></div>
            <img :src="hotel.image" alt="Room Image" class="img1" />
            <span class="hotel1">{{ hotel.name }}</span>
            <div class="site1">{{ hotel.address }}</div>
            <div class="gpa1">
              <v-icon class="star1">mdi-star</v-icon>
              <span class="score1">{{ hotel.rating }}</span>
            </div>
            <v-icon 
              :icon="hotel.liked ? 'mdi-heart' : 'mdi-heart-outline'" 
              :color="hotel.liked ? 'red' : ''" 
              @click="toggleLike(index)"
              class="heart"
            ></v-icon>
            <div class="box1">
              <span class="rent-room1">{{ hotel.rentDuration }}</span>
              <span class="rent-price1">{{ hotel.rentPrice }}</span>
              <span class="room1">{{ hotel.roomDuration }}</span>
              <span class="room-price1">{{ hotel.roomPrice }}</span>
            </div>
            <v-btn class="reservation1" @click="showReservationDialog(hotel)">예약</v-btn>
          </div>
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

      <!-- 예약 다이얼로그 -->
      <v-dialog v-model="reservationDialog" max-width="400px">
        <v-card>
          <v-card-title class="headline">예약 진행 확인</v-card-title>
          <v-card-text>
            {{ selectedHotelName }}에서 예약을 진행하시겠습니까?<br><br> 
            <v-radio-group v-model="reservationType">
              <v-radio label="대실" value="RoomUse"></v-radio>
              <v-radio label="숙박" value="DayRoomUse"></v-radio>
            </v-radio-group>
            입실: {{ startDate }}<br>
            퇴실: {{ endDate }}<br><br>
            성인 {{ adults }}, 아동 {{ children }}<br><br>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="ReservationRoom">예</v-btn>
            <v-btn @click="reservationDialog = false">아니요</v-btn>
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

import router from "../router.js";

export default {
  data() {
    return {
      dialog: false,
      reservationDialog: false, // 예약 다이얼로그 상태
      selectedHotel: null, // 선택된 호텔
      selectedHotelName: '', // 선택된 호텔 이름
      adults: 1,
      children: 0,
      startDate: '',
      endDate: '',
      reservationType: null, // 예약 타입 (RoomUse 또는 DayRoomUse)
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
      ],
      screenWidth: window.innerWidth // 화면 너비를 추적
    };
  },
  computed: {
    currentHeader() {
      if (this.screenWidth <= 500) {
        return PagesHeader500;
      } else if (this.screenWidth <= 800) {
        return PagesHeader800;
      } else {
        return PagesHeader1600;
      }
    },
    currentBottomBar() {
      if (this.screenWidth <= 500) {
        return Bottombar500;
      } else if (this.screenWidth <= 800) {
        return Bottombar800;
      } else {
        return Bottombar1600;
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.updateScreenWidth);
    this.updateScreenWidth();

    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const formatDate = (date) => date.toISOString().split('T')[0];

    this.startDate = formatDate(today);
    this.endDate = formatDate(tomorrow);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateScreenWidth);
  },
  methods: {
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    },
    toggleLike(index) {
      this.hotels[index].liked = !this.hotels[index].liked;
    },
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
    },
    showReservationDialog(hotel) {
      this.selectedHotel = hotel;
      this.selectedHotelName = hotel.name;
      this.reservationDialog = true;
    },
    ReservationRoom() {
      console.log(`예약 확인: ${this.selectedHotel.name}`);
      console.log(`예약 유형: ${this.reservationType}`);
      this.reservationDialog = false;
    },
    gotoConfirm() {
      router.push('/confirm');
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


<style scoped>
/* 기본 스타일 */
.box-wrapper {
  padding: 20px;
  padding-top: 40px;
  padding-bottom: 30px;
  border: 1px solid #F6F6F6;
  border-radius: 15px;
  max-width: 700px; /* 첫 번째 코드와 동일하게 설정 */
  width: 80vw; /* 첫 번째 코드와 동일하게 설정 */
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F6F6F6;
}

.table-container {
  border: 1px solid #A6A6A6;
  border-radius: 15px;
  overflow: hidden;
  max-width: 500px;
  width: 100%;
}

table {
  border-collapse: collapse;
  background-color: #FBF8FF;
}

.location {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 8px;
}

.people-btn {
  width: 100%;
  background-color: #FBF8FF !important;
}

.date {
  padding: 5px;
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
  display: flex;
  margin-top: 15px;
  justify-content: center;
  position: relative;
}

.hotel-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.img1 {
  width: 100%; 
  max-width: 300px; /* 첫 번째 코드와 동일하게 설정 */
  height: 240px; /* 첫 번째 코드와 동일하게 설정 */
  object-fit: cover; /* 첫 번째 코드와 동일하게 설정 */
  margin-bottom: 20px;
  position: relative;
}

.hotel1 {
  font-size: 1.5rem; /* 첫 번째 코드와 동일하게 설정 */
  color: #726277;
  text-align: center;
  position: relative;
}

.site1 {
  font-size: 1rem; /* 첫 번째 코드와 동일하게 설정 */
  text-align: center;
  position: relative;
}

.gpa1 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
}

.star1 {
  color: #F9DE00;
  font-size: 1.5rem; /* 첫 번째 코드와 동일하게 설정 */
}

.score1 {
  font-size: 1rem; /* 첫 번째 코드와 동일하게 설정 */
}

.box1 {
  border: 1px solid #F7F2FF;
  border-radius: 10px;
  background-color: #F7F2FF;
  text-align: center;
  padding: 10px;
  position: relative;
}

.rent-room1, .room1 {
  color: #726277;
  display: flex;
  justify-content: center;
}

.rent-price1, .room-price1 {
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
}

.reservation1, .heart {
  position: relative;
}

/* 미디어 쿼리 */
@media (max-width: 500px) {
  .box-wrapper{
    margin-bottom: 20px;
  }

  .hotel-container {
     height: 40vh;
  }

  .button-container {
    gap: 10px;
    left: 15%;
  }

  .img1 {
    max-width: 160px; /* 첫 번째 코드와 동일하게 설정 */
    height: auto; /* 첫 번째 코드와 동일하게 설정 */
    top: 15px;
  }

  .hotel1 {
    font-size: 1.2rem; /* 첫 번째 코드와 동일하게 설정 */
    bottom: 1px;
  }

  .site1 {
    font-size: 0.9rem; /* 첫 번째 코드와 동일하게 설정 */
    bottom: 6px;
  }

  .gpa1 {
    flex-direction: row;
    margin-top: 12px;
    bottom: 20px;
    right: 8px;
  }

  .star1 {
    font-size: 1.2rem; /* 첫 번째 코드와 동일하게 설정 */
  }

  .score1 {
    font-size: 0.8rem; /* 첫 번째 코드와 동일하게 설정 */
  }

  .box1 {
    width: 150px; /* 첫 번째 코드와 동일하게 설정 */
    font-size: 0.9rem; /* 첫 번째 코드와 동일하게 설정 */
    bottom: 30px;
  }

  .rent-room1, .room1{
    font-size: 0.8rem;
  }
  .rent-price1, .room-price1{
     font-size: 1rem;
  }

  .reservation1 {
    width: 30px; /* 첫 번째 코드와 동일하게 설정 */
    font-size: 0.7rem; /* 첫 번째 코드와 동일하게 설정 */
    bottom: 23px;
  }

  .heart {
    font-size: 1.3rem;
    bottom: 78px;
    left: 44px;
  }
}

@media (min-width: 501px) and (max-width: 800px) {
  .box-wrapper{
    margin-bottom: 20px;
  }

  .hotel-container {
     height: 60vh;
  }

  .button-container {
    gap: 13px;
    left: 26%;
  }

  .img1 {
    max-width: 280px; /* 첫 번째 코드와 동일하게 설정 */
    height: auto; /* 첫 번째 코드와 동일하게 설정 */
    top: 20px;
  }

  .hotel1 {
    font-size: 1.4rem; /* 첫 번째 코드와 동일하게 설정 */
  }

  .site1 {
    font-size: 1rem; /* 첫 번째 코드와 동일하게 설정 */
    bottom: 2px;
  }

  .gpa1 {
    flex-direction: row;
    margin-top: 15px;
    bottom: 18px;
    right: 8px;
  }

  .star1 {
    font-size: 1.3rem; /* 첫 번째 코드와 동일하게 설정 */
  }

  .score1 {
    font-size: 0.9rem; /* 첫 번째 코드와 동일하게 설정 */
  }

  .box1 {
    width: 200px; /* 첫 번째 코드와 동일하게 설정 */
    font-size: 1rem; /* 첫 번째 코드와 동일하게 설정 */
    bottom: 30px;
  }

  .rent-room1, .room1{
    font-size: 0.9rem;
  }
  .rent-price1, .room-price1{
     font-size: 1.1rem;
  }

  .reservation1 {
    width: 30px; /* 첫 번째 코드와 동일하게 설정 */
    font-size: 0.8rem; /* 첫 번째 코드와 동일하게 설정 */
    bottom: 20px;
  }

  .heart {
    font-size: 1.5rem; /* 첫 번째 코드와 동일하게 설정 */
    bottom: 90px;
    left: 52px;
  }
}

@media (min-width: 801px) {
  .box-wrapper{
    margin-bottom: 50px;
  }

  .hotel-container {
     height: 70vh;
  }

  .button-container {
    gap: 13px;
    left: 23%;
  }

  .img1 {
    max-width: 400px; /* 첫 번째 코드와 동일하게 설정 */
    height: 240px; /* 첫 번째 코드와 동일하게 설정 */
  }

  .hotel1 {
    font-size: 1.5rem; /* 첫 번째 코드와 동일하게 설정 */
    bottom: 18px;
  }

  .site1 {
    font-size: 1.1rem; /* 첫 번째 코드와 동일하게 설정 */
    bottom: 20px;
  }

  .gpa1 {
    flex-direction: row;
    margin-top: 20px;
    bottom: 43px;
    right: 8px;
  }

  .star1 {
    font-size: 1.4rem; /* 첫 번째 코드와 동일하게 설정 */
  }

  .score1 {
    font-size: 1rem; /* 첫 번째 코드와 동일하게 설정 */
  }

  .box1 {
    width: 250px; /* 첫 번째 코드와 동일하게 설정 */
    font-size: 1rem; /* 첫 번째 코드와 동일하게 설정 */
    bottom: 55px;
  }

  .rent-room1, .room1{
    font-size: 1rem;
  }
  .rent-price1, .room-price1{
     font-size: 1.2rem;
  }

  .reservation1 {
    width: 70px; /* 첫 번째 코드와 동일하게 설정 */
    font-size: 0.9rem; /* 첫 번째 코드와 동일하게 설정 */
    bottom: 45px;
  }

  .heart {
    font-size: 1.7rem; /* 첫 번째 코드와 동일하게 설정 */
    bottom: 118px;
    left: 60px;
  }
}
</style>



