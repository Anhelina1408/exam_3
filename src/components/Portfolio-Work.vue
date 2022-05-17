<template>
  <router-link
    tag="div"
    class="portfolio__gallery-item"
    :class="{ 'portfolio__gallery-item--big': portfolioItem.isBig }"
    :style="{ backgroundImage: `url(${portfolioItem.url})` }"
    :to="{ name: 'portfolioItem', params: { portfolioId: portfolioItem.id } }"
  >
    <div class="portfolio__gallery-info">
      <p class="title title--small">{{ portfolioItem.title }}</p>
      <p class="portfolio__info-description description">
        {{ portfolioItem.subtitle }}
      </p>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "PortfolioWork",
  props: ["portfolioWork"],
  data() {
    return {
      portfolioItem: this.portfolioWork,
    };
  },
};
</script>
<style lang="scss">
.portfolio {
  &__gallery-item {
    width: 370px;
    height: 250px;
    background-size: 100%;
    background-position-y: center;
    cursor: pointer;

    &--big {
      height: 530px;
      grid-row: span 2;
      cursor: pointer;
      @media (max-width: 1250px) {
        height: 250px;
      }
    }
  }
  &__gallery-info {
    @include flex(center, center);
    flex-direction: column;
    gap: 25px;

    width: 100%;
    height: 100%;
    background-color: #ffffffab;
    transition: opacity 0.3s ease-in;
    opacity: 0;
    position: relative;
    &:hover {
      opacity: 1;
      p {
        animation: textSlideIn 0.4s ease-in;
      }
    }
  }
  &__info-description {
    text-transform: uppercase;
  }
}

@keyframes textSlideIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
