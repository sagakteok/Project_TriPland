<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <v-app style="background-color: transparent">
    <v-main style="background-color: #F8F8F8; padding-bottom: 0px;">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  mounted() {
    document.documentElement.addEventListener('touchstart', function (event) {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    }, false);

    var lastTouchEnd = 0;

    document.documentElement.addEventListener('touchend', function (event) {
      var now = (new Date()).getTime();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    }, false);
  }
}
</script>