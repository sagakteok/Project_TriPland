<template>
  <div>
    <v-app-bar elevation="0" style="height: 80px; background-color: #F8F8F8; display: flex; justify-content: center">
      <v-toolbar elevation="0" class="MainHomeHeader1600Style">
        <v-app-bar-title>
          <v-img :style="TriPlandLogoStyle" :src="TriPlandLogo" alt="TriPland 로고"/>
        </v-app-bar-title>
        <div style="width: 400px">
          <v-text-field
            placeholder="원하는 서류 / 서비스를 검색해보세요"
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            bg-color="#FFFFFF"
            base-color="#FFFFFF"
            hide-details
            density="comfortable"
            clearable
            rounded
            style="margin-right: 20px;"
          />
        </div>
        <v-btn
          icon="mdi-account-outline"
          class="MainHomeHeader1600ButtonLogoStyle"
          :ripple="false"
          :color="buttonColor"
          @click="toggleCertification"
        />
      </v-toolbar>
    </v-app-bar>

    <!-- 다이얼로그 추가 -->
    <v-dialog v-model="showDialog" max-width="500px">
      <v-card>
        <v-card-title class="headline">알림</v-card-title>
        <v-card-text>{{ dialogMessage }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="showDialog = false">닫기</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'MainHomeHeader1600',
  data() {
    return {
      TriPlandLogos: [
        new URL('../../../assets/TriPlandLogo.png', import.meta.url).href,
        new URL('../../../assets/SmallTriPlandLogo.png', import.meta.url).href
      ],
      LogoIndex: 0,
      impCode: "imp06611308",
      merchantUid: "",
      isVerified: localStorage.getItem('isVerified') === 'true',
      showDialog: false, // 다이얼로그 표시 여부
      dialogMessage: ''  // 다이얼로그에 표시할 메시지
    };
  },
  computed: {
    TriPlandLogo() {
      return this.TriPlandLogos[this.LogoIndex];
    },
    TriPlandLogoStyle() {
      if (this.LogoIndex === 0) {
        return {
          width: '130px',
          transition: 'all .3s ease',
        };
      } else if (this.LogoIndex === 1) {
        return {
          width: '50px',
        };
      }
    },
    buttonColor() {
      return this.isVerified ? '#A532FF' : '#000000';
    }
  },
  mounted() {
    this.loadIamportScript();
    setInterval(() => {
      this.LogoIndex = (this.LogoIndex + 1) % this.TriPlandLogos.length;
    }, 5000);
  },
  methods: {
    loadIamportScript() {
      const script = document.createElement('script');
      script.src = "https://cdn.iamport.kr/js/iamport.payment-1.2.0.js";
      script.async = true;
      script.onload = () => {
        if (window.IMP) {
          window.IMP.init(this.impCode);
          console.log("아임포트 초기화 성공");
        }
      };
      document.head.appendChild(script);
    },
    toggleCertification() {
      if (this.isVerified) {
        localStorage.removeItem('isVerified');
        this.isVerified = false;
        this.dialogMessage = '본인 인증이 취소되었습니다.';
        this.showDialog = true; // 다이얼로그 표시
      } else {
        this.startCertification();
      }
    },
    startCertification() {
      if (!window.IMP) {
        console.error("아임포트 객체가 없습니다.");
        return;
      }

      this.merchantUid = `ORD${new Date().getTime()}`;

      const params = {
        pg: 'inicis_unified.MIIiasTest',
        merchant_uid: this.merchantUid,
        m_redirect_url: "http://localhost:5176/certification-success",
        popup: false
      };

      window.IMP.certification(params, this.certificationCallback);
    },
    certificationCallback(response) {
      if (response.success) {
        console.log("인증 성공", response);
        this.dialogMessage = '인증이 성공적으로 완료되었습니다!';
        localStorage.setItem('isVerified', 'true');
        this.isVerified = true;
      } else {
        console.error("인증 실패", response);
        this.dialogMessage = `인증에 실패하였습니다. 에러 내용: ${response.error_msg}`;
      }
      this.showDialog = true; // 다이얼로그 표시
    }
  }
}
</script>

<style>
.MainHomeHeader1600Style {
  max-width: 1400px;
  margin: auto;
  background: transparent;
}
.MainHomeHeader1600ButtonLogoStyle {
  font-size: 18px;
  cursor: pointer;
}
.MainHomeHeader1600ButtonLogoStyle:hover {
  transition: all .1s ease;
}
</style>
