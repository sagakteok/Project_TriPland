<template>
  <v-bottom-navigation :style="BottombarStyle()" :elevation="0" grow>
    <v-btn>
      <v-icon>mdi-calendar-edit</v-icon>
      <text :style="BottombarText()">여행계획</text>
    </v-btn>
    <v-btn>
      <v-icon>mdi-home-outline</v-icon>
      <text :style="BottombarText()">홈</text>
    </v-btn>
    <v-btn>
      <v-icon>mdi-heart-outline</v-icon>
      <text :style="BottombarText()">위시리스트</text>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  methods: {
    BottombarStyle(){
      return{
        background: "#F3EDF7",
        color: "#D094FF",
      };
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