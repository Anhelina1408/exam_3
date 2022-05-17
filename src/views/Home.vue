<template>
  <main id="home">
    <Heading @goto="goToAbout" />
    <About ref="about" />
    <Projects />
    <ReviewSlider />
    <SponsorSlider />
    <Blog />
    <Contacts />
  </main>
</template>
<script>
import Heading from "@/components/Heading.vue";
import About from "@/components/About.vue";
import Projects from "@/components/Projects.vue";
import ReviewSlider from "@/components/Review-Slider.vue";
import SponsorSlider from "@/components/Sponsor-Slider.vue";
import Blog from "@/components/Blog.vue";
import Contacts from "@/components/Contacts.vue";
export default {
  name: "home",
  components: {
    Heading,
    About,
    Projects,
    ReviewSlider,
    SponsorSlider,
    Blog,
    Contacts,
  },
  methods: {
    goToAbout(refName) {
      const element = this.$refs[refName];
      const top = element.$el.offsetTop;
      window.scrollTo({ top, left: 0, behavior: "smooth" });
    },
  },
};
</script>
