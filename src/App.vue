<template>
  <v-app style="background-color: transparent">
    <router-view/>
  </v-app>
</template>

<script>
const styles = `
#app {
  padding: 0px;
}
`;

const styleElement = document.createElement('style');
styleElement.textContent = styles;
document.head.appendChild(styleElement);
</script>