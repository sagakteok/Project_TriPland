<template>
  <MainHomeHeader/>
  <Bottombar/>
</template>

<script>
import Bottombar from "./Bars/Bottombar.vue";
import MainHomeHeader from "./Bars/MainHomeHeader.vue"; // Ensure this is at the top

export default {
  components: {MainHomeHeader, Bottombar}
}

</script>
