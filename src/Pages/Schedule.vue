<template>
  <div>
    <!-- Header와 BottomBar는 v-app 밖에 위치 -->
    <component :is="currentHeader" />

    <v-app>
      <v-container>
        <!-- 기존 템플릿 내용 -->

        <div class="box-wrapper3">
          <div class="table-container2">
            <table border="1" style="background-color: #FBF8FF;">
              <tr>
                <th colspan="2">
                  <div class="location2">
                    <v-icon icon="mdi-map-marker"></v-icon>
                    <input type="text" placeholder="지역, 숙소명 키워드로 찾아보세요">
                  </div>
                </th>
              </tr>
              <tr>
                <th class="date2">
                  <label for="start-date">출발: </label>
                  <input type="date" id="start-date" v-model="startDate">
                </th>
                <th class="date2">
                  <label for="end-date">도착: </label>
                  <input type="date" id="end-date" v-model="endDate">
                </th>
              </tr>
            </table>
          </div>

          <div class="table-container3">
            <table border="1" class="outer-table">
              <tr>
                <th style="font-size: 24px; color: #5D1EB7;">
                  일정표
                  <span class="button-container2">
                    <v-btn @click="addSchedule" class="supplement">일정추가</v-btn>
                    <v-btn @click="saveData" class="save">저장</v-btn>
                  </span>
                </th>
              </tr>
              <tr>
                <td>
                  <template v-for="(schedule, index) in schedules" :key="index">
                    <table border="1" class="inner-table">
                      <tr>
                        <th style="width: 25%;">
                          <input v-model="schedule.date" class="input-full-width special-placeholder" placeholder="Date">
                        </th>
                        <th style="width: 75%;">
                          <input v-model="schedule.plan" class="input-full-width special-placeholder" placeholder="당일 계획을 적어주세요.">
                        </th>
                      </tr>
                      <tr v-for="(time, i) in schedule.times" :key="i">
                        <th>
                          <input v-model="time.time" class="input-full-width" placeholder="Time">
                        </th>
                        <th>
                          <input v-model="time.detail" class="input-full-width" placeholder="시간별 계획을 적어주세요.">
                        </th>
                      </tr>
                    </table>
                  </template>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </v-container>
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

export default {
  data() {
    return {
      startDate: '',
      endDate: '',
      schedules: [], // 초기값으로 빈 배열 설정
      screenWidth: window.innerWidth, // 화면 크기 초기값 설정
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
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const formatDate = (date) => date.toISOString().split('T')[0];

    this.startDate = formatDate(today);
    this.endDate = formatDate(tomorrow);

    // 페이지가 로드될 때 데이터 불러오기
    this.loadData();

    // 기본 일정 추가
    if (this.schedules.length === 0) {
      this.addSchedule(); // 기본 일정 추가
    }

    // 화면 크기 변경 시 반응형 업데이트
    window.addEventListener('resize', this.updateScreenWidth);
  },
  
  beforeDestroy() {
    // 컴포넌트가 파괴될 때 이벤트 리스너 제거
    window.removeEventListener('resize', this.updateScreenWidth);
  },
  
  methods: {
  addSchedule() {
    this.schedules.push({ 
      date: '',
      plan: '',
      times: Array(5).fill().map(() => ({ time: '', detail: '' }))
    }); // 새로운 빈 스케줄 추가
  },
  saveData() {
    console.log('Saving data:', this.schedules); // 저장할 데이터 로그
    // 로컬 저장소에 스케줄과 날짜 데이터 저장
    const dataToSave = {
      schedules: this.schedules,
      startDate: this.startDate,
      endDate: this.endDate
    };
    localStorage.setItem('schedulesData', JSON.stringify(dataToSave));
  },
  loadData() {
    const savedData = localStorage.getItem('schedulesData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      console.log('Loaded data:', parsedData); // 불러온 데이터 로그
      this.schedules = parsedData.schedules || [];
      this.startDate = parsedData.startDate || this.startDate;
      this.endDate = parsedData.endDate || this.endDate;
    }
  },
  updateScreenWidth() {
    this.screenWidth = window.innerWidth;
  }
}

};
</script>

<style scoped>
/* 기존 스타일 */
.box-wrapper3 {
  padding: 20px;
  padding-top: 40px;
  padding-bottom: 30px;
  border: 1px solid #F6F6F6;
  border-radius: 15px;
  max-width: 700px;
  width: 90vw;
  margin: 0 auto;
  margin-bottom: 20px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F6F6F6;
}

.table-container2, .table-container3 {
  border: 1px solid #A6A6A6;
  border-radius: 15px;
  overflow: hidden;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
}

.table-container3 {
  margin-top: 40px;
}

table {
  border-collapse: collapse;
  width: 100%;
}

.location2 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 8px;
}

.date2 {
  padding: 5px;
}

input {
  outline: none;
  border: none;
  margin-left: 5px;
  flex-grow: 1;
}

th, td {
  border: 1px solid #EAEAEA;
  padding: 8px;
}

.inner-table {
  width: 100%;
  table-layout: fixed; /* 열 너비를 고정 */
  margin-top: 15px;
  margin-bottom: 20px;
}

.inner-table th, .inner-table td {
  text-align: left;
  overflow: hidden; /* 넘치는 내용 숨기기 */
  text-overflow: ellipsis; /* 잘린 부분에 '...' 표시 */
  white-space: nowrap; /* 텍스트 줄 바꿈 방지 */
}

.input-full-width {
  width: 100%; /* 셀의 너비에 맞게 조정 */
  box-sizing: border-box; /* 패딩과 테두리를 너비에 포함 */
}

.button-container2 {
  display: flex;
  justify-content: flex-end; /* 오른쪽 정렬 */
  gap: 10px;
}

.supplement, .save {
  background-color: #BB65FF !important;
  color: #FFFFFF !important;
  font-size: 12px;
  padding: 4px 6px; /* 버튼의 패딩 조정 */
}

.special-placeholder::placeholder{
  color: #000000;
}

</style>
