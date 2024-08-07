<template>
  <div>
    <v-app-bar elevation="0" :style="AppbarStyle()">
      <v-app-bar-title>
        <v-img :style="TriPlandLogoStyle()" :src="TriPlandLogo"/>
      </v-app-bar-title>
      <v-hover v-slot="{ isHovering, props }">
        <v-btn icon="mdi-account-outline" v-bind="props" :style="AppbarButtonLogoStyle(isHovering)" :ripple="false"/>
      </v-hover>
      <v-hover v-slot="{ isHovering, props }">
        <v-app-bar-nav-icon v-bind="props" :style="AppbarButtonLogoStyle(isHovering)" :ripple="false"/>
      </v-hover>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data(){
    return {
      TriPlandLogo: new URL('../../assets/PagesTriPland.png', import.meta.url).href,
    }
  },
  methods: {
    TriPlandLogoStyle(){
      return{
        width: '130px',
      }
    },
    AppbarStyle() {
      return {
        background: "#FFFFFF",
      };
    },
    AppbarButtonLogoStyle(isHovering){
      return{
        transition: isHovering ? 'all .1s linear 0s' : 'all 0s ease-in-out',
        fontSize: '20px',
        outline: 'none',
        color: isHovering ? '#A533FF' : '#000000',
        cursor: 'pointer'
      }
    },
  }
};
</script>