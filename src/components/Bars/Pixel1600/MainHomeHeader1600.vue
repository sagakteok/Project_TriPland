<template>
  <div>
    <v-toolbar elevation="0" class="MainHomeHeader1600Style">
      <v-app-bar-title>
        <v-img :style="TriPlandLogoStyle" :src="TriPlandLogo" alt="TriPland 로고"/>
      </v-app-bar-title>
      <v-btn icon="mdi-account-outline" class="MainHomeHeader1600ButtonLogoStyle" :ripple="false"/>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'MainHomeHeader1600',
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
.MainHomeHeader1600Style {
  max-width: 1200px;
  margin: auto;
  background: transparent;

}
.MainHomeHeader1600ButtonLogoStyle {
  font-size: 18px;
  color: #000000;
  cursor: pointer;
}
.MainHomeHeader1600ButtonLogoStyle:hover {
  transition: all .1s ease;
  color: #A532FF;
}
</style>