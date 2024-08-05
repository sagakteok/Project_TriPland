<template>
  <v-app-bar scroll-behavior="fade-image inverted" :image="MainHeaderBackground" scroll-threshold="100" elevation="0" :style="AppbarStyle()">
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
      MainHeaderBackground: new URL('../../assets/MainHeaderBackground.png', import.meta.url).href,
    }
  },
  methods: {
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
      }
    },
    AppbarStyle() {
      return {
        background: "#FFFFFF",
      };
    },
  }
};
</script>