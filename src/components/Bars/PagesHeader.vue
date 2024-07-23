<template>
  <v-app-bar scroll-behavior="fade-image inverted" :image="MainHeaderBackground" scroll-threshold="100" :style="AppbarStyle()">
    <v-app-bar-nav-icon :style="AppbarNavIconStyle()" :ripple="false"/>
    <text :style="TriPlandLogoStyle()">
      <v-img :src="TriPlandLogo"/>
    </text>
    <v-btn icon="mdi-account-outline" :style="AccountLogoStyle()" :ripple="false"/>
  </v-app-bar>
</template>

<script>
export default {
  data(){
    return {
      TriPlandLogo: new URL('../../assets/PagesTriPland.png', import.meta.url).href,
      MainHeaderBackground: new URL('../../assets/MainHeaderBackground.png', import.meta.url).href
    }
  },
  methods: {
    AppbarNavIconStyle(){
      return{
        fontSize: 'clamp(12px, 2vw, 20px)',
        marginLeft: 'clamp(3px, 0.5vw, 5px)',
        outline: 'none',
        color: this.iconColor,
      };
    },
    TriPlandLogoStyle(){
      return{
        width: 'clamp(100px,18vw,150px)',
        margin: 'auto',
      }
    },
    AccountLogoStyle(){
      return{
        width: '50px',
        fontSize: 'clamp(16px, 3vw, 25px)',
        outline: 'none',
        marginRight: 'clamp(6px, 1vw, 10px)',
        cursor: 'pointer',
        color: this.iconColor,
      }
    },
    AppbarStyle() {
      return {
        background: "#FFFFFF",
      };
    },
    iconColor() {
      // 스크롤 위치에 따라 색상 변경
      return this.scrollPosition > 100 ? '#8F00FF' : '#FFFFFF';
    },
    onScroll() {
      // 현재 스크롤 위치 저장
      this.scrollPosition = window.scrollY;
    },
  },
  mounted() {
    // 컴포넌트가 마운트되면 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    // 컴포넌트가 파괴되기 전에 스크롤 이벤트 리스너 제거
    window.removeEventListener('scroll', this.onScroll);
  }
};
</script>
