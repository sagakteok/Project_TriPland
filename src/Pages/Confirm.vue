<template>
  <div>
    <!-- Header와 BottomBar는 v-app 밖에 위치 -->
    <component :is="currentHeader" />

    <v-app>
      <div v-if="screenWidth <= 500">
        <!-- 500px 이하 화면 크기용 템플릿 -->
        <div class="main">
          <div class="box-wrapper2">
            <span class="confirm2">예약 확인</span>
          </div>
          <div v-for="(hotel, index) in hotels" :key="index" class="reservation-container">
            <div class="Line"></div>
            <img :src="hotel.image" alt="Room Image" class="img2" />
            <span class="hotel2">{{ hotel.name }}</span>
            <div class="site2">{{ hotel.address }}</div>
            <div class="gpa2">
              <v-icon class="star2">mdi-star</v-icon>
              <span class="score2">{{ hotel.rating }}</span>
            </div>
            <div class="box2">
              <span class="room-select">숙박</span><br>
              <span class="entrance">입실: 2024-08-17</span><br>
              <span class="out">퇴실: 2024-08-17</span><br>
              <span class="people">인원: 성인2, 아동1</span>
            </div>
            <div class="gpa3">
              <v-btn class="reservation2" @click="onClickPay(hotel.name)">결제</v-btn>
              <v-btn class="cancel" @click="onClickCancel(hotel.name)">취소</v-btn>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="screenWidth <= 800">
        <!-- 501px ~ 800px 화면 크기용 템플릿 -->
        <div class="main">
          <div class="box-wrapper2">
            <span class="confirm2">예약 확인</span>
          </div>
          <div v-for="(hotel, index) in hotels" :key="index" class="reservation-container">
            <div class="Line"></div>
            <img :src="hotel.image" alt="Room Image" class="img2" />
            <span class="hotel2">{{ hotel.name }}</span>
            <div class="site2">{{ hotel.address }}</div>
            <div class="gpa2">
              <v-icon class="star2">mdi-star</v-icon>
              <span class="score2">{{ hotel.rating }}</span>
            </div>
            <div class="box2">
              <span class="room-select">숙박</span><br>
              <span class="entrance">입실: 2024-08-17</span><br>
              <span class="out">퇴실: 2024-08-17</span><br>
              <span class="people">인원: 성인2, 아동1</span>
            </div>
            <div class="gpa3">
              <v-btn class="reservation2" @click="onClickPay(hotel.name)">결제</v-btn>
              <v-btn class="cancel" @click="onClickCancel(hotel.name)">취소</v-btn>
            </div>
          </div>
        </div>
      </div>

      <div v-else>
        <!-- 801px 이상 화면 크기용 템플릿 -->
        <div class="main">
          <div class="box-wrapper2">
            <span class="confirm2">예약 확인</span>
          </div>
          <div v-for="(hotel, index) in hotels" :key="index" class="reservation-container">
            <div class="Line"></div>
            <img :src="hotel.image" alt="Room Image" class="img2" />
            <span class="hotel2">{{ hotel.name }}</span>
            <div class="site2">{{ hotel.address }}</div>
            <div class="gpa2">
              <v-icon class="star2">mdi-star</v-icon>
              <span class="score2">{{ hotel.rating }}</span>
            </div>
            <div class="box2">
              <span class="room-select">숙박</span><br>
              <span class="entrance">입실: 2024-08-17</span><br>
              <span class="out">퇴실: 2024-08-17</span><br>
              <span class="people">인원: 성인2, 아동1</span>
            </div>
            <div class="gpa3">
              <v-btn class="reservation2" @click="onClickPay(hotel.name)">결제</v-btn>
              <v-btn class="cancel" @click="onClickCancel(hotel.name)">취소</v-btn>
            </div>
          </div>
        </div>
      </div>
    </v-app>
    
    <!-- Footer는 v-app 밖에 위치 -->
    <component :is="currentBottomBar" />
  </div>
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
      sdkLoaded: false,
      screenWidth: window.innerWidth,
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
    this.loadIMP()
      .then(() => {
        if (window.IMP) {
          window.IMP.init("imp06611308"); // 실제 상점 ID로 교체
          console.log("IMP SDK 로드 및 초기화 성공");
          this.sdkLoaded = true;
        } else {
          console.error("IMP 객체를 찾을 수 없습니다.");
        }
      })
      .catch((error) => {
        console.error("IMP SDK 로드에 실패했습니다:", error);
      });

    // 화면 크기 변경 시 반응형 업데이트
    window.addEventListener('resize', this.updateScreenWidth);
  },
  beforeDestroy() {
    // 컴포넌트가 파괴될 때 이벤트 리스너 제거
    window.removeEventListener('resize', this.updateScreenWidth);
  },
  methods: {
    loadIMP() {
      return new Promise((resolve, reject) => {
        if (window.IMP) {
          resolve(); // 이미 로드된 경우 즉시 완료
          return;
        }

        const script = document.createElement('script');
        script.src = "https://cdn.iamport.kr/v1/iamport.js";
        script.onload = () => {
          if (window.IMP) {
            resolve();
          } else {
            reject(new Error("IMP 객체가 로드되지 않았습니다."));
          }
        };
        script.onerror = () => {
          reject(new Error("IMP SDK 스크립트 로드 실패"));
        };
        document.head.appendChild(script);
      });
    },
    onClickPay(hotelName) {
      if (!this.sdkLoaded) {
        console.error('IMP SDK가 아직 로드되지 않았습니다.');
        return;
      }

      const merchantUid = `ORD${new Date().getTime()}`; // 고유 주문번호 생성

      window.IMP.request_pay({
        pg: "uplus.tlgdacomxpay", // PG와 MID 조합
        pay_method: "card",
        merchant_uid: merchantUid,
        name: `주문명: ${hotelName}`, // 선택한 호텔 이름 사용
        amount: 15000,
        m_redirect_url: "http://localhost:5174/payment-success", // 모바일 결제 후 리디렉션 URL
      }, (rsp) => {
        if (rsp.success) {
          alert('결제가 완료되었습니다.');
          console.log(rsp);
        } else {
          alert('결제에 실패하였습니다. 에러 내용: ' + rsp.error_msg);
        }
      });
    },
    onClickCancel(hotelName) {
      alert(`${hotelName} 예약이 취소되었습니다.`);
    },
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    }
  }
}
</script>

<style>
/* 기본 스타일 */
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  max-width: 700px;
  padding: 20px;
  border: 1px solid #F6F6F6;
  background-color: #F6F6F6;
  margin: 0 auto;
}

.box-wrapper2 {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 1px solid #F6F6F6;
  border-radius: 15px;
  max-width: 700px;
  width: 80vw;
  background-color: #F6F6F6;
  margin-bottom: 20px;
  position: relative;
  top: 20px;
}

.confirm2 {
  font-size: 2rem;
  color: #8142DB;
  font-weight: bold;
}

.Line {
  background-color: #EAEAEA;
  height: 1px;
  margin-bottom: 30px;
  position: relative;
}

.reservation-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
}

.img2 {
  width: 100%;
  max-width: 300px;
  height: 240px;
  object-fit: cover;
  margin-bottom: 20px;
}

.hotel2 {
  text-align: center;
  color: #726277;
  font-size: 1.5rem;
  position: relative;
}

.site2 {
  font-size: 1rem;
  color: #6D6D6D;
  text-align: center;
  position: relative;
}

.gpa2 {
  display: flex;
  text-align: center;
  position: relative;
}

.star2 {
  color: #F9DE00;
  font-size: 1.5rem;
}

.score2 {
  font-size: 1rem;
}

.box2 {
  border: 1px solid #F7F2FF;
  border-radius: 10px;
  background-color: #F7F2FF;
  padding: 10px;
  text-align: center;
}

.room-select,
.entrance,
.out,
.people {
  margin: 4px 0;
}

.gpa3 {
  position: relative;
}

.reservation2,
.cancel {
  background-color: #BB65FF;
  color: #FFFFFF;
  margin: 0 10px;
}

/* 미디어 쿼리 */
@media (max-width: 500px) {
  .confirm2 {
    font-size: 1.5rem;
  }

  .Line{
    width: 108%;
  }
  
  .img2 {
    max-width: 100%;
    height: auto;
  }
  
  .hotel2 {
    font-size: 1.2rem;
    bottom: 12px;
  }

  .site2 {
    font-size: 0.9rem;
    bottom: 17px;
  }

  .gpa2{
    bottom: 18px;
    right: 9px;
  }

  .star2{
    font-size: 1.2rem;
  }

  .score2{
    font-size: 0.8rem;
  }
  
  .box2 {
    width: 160px;
    font-size: 0.9rem;
  }

  .room-select,
  .entrance,
  .out,
  .people {
    font-size: 0.8rem;
  }

  .gpa3{
    top: 6px;
  }

  .reservation2, .cancel {
    width: 30px; /* 너비 조정 */
    font-size: 0.7rem; /* Font size 조정 */
  }
}

@media (min-width: 501px) and (max-width: 800px) {
  .confirm2 {
    font-size: 1.8rem;
  }

  .Line{
    width: 107%;
  }
  
  .img2 {
    max-width: 70%;
    height: auto;
  }
  
  .hotel2 {
    font-size: 1.4rem;
    bottom: 15px;
  }

  .site2 {
    font-size: 1rem;
    bottom: 18px;
  }

   .gpa2{
    bottom: 19px;
    right: 8px;
  }

  .star2{
    font-size: 1.3rem;
  }

  .score2{
    font-size: 0.9rem;
  }
  
  .box2 {
    width: 200px;
    font-size: 1rem;
  }

  .room-select,
  .entrance,
  .out,
  .people {
    font-size: 0.9rem;
  }

  .gpa3{
    top: 8px;
  }
  
  .reservation2, .cancel {
    width: 30px; /* 너비 조정 */
    font-size: 0.8rem; /* Font size 조정 */
  }
}

@media (min-width: 801px) {
  .confirm2 {
    font-size: 2rem;
  }

  .Line{
    width: 106%;
  }
  
  .img2 {
    max-width: 400px;
    height: 240px;
  }
  
  .hotel2 {
    font-size: 1.5rem;
    bottom: 18px;
  }

  .site2 {
    font-size: 1.1rem;
    bottom: 19px;
  }

  .gpa2{
    bottom: 20px;
    right: 7px;
  }

  .star2{
    font-size: 1.4rem;
  }

  .score2{
    font-size: 1rem;
  }
  
  .box2 {
    width: 240px;
    font-size: 1rem;
  }

  .room-select,
  .entrance,
  .out,
  .people {
    font-size: 1rem;
  }

  .gpa3{
    top: 10px;
  }
  
  .reservation2, .cancel {
    width: 70px; /* 너비 조정 */
    font-size: 0.9rem; /* Font size 조정 */
  }
}

</style>
