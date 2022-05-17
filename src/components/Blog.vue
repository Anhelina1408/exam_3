<template>
  <section class="blog">
    <div class="wrapper">
      <h2 class="title__main title--centred">Latest Blog</h2>
      <p class="description description--centred blog__description">
        Donec orci sem, pretium ac dolor et, faucibus faucibus mauris.
        Etiam,pellentesque faucibus. Vestibulum gravida volutpat ipsum non
        ultrices.
      </p>
      <VueSlickCarousel v-bind="slickOptions">
        <div
          class="blog__slider"
          v-for="blogSliderItem in blogSliderItems"
          :key="blogSliderItem.title"
        >
          <div class="blog__slider-item">
            <div class="blog__img">
              <img :src="blogSliderItem.img" alt="blog-img" />
              <span
                class="blog__slider-item-topic description description--white"
                >{{ blogSliderItem.topic }}</span
              >
            </div>
            <div class="blog__slider-conteiner">
              <h2 class="title title--small blog__title">
                {{ blogSliderItem.title }}
              </h2>
              <span> {{ blogSliderItem.date }}</span>
              <p class="description">
                {{ blogSliderItem.subtitle }}
              </p>
            </div>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </section>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
export default {
  name: "blog",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      blogSliderItems: [
        {
          img: require("@/assets/image/post-1-mid.jpg"),
          topic: "Design",
          title: "Something I need to tell you",
          date: "May 16, 2016",
          subtitle: `Mauris sed odio tincidunt, volutpat augue,commodo dui. Phasellus hendrerit condintum vehicula.`,
        },
        {
          img: require("@/assets/image/post-2-mid.jpg"),
          topic: "Nature",
          title: "Are you doing The Right Way?",
          date: "May 28, 2016",
          subtitle: `Curabitur et diam ut magna pulvinar euismod. Sed metus purus, ornare id moltie, laoreet vitae magna.`,
        },
        {
          img: require("@/assets/image/post-3-mid.jpg"),
          topic: "Branding",
          title: "Why you should Always First",
          date: "june 01, 2016",
          subtitle: `Mauris sed odio tincidunt, volutpat augue, commodo dui. Phasellus hendrerit condintum vehicula.`,
        },
        {
          img: require("@/assets/image/post-4-mid.jpg"),
          topic: "Design",
          title: "Here’s a Simple Trick",
          date: " January 1, 2017",
          subtitle: ` First, them tree you're Was. Give shall Unto earth above very one him own fruit...`,
        },
        {
          img: require("@/assets/image/post-5-mid.jpg"),
          topic: "Nature",
          title: "The History of Nature",
          date: " January 1, 2017",
          subtitle: ` The. Tree lights herb you their one rule. Given above every gathered so likeness fowl...`,
        },
        {
          img: require("@/assets/image/post-6-mid.jpg"),
          topic: "Branding",
          title: "Are you doing the Right Way?",
          date: " January 1, 2017",
          subtitle: ` You that subdue them abundantly forth morning were god a, that very day. Said seasons...`,
        },
        {
          img: require("@/assets/image/post-7-mid.jpg"),
          topic: "Design",
          title: "Something I need to tell you",
          date: "May 16, 2016",
          subtitle: `Mauris sed odio tincidunt, volutpat augue, commodo dui.Phasellus hendrerit condintum vehicula.`,
        },
        {
          img: require("@/assets/image/post-8-mid.jpg"),
          topic: "Nature",
          title: "Here’s a Simple Trick",
          date: " January 1, 2017",
          subtitle: ` First, them tree you're Was. Give shall Unto earth above very one him own fruit...`,
        },
        {
          img: require("@/assets/image/post-9-mid.jpg"),
          topic: "Branding",
          title: "The History of Nature",
          date: " January 1, 2017",
          subtitle: ` The. Tree lights herb you their one rule. Given above every gathered so likeness fowl...`,
        },
      ],
      slickOptions: {
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        swipeToSlide: true,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 1500,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 638,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: false,
            },
          },
        ],
      },
    };
  },
};
</script>
<style lang="scss">
.blog {
  padding-top: 95px;
  position: relative;
  min-height: 900px;
  background: $bg_color--white;
  .wrapper {
    padding: 0;
  }
  &__description {
    padding: 34px 0 57px;
    max-width: 688px;
    width: 100%;
  }

  &__slider-item {
    max-width: 370px;
    width: 100%;
    margin: 0 10px;
    background: #ffffff;
    cursor: grab;
    @include lg {
      max-width: 280px;
    }
  }
  &__img {
    width: 100%;
    height: 100%;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &__slider-item-topic {
    @include flex(center, center);
    position: absolute;
    bottom: 9px;
    left: 10px;
    width: 90px;
    height: 30px;
    background: #252525;
  }
  &__slider-conteiner {
    @include flex(flex-start, flex-start);
    flex-direction: column;
    height: 215px;
    padding: 24px 30px;
    span {
      padding: 10px 0 12px;
    }
  }
  &__title {
    height: 40px;
  }
  .slick-slider {
    @include lg {
      width: 900px;
      margin: 0 auto;
    }
    @include sm {
      width: 600px;
    }
    @media (max-width: 638px) {
      width: 300px;
    }
  }

  .slick-dots {
    position: absolute;
    bottom: -61px;
    @include sm {
      width: 109px;
    }
  }
  .slick-dots li button {
    background: #d1d1d1;
  }
  .slick-dots li.slick-active button {
    background: $font_color--black;
  }
}
</style>
