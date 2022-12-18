<script>
import { RouterLink, RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";

export default {
  components: { Navigation },
  data() {
    return {
      name: "tarun aggarwal",
    };
  },
};
</script>
<template>
  <div class="container">
    <Navigation />
    <RouterView />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
