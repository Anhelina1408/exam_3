<template>
  <section class="review">
    <VueSlickCarousel v-bind="slickOptions">
      <div
        class="review__slider"
        v-for="reviewSliderItem in reviewSliderItems"
        :key="reviewSliderItem.title"
      >
        <div>
          <h2 class="review__title title--centred title--white">
            {{ reviewSliderItem.title }}
          </h2>
          <p class="description description--white description--centred">
            {{ reviewSliderItem.subtitle }}
          </p>
        </div>
      </div>
    </VueSlickCarousel>
  </section>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "ReviewSlider",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      reviewSliderItems: [
        {
          title: `“ Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap.”`,
          subtitle: "Michael Hopkins",
        },
        {
          title: `“We really appreciate you taking the time to share your rating with us. We look forward to seeing you again soon.”`,
          subtitle: "Nick Jhonson",
        },
        {
          title: `“Thank you so much for taking the time to leave an excellent rating. We really appreciate your business. Please let us know what we can do for you in the future.”`,
          subtitle: "Helen Wolf",
        },
      ],
      slickOptions: {
        arrows: false,
        dots: true,
      },
    };
  },
};
</script>
<style lang="scss">
.review {
  background: url("@/assets/image/black-bg.jpg") 100%;
  min-height: 500px;
  height: 100%;
  position: relative;
  padding-top: 177px;
  @include xs {
    padding-top: 130px;
  }
  &__slider {
    width: 100%;
    margin: 0 auto;

    div {
      max-width: 730px;
      margin: 0 auto;
      padding: 0 20px;
    }
  }
  &__title {
    font-family: $font__title;
    font-size: 24px;
    font-style: italic;
    font-weight: normal;
    line-height: 1.5;
    letter-spacing: 0.6px;
    @include xxs {
      font-size: 22px;
    }
  }
  & .description {
    font-weight: 500;
    letter-spacing: 0.35px;
    text-transform: uppercase;
    margin-top: 35px;
  }

  .slick-slider {
    position: static;
  }

  .slick-dots {
    // width: 70px;
    // margin: 0 auto;

    // display: flex !important;
    // justify-content: space-around;
    // align-items: center;

    position: absolute;
    bottom: 44px;
    // left: 50%;
    // transform: translateX(-50%);
  }
  .slick-dots li button {
    background: #5b5b5b;
    // border-radius: 50%;
    // font-size: 0;
    // width: 6px;
    // height: 6px;
  }
  .slick-dots li.slick-active button {
    background: $bg_color--white;
    // width: 10px;
    // height: 10px;
  }
}
</style>
