<template>
  <div>
    <v-app-bar elevation="0" style="height: 80px;background-color: #F8F8F8; display: flex; justify-content: center">
      <v-toolbar elevation="0" class="MainHomeHeader1600Style">
        <v-app-bar-title>
          <v-img :style="TriPlandLogoStyle" :src="TriPlandLogo" alt="TriPland 로고"/>
        </v-app-bar-title>
        <div style="width: 400px">
          <v-text-field placeholder="원하는 서류 / 서비스를 검색해보세요" prepend-inner-icon="mdi-magnify" variant="outlined" bg-color="#FFFFFF" base-color="#FFFFFF" hide-details density="comfortable" clearable rounded style="margin-right: 20px;"/>
        </div>
        <v-btn icon="mdi-account-outline" class="MainHomeHeader1600ButtonLogoStyle" :ripple="false"/>
      </v-toolbar>
    </v-app-bar>
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
        }
      } else if (this.LogoIndex === 1) {
        return {
          width: '50px',
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
  max-width: 1400px;
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