<template>
  <div class="login-form">
    <h5 class="text-center">Chat Login</h5>
    <hr />
    <b-form @submit.prevent="onSubmit">
      <b-alert :show="hasError" variant="danger">{{ error }}</b-alert>
      <b-form-group id="userInputGroup" label="User Name">
        <b-form-input
          id="userInput"
          autocomplete="off"
          v-model="userId"
          :disabled="loading"
          type="text"
          placeholder="Enter user name"
          required
        />
      </b-form-group>
      <b-button
        type="submit"
        variant="primary"
        :disabled="isValid"
        class="ld-ext-right"
        :class="{ running: loading }"
        >Login
        <div class="ld ld-ring ld-spin"
      /></b-button>
    </b-form>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "login-form",
  data() {
    return {
      userId: ""
    };
  },
  computed: {
    isValid() {
      return this.userId.length < 3 || this.loading;
    },
    ...mapState(["loading", "error"]),
    ...mapGetters(["hasError"])
  },
  methods: {
    onSubmit() {}
  }
};
</script>
