<template>
  <main class="portfolio">
    <div class="wrapper">
      <div class="portfolio__filter-btn" @click="show = !show">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div v-if="show" class="portfolio__filters">
        <p class="descroption">
          <strong>Categories:</strong>
        </p>
        <div class="portfolio__filters-category">
          <p
            class="description"
            v-for="filterCategory in filterCategories"
            :key="filterCategory.name"
            @click="filterItemsByCategory(filterCategory.name)"
            :class="{
              'description--active': filterCategory.name === selectedCategory,
            }"
          >
            {{ filterCategory.name }}
          </p>
        </div>
      </div>
      <div class="portfolio__container">
        <PortfolioWork
          v-for="galleryItem in galleryItems"
          :key="galleryItem.url"
          :portfolioWork="galleryItem"
        />
      </div>
    </div>
  </main>
</template>
<script>
import PortfolioWork from "@/components/Portfolio-Work.vue";
import galleryItemsData from "../mocks/gallery-items";
export default {
  name: "portfolio",
  components: {
    PortfolioWork,
  },
  data() {
    return {
      filterCategories: [
        {
          name: "branding",
        },
        {
          name: "mockup",
        },
        {
          name: "photography",
        },
        {
          name: "design",
        },
        {
          name: "print",
        },
      ],
      selectedCategory: null,
      galleryItems: galleryItemsData,
      show: false,
      isClicked: false,
    };
  },
  methods: {
    filterItemsByCategory(category) {
      this.selectedCategory = category;
      this.galleryItems = galleryItemsData.filter((item) => {
        return item.subtitle === category;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.portfolio {
  padding: 67px 0 80px;
  background: $bg_color--white;
  &__filter-btn {
    @include flex(center, space-evenly);
    flex-wrap: wrap;
    gap: 4px;

    width: 25px;
    height: 25px;
    margin: 40px auto;
    span {
      width: 9px;
      height: 9px;
      background: $bg_color--black;
    }
  }
  &__filters {
    max-width: 760px;
    width: 100%;
    height: 150px;
    margin: 0 auto;
    animation: showFilters 0.5s;
    @media (max-width: 842px) {
      max-width: 370px;
      animation: showFiltersMobile 0.5s;
      height: 230px;
    }
  }
  &__filters-category {
    @include flex(center, space-between);

    width: 100%;
    padding-top: 40px;

    @media (max-width: 842px) {
      flex-direction: column;
      align-items: flex-start;

      padding-top: 20px;
    }

    .description {
      @include flex(center, center);

      width: 130px;
      padding: 3px 0;
      background: #d8d5d5cc;
      color: $font_color--black;
      border-radius: 7px;
      font-weight: 500;
      margin-bottom: 7px;
      cursor: pointer;

      &--active {
        background: #00000049;
      }
      @media (max-width: 842px) {
        width: 100%;
      }
    }
  }
  &__container {
    @include flex(center, center);
    flex-wrap: wrap;
    gap: 26px;

    width: 100%;
    .portfolio__gallery-item {
      height: 250px;
    }
  }
}
@keyframes showFilters {
  0% {
    height: 0px;
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  100% {
    height: 150px;
    opacity: 1;
  }
}
@keyframes showFiltersMobile {
  0% {
    height: 0px;
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  100% {
    height: 230px;
    opacity: 1;
  }
}
</style>
