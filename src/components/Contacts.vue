<template>
  <section class="contacts">
    <div class="wrapper contacts__wrapper">
      <div class="contacts__info">
        <h2 class="title__main">Contact Info:</h2>
        <p class="description contacts__subtitle">
          Praesent interdum congue mauris, et fringilla lacus pel vitae. Quisque
          nisl mauris, aliquam eu ultrices vel, conse vitae sapien at imperdiet
          risus. Quisque cursus risus id. fermentum, in auctor quam consectetur.
        </p>
        <p class="contacts__info-description">
          <strong>Address: </strong>
          <a href="#">10111 Santa Monica Boulevard, LA</a>
        </p>
        <p class="description contacts__info-description">
          <strong>Phone: </strong>
          <a href="tel:+44 987 065 908">+44 987 065 908</a>
        </p>
        <p class="contacts__info-description">
          <strong>Email: </strong>
          <a href="mailto:angelinabelmega1408@gmail.com"
            >angelinabelmega1408@gmail.com</a
          >
        </p>
        <p class="contacts__info-description">
          <strong>Fax:</strong> <a href="#">+44 987 065 909</a>
        </p>
      </div>
      <ContactsForm />
    </div>
  </section>
</template>
<script>
import ContactsForm from "@/components/Contacts-Form.vue";
export default {
  name: "contacts",
  components: {
    ContactsForm,
  },
};
</script>
<style lang="scss" scoped>
.contacts {
  padding: 100px 0;
  background: $bg_color__white;
  position: relative;
  @include xs {
    padding-top: 70px;
  }
  &::before {
    content: "";
    position: absolute;
    height: 1px;
    width: 100%;
    background: #ececec;
    top: -5px;
  }
  &__wrapper {
    @include flex(center, space-between);
    gap: 30px;

    @include sm {
      flex-direction: column;
    }
  }
  &__info {
    max-width: 424px;
    @include sm {
      max-width: 670px;
      h2 {
        text-align: center;
        margin: 0 auto;
      }
    }
  }
  &__subtitle {
    padding: 42px 0 36px;
    @include sm {
      text-align: center;
      margin: 0 auto;
    }
  }
  &__info-description {
    display: block;

    padding-bottom: 15px;
    strong {
      color: $font_color--black;
    }
    a {
      font-family: $font__main;
      font-size: 15px;
      font-weight: normal;
      color: $font_color--gray;
      cursor: pointer;
      &:hover {
        color: $font_color--black;
        border-bottom: 1px solid $font_color--black;
      }
    }
  }
}
</style>
