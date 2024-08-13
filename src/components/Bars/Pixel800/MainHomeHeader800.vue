<template>
  <div>
    <v-app-bar elevation="0" class="MainHomeHeader800Style">
      <v-app-bar-title>
        <v-img :style="TriPlandLogoStyle" :src="TriPlandLogo" alt="TriPland 로고"/>
      </v-app-bar-title>
      <v-btn icon="mdi-account-outline" class="MainHomeHeader800ButtonLogoStyle"/>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'MainHomeHeader800',
  data(){
    return {
      TriPlandLogos: [
        new URL('../../../assets/TriPlandLogo.png', import.meta.url).href,
        new URL('../../../assets/SmallTriPlandLogo.png', import.meta.url).href
      ],
      LogoIndex: 0
    }
  },
  computed: {
    TriPlandLogo() {
      return this.TriPlandLogos[this.LogoIndex];
    },
    TriPlandLogoStyle() {
      if (this.LogoIndex === 0) {
        return {
          width: '115px',
          transition: 'all .3s ease',
        }
      } else if (this.LogoIndex === 1) {
        return {
          width: '45px',
        };
      }
    }
  },
  mounted() {
    setInterval(() => {
      this.LogoIndex = (this.LogoIndex + 1) % this.TriPlandLogos.length;
    }, 5000)
  }
};
</script>

<style>
.MainHomeHeader800Style {
  background: #FFFFFF;
  height: 57px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.MainHomeHeader800ButtonLogoStyle {
  font-size: 15px;
  color: #000000;
  cursor: pointer;
}
.MainHomeHeader800ButtonLogoStyle:hover {
  transition: all .1s ease;
  color: #A532FF;
}
</style>