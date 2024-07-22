<template>
  <v-app-bar :style="AppbarStyle()" :elevation="0">
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
      TriPlandLogo: new URL('../../assets/PagesTriPland.png', import.meta.url).href
    }
  },
  methods: {
    AppbarNavIconStyle(){
      return{
        fontSize: 'clamp(12px, 2vw, 20px)',
        marginLeft: 'clamp(3px, 0.5vw, 5px)',
        outline: 'none',
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
        cursor: 'pointer'
      }
    },
    AppbarStyle() {
      return {
        background: "#FFFFFF",
        color: "#8F00FF",
      };
    }
  }
};
</script>
