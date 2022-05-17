<template>
  <footer class="footer">
    <div class="wrapper footer__wrapper">
      <div class="footer__about-us">
        <h2 class="title title--small title--white">About Us</h2>
        <p class="description description--white">
          Aenean mattis augue in arcu tempor bibendum. Nam euismod facilisis
          magna, quis pharetra turpis molestie eu. Integer feugiat arcu sit amet
          leo ullamcorper feugiat efficitur.
        </p>
        <ul class="footer__socials-list">
          <li
            v-for="footerListItem in footerListItems"
            :key="footerListItem.icon"
          >
            <a class="footer__socials-item" href="#"
              ><font-awesome-icon :icon="footerListItem.icon"
            /></a>
          </li>
        </ul>
      </div>
      <div class="footer__latest-twits">
        <h2 class="title title--small title--white">Latest Twits</h2>
        <p
          class="description description--white"
          v-for="footerTwitsItem in footerTwitsItems"
          :key="footerTwitsItem.icon"
        >
          <font-awesome-icon
            icon="fa-brands fa-twitter"
            class="footer__latest-twits-icon"
          />
          {{ footerTwitsItem.text }}
        </p>
      </div>
      <div class="footer__insta">
        <h2 class="title title--small title--white">Instagram</h2>
        <ul class="footer__insta-list">
          <li
            v-for="footerInstaListItem in footerInstaListItems"
            :key="footerInstaListItem.icon"
          >
            <img :src="footerInstaListItem.img" alt="image" />
          </li>
        </ul>
      </div>
    </div>
    <p class="footer__author-info description description--white">
      © 2022. Design by Unvab. Code by Anhelina Belmeha
    </p>
  </footer>
</template>
<script>
export default {
  name: "footerNav",
  data() {
    return {
      footerListItems: [
        {
          icon: "fa-brands fa-facebook-f",
        },
        {
          icon: "fa-brands fa-twitter",
        },
        {
          icon: "fa-brands fa-google",
        },
        {
          icon: "fa-brands fa-instagram",
        },
        {
          icon: "fa-brands fa-telegram",
        },
      ],
      footerTwitsItems: [
        {
          text: " Duis eget finibus nibh. Vivamus sagittis vulputate risus ac tincidunt.",
        },
        {
          text: " Nam semper tortor sit amet arcu malesu ada, a sagittis tellus facilisis.",
        },
        {
          text: " Etiam cursus, tortor id pretium tincidunt, justo leo porta magna.",
        },
      ],
      footerInstaListItems: [
        {
          img: require("@/assets/image/footer-insta-1.jpg"),
        },
        {
          img: require("@/assets/image/footer-insta-2.jpg"),
        },
        {
          img: require("@/assets/image/footer-insta-3.jpg"),
        },
        {
          img: require("@/assets/image/footer-insta-4.jpg"),
        },
        {
          img: require("@/assets/image/footer-insta-5.jpg"),
        },
        {
          img: require("@/assets/image/footer-insta-6.jpg"),
        },
        {
          img: require("@/assets/image/footer-insta-7.jpg"),
        },
        {
          img: require("@/assets/image/footer-insta-8.jpg"),
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.footer {
  background-image: url("@/assets/image/footer-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 483px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    background: $bg_color--black;
    opacity: 0.9;
    z-index: 1;
  }

  &__wrapper {
    @include flex(flex-start, space-between);

    padding: 63px 0 83px;
    position: relative;
    z-index: 2;
    @include lg {
      flex-direction: column;

      padding-top: 30px;
    }
  }
  &__about-us {
    max-width: 356px;
  }
  & .title {
    margin: 30px 0 38px;
    @include lg {
      margin: 20px 0 18px;
    }
  }
  & .description {
    font-family: $font__title;
    letter-spacing: 0.5px;
  }
  &__socials-list {
    @include flex(center, space-between);

    max-width: 150px;
    width: 100%;
    margin-top: 43px;
    @include lg {
      margin-top: 13px;
    }
  }
  &__socials-item {
    color: $font_color--white;
  }
  &__latest-twits {
    max-width: 343px;
    width: 100%;
  }
  &__latest-twits-icon {
    margin-right: 18px;
  }
  &__insta {
    max-width: 375px;
    width: 100%;

    @include lg {
      max-width: 230px;
    }
  }
  &__insta-list {
    @include flex(flex-start, space-between);
    flex-wrap: wrap;
    gap: 10px;

    cursor: pointer;

    li img {
      @include lg {
        width: 50px;
        height: 50px;
      }
    }
  }
  &__about-us,
  &__latest-twits {
    @include lg {
      max-width: none;
    }
  }
  &__author-info {
    position: relative;
    z-index: 2;
    padding: 30px 0 26px;
    text-align: center;
    border-top: 1px solid #ffffff52;
  }
}
</style>
