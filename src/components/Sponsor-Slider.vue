<template>
  <section class="sponsors">
    <div class="wrapper">
      <VueSlickCarousel v-bind="slickOptions">
        <img
          v-for="sponsorSliderItem in sponsorSliderItems"
          :key="sponsorSliderItem.img"
          class="sponsors__slider-item"
          :src="sponsorSliderItem.img"
          alt="sponsor"
        />
      </VueSlickCarousel>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
export default {
  name: "sponsorSlider",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      sponsorSliderItems: [
        {
          img: require(`@/assets/image/partner-logo-1-dark.png`),
        },
        {
          img: require("@/assets/image/partner-logo-2-dark.png"),
        },
        {
          img: require("@/assets/image/partner-logo-3-dark.png"),
        },
        {
          img: require("@/assets/image/partner-logo-4-dark.png"),
        },
        {
          img: require("@/assets/image/partner-logo-5-dark.png"),
        },
        {
          img: require("@/assets/image/partner-logo-6-dark.png"),
        },
        {
          img: require("@/assets/image/partner-logo-7-dark.png"),
        },
        {
          img: require("@/assets/image/partner-logo-8-dark.png"),
        },
      ],
      slickOptions: {
        arrows: false,
        dots: false,
        slidesToShow: 5,
        autoplay: false,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
            },
          },
        ],
      },
    };
  },
};
</script>
<style lang="scss">
.sponsors {
  padding: 64px 0;
  &__slider-item {
    max-width: 182px;
    width: 100%;
    cursor: grab;
  }

  .slick-slide div {
    @include flex(center, center);
  }
}
</style>
