<template>
  <section class="about">
    <div class="wrapper">
      <h2 class="title title--centred">About Our Agency</h2>
      <p class="description description--centred">
        We are a new design studio based in USA. We have over 20 years of
        combined experience, and know a thing or two about designing websites
        and mobile apps. Clever use of technology and lean processes enable us
        to work faster and smarter.
      </p>
      <img src="@/assets/image/about-signature.webp" alt="signature" />
    </div>
    <AboutReview />
  </section>
</template>

<script>
import AboutReview from "@/components/AboutReview.vue";
export default {
  name: "About",
  components: {
    AboutReview,
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  @include flex(center, space-between);
  flex-direction: column;
  gap: 35px;
}
.description {
  max-width: 759px;
}
.about {
  padding-top: 95px;
  background: $bg_color--white;
  min-height: 680px;
  height: 100%;
  position: relative;
}
</style>
