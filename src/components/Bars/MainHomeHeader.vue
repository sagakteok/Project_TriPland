<template>
  <v-app-bar :style="AppbarStyle()" :elevation="0">
    <text :style="AppbarNavIconStyle()">
      <v-app-bar-nav-icon/>
    </text>
    <text :style="TriPlandLogoStyle()">
      <v-img :src="TriPlandLogo"/>
    </text>
    <text :style="AccountLogoStyle()">
      <v-icon>mdi-account-outline</v-icon>
    </text>
  </v-app-bar>
</template>

<script>
export default {
  data(){
    return {
      TriPlandLogo: new URL('../../assets/TriPland.png', import.meta.url).href
    }
  },
  methods: {
    AppbarNavIconStyle(){
      return{
        marginLeft: '10px',
        marginBottom: '-20px'
      }
    },
    TriPlandLogoStyle(){
      return{
        width: '200px',
        margin: 'auto',
        marginBottom: '0px'
      }
    },
    AccountLogoStyle(){
      return{
        width: '50px',
        fontSize: '25px',
        marginRight: '10px',
        marginBottom: '-20px',
        cursor: 'pointer'
      }
    },
    AppbarStyle() {
      return {
        background: "#D094FF",
        color: "#FFFFFF",
        height: "350px"
      };
    }
  }
};
</script>
