<template>
  <v-bottom-navigation :style="BottombarStyle()" :elevation="0">
    <v-btn :style="BottombarButtonStyle()" rounded="lg">
      <v-icon>mdi-calendar-edit</v-icon>
      <text :style="BottombarText()">여행계획</text>
    </v-btn>
    <v-hover v-slot="{isHovering, props}">
      <text :style="SmallTriPlandLogoStyle(isHovering)" v-bind="props">
        <v-img :src="SmallTriPlandLogo"/>
      </text>
    </v-hover>
    <v-btn :style="BottombarButtonStyle()" rounded="lg">
      <v-icon>mdi-heart-outline</v-icon>
      <text :style="BottombarText()">위시리스트</text>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data(){
    return {
       SmallTriPlandLogo: new URL('../../../public/SmallTriPlandLogo.png', import.meta.url).href
    }
  },
  methods: {
    BottombarStyle(){
      return{
        background: "#F3EDF799",
        color: "#D094FF",
        borderTop: '1px solid #D094FF',
        backdropFilter: 'blur(50px)',
      };
    },
    BottombarButtonStyle(){
      return{
        outline: 'none',
      };
    },
    SmallTriPlandLogoStyle(isHovering){
      return{
        transition: isHovering ? 'all .1s linear 0s' : 'all 0s ease-out',
        width: isHovering ? '60px' : '45px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 'clamp(60px, 10vw, 100px)',
        marginRight: 'clamp(60px, 10vw, 100px)',
        cursor: 'pointer',
      }
    },
    BottombarText(){
      return{
        color: "#000000",
        fontFamily: 'Inter-Bold, Helvetica',
        fontSize: '13px',
        fontWeight: '700'
      }
    }
  }
};
</script>