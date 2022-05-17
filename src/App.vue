<template>
  <div id="app">
    <Header :scrollPosition="scrollPosition" :routeName="currentRoute" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header-Nav.vue";
import Footer from "@/components/Footer-Nav.vue";
export default {
  name: "app",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      scrollPosition: null,
      currentRoute: "",
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
    this.currentRoute = this.$route.name;
  },
  watch: {
    $route(newRouteValue) {
      this.currentRoute = newRouteValue.name;
    },
  },
};
</script>

<style lang="scss"></style>
