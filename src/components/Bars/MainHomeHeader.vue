<template>
  <v-app-bar :style="AppbarStyle()" :elevation="0">
    <v-hover v-slot="{ isHovering, props }">
      <v-icon icon="mdi-menu" :style="AppbarNavIconStyle(isHovering)" v-bind="props"/>
    </v-hover>
    <text :style="TriPlandLogoStyle()">
      <v-img :src="TriPlandLogo"/>
    </text>
    <v-hover v-slot="{ isHovering, props }">
      <v-icon icon="mdi-account-circle-outline" :style="AccountLogoStyle(isHovering)" v-bind="props"/>
    </v-hover>
  </v-app-bar>
</template>

<script>
export default {
  data(){
    return {
      TriPlandLogo: new URL('../../assets/MainHomeTriPland.png', import.meta.url).href
    }
  },
  methods: {
    AppbarNavIconStyle(isHovering){
      return{
        transition: isHovering ? 'all .1s linear 0s' : 'all 0s ease-in-out',
        fontSize: 'clamp(18px, 3vw, 22.5px)',
        marginLeft: 'clamp(12px, 2vw, 20px)',
        color: isHovering ? '#A533FF' : '#FFFFFF',
        outline: 'none',
        cursor: 'pointer'
      };
    },
    TriPlandLogoStyle(){
      return{
        transition: 'all 0s ease-in-out',
        width: 'clamp(100px,18vw,150px)',
        margin: 'auto',
        cursor: 'pointer'
      }
    },
    AccountLogoStyle(isHovering){
      return{
        transition: isHovering ? 'all .1s linear 0s' : 'all 0s ease-in-out',
        fontSize: 'clamp(18px, 3vw, 22.5px)',
        outline: 'none',
        color: isHovering ? '#A533FF' : '#FFFFFF',
        marginRight: 'clamp(12px, 2vw, 20px)',
        cursor: 'pointer'
      }
    },
    AppbarStyle() {
      return {
        transition: 'all 0s ease-in-out',
        background: "#D094FF",
        color: "#FFFFFF",
      };
    }
  }
};
</script>
