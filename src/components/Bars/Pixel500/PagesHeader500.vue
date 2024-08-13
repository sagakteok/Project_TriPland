<template>
  <div>
    <v-app-bar elevation="0" class="PagesHeader500Style">
      <v-app-bar-title>
        <v-img :style="TriPlandLogoStyle" :src="TriPlandLogo" alt="TriPland 로고"/>
      </v-app-bar-title>
      <v-btn icon="mdi-account-outline" class="PagesHeader500ButtonLogoStyle"/>
      <v-btn icon="mdi-dots-vertical" class="PagesHeader500ButtonLogoStyle"/>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'PagesHeader500',
  data() {
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
          width: '90px',
          transition: 'all .3s ease',
          margin: 'auto'
        }
      } else if (this.LogoIndex === 1) {
        return {
          width: '35px',
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
.PagesHeader500Style {
  background: #FFFFFF;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.PagesHeader500ButtonLogoStyle {
  font-size: 12px;
  color: #000000;
  cursor: pointer;
}

.PagesHeader500ButtonLogoStyle:hover {
  transition: all .1s ease;
  color: #A532FF;
}
</style>