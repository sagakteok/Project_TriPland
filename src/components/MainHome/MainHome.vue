<template>
  <PagesHeader/>
  <v-main>
    <Search/>
    <Icon/>
    <Attractions/>
  </v-main>
  <Bottombar/>
</template>

<script>
import PagesHeader from "../Bars/PagesHeader.vue";
import Bottombar from "../Bars/Bottombar.vue";
import Icon from "../icons/Icon.vue";
import Attractions from "../Attractions/Attractions.vue";
import Search from "./Search.vue"

export default {
  components: {PagesHeader, Icon, Attractions, Bottombar, Search}
}
</script>