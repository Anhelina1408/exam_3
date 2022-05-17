<template>
  <form @submit.prevent="handleSubmit" class="contacts__form">
    <div class="contacts__form-text">
      <div class="contacts__form-item">
        <input
          v-model="userForm.name"
          class="contacts__form-area"
          type="text"
          placeholder="Your Name"
          :class="{ 'contacts__form-area--invalid': $v.userForm.name.$error }"
        />
        <div v-if="$v.userForm.name.$error" class="active">
          <span v-if="!$v.userForm.name.required">Name field is required</span>
          <span v-else-if="!$v.userForm.name.alpha"
            >Numbers are not allowed</span
          >
        </div>
      </div>
      <div class="contacts__form-item">
        <input
          v-model="userForm.email"
          class="contacts__form-area"
          type="text"
          placeholder="Your Email"
          :class="{ 'contacts__form-area--invalid': $v.userForm.email.$error }"
        />
        <div v-if="$v.userForm.email.$error" class="active">
          <span v-if="!$v.userForm.email.required"
            >Email field is required</span
          >
          <span v-if="!$v.userForm.email.email"
            >Please provide valid email</span
          >
        </div>
      </div>
    </div>
    <div class="contacts__form-item">
      <input
        v-model="userForm.title"
        class="contacts__form-area"
        type="text"
        placeholder="Your Title"
        :class="{ 'contacts__form-area--invalid': $v.userForm.title.$error }"
      />
      <div v-if="$v.userForm.title.$error" class="active">
        <span v-if="!$v.userForm.title.required">Title field is required</span>
      </div>
    </div>
    <div class="contacts__form-item">
      <textarea
        v-model="userForm.comment"
        class="contacts__form-area"
        cols="30"
        rows="10"
        placeholder="Your Comment"
        :class="{ 'contacts__form-area--invalid': $v.userForm.comment.$error }"
      ></textarea>
      <div v-if="$v.userForm.comment.$error" class="active">
        <span v-if="!$v.userForm.comment.required"
          >Comment field is required</span
        >
      </div>
    </div>
    <button class="contacts__form-button" type="submit">send message</button>
  </form>
</template>
<script>
import { required, email, alpha } from "vuelidate/lib/validators";
export default {
  name: "contactsForm",
  data() {
    return {
      userForm: {
        name: "",
        email: "",
        title: "",
        comment: "",
      },
    };
  },
  validations: {
    userForm: {
      name: {
        required,
        alpha,
      },
      email: {
        required,
        email,
      },
      title: {
        required,
      },
      comment: {
        required,
      },
    },
  },
  methods: {
    handleSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      alert("SUCCESS!" + JSON.stringify(this.userForm));
    },
  },
};
</script>
<style lang="scss" scoped>
.contacts {
  &__form {
    display: flex;
    flex-direction: column;
    gap: 30px;

    max-width: 670px;
    width: 100%;
    textarea {
      max-height: 170px;
    }
  }
  &__form-item {
    width: 100%;
    position: relative;
  }
  &__form-area {
    border: none;
    width: 100%;
    padding: 19px 20px;
    font-size: 14px;
    letter-spacing: 0.5px;
    color: #858585;
    &:hover {
      outline: 1px solid #85858581;
    }
    &:focus-visible {
      outline: 1px solid $font_color--gray;
    }
    &--invalid {
      outline: 1px solid rgba(255, 0, 0, 0.466);
    }
  }
  & input:not(:last-child) {
    height: 48px;
  }
  & .contacts__form-text {
    @include flex(center, space-between);
    gap: 20px;
    @include sm {
      flex-direction: column;
      gap: 30px;
    }

    input {
      height: 48px;
      width: 100%;
    }
  }
  &__form-button {
    width: 180px;
    height: 54px;
    background: #252525;
    border: none;
    text-transform: uppercase;
    color: $font_color--white;
    cursor: pointer;
    transition: 0.5s all;
    &:hover {
      background: #0e0d0d;
    }
    @include sm {
      margin: 0 auto;
    }
  }
}
.active {
  display: block;

  span {
    position: absolute;
    bottom: -20px;
    font-size: 14px;
  }
}
</style>
