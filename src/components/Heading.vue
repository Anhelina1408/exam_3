<template>
  <section class="heading">
    <div class="wrapper">
      <div class="heading__content">
        <p class="description description--centred description--white">
          new branding agency
        </p>
        <h1 class="title title--centred title--white">
          We are about to change the way <span> you publish on web</span>
        </h1>
      </div>

      <button class="heading__arrow" @click="goto('about')">
        <img src="@/assets/image/arrow-down.svg" alt="arrow" />
      </button>
    </div>
  </section>
</template>
<script>
export default {
  name: "Heading",
  data() {
    return {};
  },
  methods: {
    goto(refName) {
      this.$emit("goto", refName);
    },
  },
};
</script>
<style lang="scss" scoped>
.heading {
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: url("@/assets/image/heading-bg.webp") 100%;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    top: 0;
    background: #000;
    opacity: 0.6;
    z-index: 1;
  }
  &__content {
    max-width: 730px;
    width: 100%;
    text-align: center;
    margin: 0 auto;
    padding: 0 15px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
  .title {
    max-width: 730px;
    width: 100%;
    font-style: normal;
    span {
      font-style: italic;
      font-weight: normal;
    }
  }
  .description {
    text-transform: uppercase;
  }
  &__arrow {
    border: 1px solid $font_color--white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    padding: 0;
    cursor: pointer;
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
  }
}
</style>
