<template>
  <ul class="about__list">
    <li class="about__list-item" v-for="item in items" :key="item.name">
      <i><font-awesome-icon :icon="item.img" /></i>
      <div class="about__description">
        <p class="description description--white">{{ item.number }}</p>
        <p class="description description--white">{{ item.name }}</p>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: "AboutRewiew",
  data() {
    return {
      items: [
        {
          name: "PROJECTS COMPLETED",
          number: 548,
          img: "fa-solid fa-briefcase",
        },
        {
          name: "WORKING HOURS",
          number: 919,
          img: "fa-solid fa-clock-four",
        },
        {
          name: "POSITIVE FEEDBACKS",
          number: 612,
          img: "fa-solid fa-star",
        },
        {
          name: "HAPPY CLIENTS",
          number: 735,
          img: "fa-solid fa-heart",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.about {
  &__list {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template: 1fr / repeat(4, 250px);
    gap: 60px;

    width: 100%;
    min-height: 258px;
    margin-top: 50px;
    padding-left: 20px;

    background: url("@/assets/image/black-bg.jpg") 100%;

    @include lg {
      grid-template-columns: repeat(4, 231px);
      gap: 14px;
    }
    @include sm {
      justify-content: space-around;
      grid-template: 2fr / repeat(2, 250px);
    }
    @include xxs {
      grid-template: 4fr / 230px;
    }
  }
  &__list-item {
    @include flex(center, center);
    gap: 20px;

    padding-top: 16px;
    height: 119px;
    @include xxs {
      justify-content: start;
    }
    i {
      font-size: 30px;
      color: $font_color--white;
    }
  }
  &__description p {
    letter-spacing: 0.3px;
    cursor: pointer;
    &:first-child {
      font-size: 18px;
      font-weight: 400;
    }
    &:last-child {
      font-weight: 500;
      position: relative;
      &:hover:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: $font_color--white;
      }
    }
  }
}
</style>
