<template>
  <main class="portfolio-item">
    <div class="wrapper portfolio-item__wrapper" v-if="currentPortfolio">
      <div
        class="portfolio-item__img"
        :style="{ backgroundImage: `url(${currentPortfolio.url})` }"
      ></div>
      <div class="portfolio-item__container">
        <h2 class="title title-main portfolio-item__title">
          {{ currentPortfolio.title }}
        </h2>
        <p class="description">
          {{ currentPortfolio.description }}
        </p>
        <div class="portfolio-item__details">
          <p class="description">
            <strong>Client:</strong> {{ currentPortfolio.client }}
          </p>
          <p class="description">
            <strong>Date:</strong> {{ currentPortfolio.date }}
          </p>
          <p class="description">
            <strong>Share:</strong> {{ currentPortfolio.share }}
          </p>
        </div>
      </div>
    </div>
    <div class="portfolio-item__btn">
      <router-link
        tag="button"
        :disabled="currentItemIndex - 1 < 0"
        :to="{
          name: 'portfolioItem',
          params: {
            portfolioId:
              currentItemIndex - 1 >= 0
                ? currentItems[currentItemIndex - 1].id
                : null,
          },
        }"
      >
        <font-awesome-icon icon="fa-solid fa-angle-left" />
      </router-link>
      <router-link
        tag="button"
        :disabled="currentItemIndex + 1 >= currentItems.length - 1"
        :to="{
          name: 'portfolioItem',
          params: {
            portfolioId:
              currentItemIndex + 1 < currentItems.length - 1
                ? currentItems[currentItemIndex + 1].id
                : null,
          },
        }"
      >
        <font-awesome-icon icon="fa-solid  fa-angle-right" />
      </router-link>
    </div>
  </main>
</template>
<script>
import galleryItemsData from "../mocks/gallery-items";
export default {
  name: "portfolioItem",
  data() {
    return {
      currentItemIndex: null,
      currentItems: galleryItemsData,
    };
  },
  computed: {
    currentPortfolio: function () {
      return this.getCurrentPortfolioItem(this.$route.params.portfolioId);
    },
  },
  methods: {
    getCurrentPortfolioItem(id) {
      this.currentItemIndex = galleryItemsData.findIndex(
        (item) => item.id === +id
      );
      return galleryItemsData[this.currentItemIndex];
    },
  },
};
</script>
<style lang="scss" scoped>
.portfolio-item {
  padding: 100px 0 50px;
  //   background: $bg_color--white;
  &__wrapper {
    @include flex(center, space-between);
    gap: 30px;
    @include lg {
      flex-direction: column;
    }
  }
  &__img {
    background-image: url("@/assets/image/portfolio-2.jpg");
    width: 600px;
    height: 450px;
    background-size: 100%;
    background-position-y: center;
    @include sm {
      width: 80vw;
      height: 350px;
    }
    @include xxs {
      height: 200px;
    }
  }
  &__container {
    @include flex(flex-start, space-between);
    flex-direction: column;
    gap: 50px;

    max-width: 40%;
    padding: 30px;
    @include lg {
      max-width: 85%;
    }
  }
  &__title {
    @include lg {
      text-align: center;
      margin: 0 auto;
    }
  }
  &__btn {
    @include flex(center, space-between);

    width: 90%;
    margin: 15px auto 0;
    button {
      width: 50px;
      height: 50px;
      background: #d8d5d5cc;
      color: $font_color--black;
      border-radius: 50%;
      cursor: pointer;
      &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }
    }
  }
}
</style>
