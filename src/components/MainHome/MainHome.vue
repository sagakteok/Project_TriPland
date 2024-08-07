<template>
  <MainHomeHeader/>
  <Attractions/>
  <Icon/>
  <Bottombar/>
</template>

<script>
import MainHomeHeader from "../Bars/MainHomeHeader.vue";
import Bottombar from "../Bars/Bottombar.vue";
import Icon from "../icons/Icon.vue";
import Attractions from "../Attractions/Attractions.vue";

export default {
  components: {MainHomeHeader, Bottombar, Icon, Attractions}
}
</script>