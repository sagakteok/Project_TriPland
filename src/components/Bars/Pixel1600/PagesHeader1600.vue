<template>
  <div>
    <v-app-bar elevation="0" class="PagesHeader1600Style">
      <v-app-bar-title>
        <v-img :style="TriPlandLogoStyle" :src="TriPlandLogo" alt="TriPland 로고"/>
      </v-app-bar-title>
      <v-btn icon="mdi-account-outline" class="PagesHeader1600ButtonLogoStyle" :ripple="false"/>
      <v-btn icon="mdi-dots-vertical" class="PagesHeader1600ButtonLogoStyle" :ripple="false"/>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'PagesHeader1600',
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
.PagesHeader1600Style {
  background: #FFFFFF;
}
.PagesHeader1600ButtonLogoStyle {
  font-size: 18px;
  color: #000000;
  cursor: pointer;
}
.PagesHeader1600ButtonLogoStyle:hover {
  transition: all .1s ease;
  color: #A532FF;
}
</style>