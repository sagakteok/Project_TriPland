<template>
  <MainHomeHeader/>
  <v-main>
    <Icon/>
    <Attractions/>
    <Search/>
  </v-main>
  <Bottombar/>
</template>

<script>
import MainHomeHeader from "../Bars/MainHomeHeader.vue";
import Bottombar from "../Bars/Bottombar.vue";
import Icon from "../icons/Icon.vue";
import Attractions from "../Attractions/Attractions.vue";
import Search from "./Search.vue"

export default {
  components: {MainHomeHeader, Icon, Attractions, Bottombar, Search}
}
</script>