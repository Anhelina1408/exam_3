<template>
  <section class="projects">
    <div class="wrapper">
      <h2 class="title title--centred">Best Projects</h2>
      <p class="projects__description description description--centred">
        Donec orci sem, pretium ac dolor et, faucibus faucibus mauris.
        Etiam,pellentesque faucibus. Vestibulum gravida volutpat ipsum non
        ultrices.
      </p>
      <div class="projects__container">
        <!-- <div
          class="projects__gallery-item"
          v-for="galleryItem in galleryItems"
          :key="galleryItem.url"
          :class="{ 'projects__gallery-item--big': galleryItem.isBig }"
          :style="{ backgroundImage: `url(${galleryItem.url})` }"
        >
          <div class="projects__gallery-info">
            <p class="title title--small">{{ galleryItem.title }}</p>
            <p class="projects__info-description description">
              {{ galleryItem.subtitle }}
            </p>
          </div>
        </div>
      </div> -->
        <PortfolioWork
          v-for="galleryItem in galleryItems"
          :key="galleryItem.url"
          :portfolioWork="galleryItem"
        />
      </div>
    </div>
  </section>
</template>

<script>
import PortfolioWork from "@/components/Portfolio-Work.vue";
import galleryItemsData from "../mocks/gallery-items";
export default {
  name: "Projects",
  components: {
    PortfolioWork,
  },
  data() {
    return {
      galleryItems: galleryItemsData.filter(
        (galleryItem) => galleryItem.visibleOnHome
      ),
    };
  },
};
</script>
<style lang="scss" scoped>
.projects {
  padding: 92px 0;
  background: $bg_color--white;
  &__description {
    max-width: 688px;
    padding: 37px 20px 57px;
  }
  &__container {
    display: grid;
    grid-template: repeat(4, 250px) / repeat(3, 1fr);
    gap: 30px;

    @media (max-width: 1250px) {
      @include flex(center, center);
      flex-wrap: wrap;
      background-size: contain;
    }
  }
  // &__gallery-item {
  //   width: 370px;
  //   height: 250px;
  //   background-size: 100%;
  //   background-position-y: center;
  //   cursor: pointer;

  //   &--big {
  //     height: 530px;
  //     grid-row: span 2;
  //     cursor: pointer;
  //     @media (max-width: 1250px) {
  //       height: 250px;
  //     }
  //   }
  // }
  // &__gallery-info {
  //   @include flex(center, center);
  //   flex-direction: column;
  //   gap: 25px;

  //   width: 100%;
  //   height: 100%;
  //   background-color: #ffffffab;
  //   transition: opacity 0.3s ease-in;
  //   opacity: 0;
  //   position: relative;
  //   &:hover {
  //     opacity: 1;
  //     p {
  //       animation: textSlideIn 0.4s ease-in;
  //     }
  //   }
  // }
  // &__info-description {
  //   text-transform: uppercase;
  // }
}

// @keyframes textSlideIn {
//   from {
//     opacity: 0;
//     transform: translateY(10px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// }
</style>
