<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/blog">Blog</router-link>
    <router-link to="/portfolio">Portfolio</router-link>
  </nav> -->
  <header
    class="header"
    :class="{ 'header--colored': (isScrolled && isHome) || !isHome }"
  >
    <div class="wrapper">
      <nav class="header__nav">
        <div class="header__logo">
          <img src="@/assets/image/logo-light.svg" alt="logo" />
        </div>
        <ul class="header__list">
          <li class="header__list-item" v-for="item in items" :key="item.name">
            <router-link :to="{ name: item.pathName }"
              >{{ item.name }}
            </router-link>
          </li>
        </ul>
        <div
          class="header__burger-icon menu"
          @click="show = !show"
          key="menu"
          :class="show ? 'header__burger-icon--active' : ''"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul v-if="show" name="fade" class="header__burger">
          <li
            class="header__list-item header__burger-item"
            v-for="item in items"
            :key="item.name"
          >
            <router-link :to="{ name: item.pathName }"
              >{{ item.name }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ["scrollPosition", "routeName"],
  data() {
    return {
      items: [
        {
          name: "Home",
          pathName: "home",
        },
        {
          name: "Work",
          pathName: "portfolio",
        },
        {
          name: "About",
          pathName: "blog",
        },
        {
          name: "Blog",
          pathName: "blog",
        },
        {
          name: "Contacts",
          pathName: "blog",
        },
      ],
      show: false,
    };
  },
  computed: {
    isScrolled: function () {
      return this.scrollPosition > 150;
    },
    isHome: function () {
      return this.routeName === "home";
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 20px 0 10px;
  width: 100vw;
  position: fixed;
  z-index: 999;
  top: 0;

  &--colored {
    background: linear-gradient(
      90deg,
      rgb(82, 74, 74),
      rgb(44, 42, 42),
      rgb(17, 17, 17),
      #000000ed 100%
    );
  }
  &__nav {
    @include flex(center, space-between);
    width: 100%;
  }
  &__logo {
    max-width: 82px;
    width: 100%;
    img {
      width: 100%;
    }
  }
  &__list {
    @include flex(center, space-between);

    max-width: 600px;
    width: 100%;
    position: relative;

    @include sm {
      max-width: 500px;
    }
    @include xs {
      display: none;
    }
  }
  &__list-item {
    a {
      color: $font_color--white;
      font-family: $font__main;
      text-transform: uppercase;
    }
  }
  &__burger {
    position: absolute;
    top: 80px;
    right: 0;
    width: 200px;

    display: none;
    @include xs {
      display: block;
      animation: menuPopUp 0.5s;
    }
  }
  &__burger-item {
    background: $bg_color--dark;
    height: 30px;
    width: 100%;
    margin-top: 2px;
    a {
      display: block;

      width: 100%;
      height: 100%;
      padding: 4px 0 0 20px;
      letter-spacing: 2px;
    }
  }
  &__burger-icon {
    flex-direction: column;
    display: none;
    @include xs {
      @include flex(center, space-between);
    }

    width: 40px;
    height: 40px;
    transition: transform 2s cubic-bezier(0.445, 0.05, 0.55, 0.95),
      opacity 300ms linear;

    &--active {
      span {
        &:first-child {
          transform: translate(0, 18px) rotate(45deg);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:last-child {
          transform: translate(0, -20px) rotate(-45deg);
        }
      }
    }
    span {
      width: 100%;
      height: 2px;
      background-color: $bg_color--white;
      transition: transform 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95),
        opacity 300ms linear;
    }
  }
}

@keyframes menuPopUp {
  from {
    right: -100%;
  }
  to {
    right: 0;
  }
}
</style>
