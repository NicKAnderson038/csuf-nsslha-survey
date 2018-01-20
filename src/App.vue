<template>
  <v-app light class="app">
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      fixed: false,
      title: "Vuetify.js"
    };
  }
};
</script>

<style>
.app {
  background: linear-gradient(to bottom right, purple, blue) !important;
}
</style>
