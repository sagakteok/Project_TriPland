<template>
  <div>
    <v-app-bar elevation="0" class="PagesHeader800Style">
      <v-app-bar-title>
        <v-img :style="TriPlandLogoStyle" :src="TriPlandLogo" alt="TriPland 로고"/>
      </v-app-bar-title>
      <v-btn icon="mdi-account-outline" class="PagesHeader800ButtonLogoStyle"/>
      <v-btn icon="mdi-dots-vertical" class="PagesHeader800ButtonLogoStyle"/>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'PagesHeader800',
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
          width: '130px',
          transition: 'all .3s ease',
          margin: 'auto'
        }
      } else if (this.LogoIndex === 1) {
        return {
          width: '50px',
          margin: 'auto'
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
.PagesHeader800Style {
  background: #FFFFFF;
  height: 57px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.PagesHeader800ButtonLogoStyle {
  font-size: 15px;
  color: #000000;
  cursor: pointer;
}
.PagesHeader800ButtonLogoStyle:hover {
  transition: all .1s ease;
  color: #A532FF;
}
</style>