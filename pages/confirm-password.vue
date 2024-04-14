<script setup lang="ts">
import { useForm } from "laravel-precognition-vue";

useHead({
  title: "Confirm Password",
});

definePageMeta({
  layout: "guest",
});

const form = useForm("post", "/forgot-password", {
  password: "",
});

const submit = async () => {
  try {
    await form.submit();

    form.reset();
  } catch (error) {
    alert("An error occured");
  }
};
</script>

<template>
  <div>
    <div class="mb-4 text-sm text-gray-600">
      This is a secure area of the application. Please confirm your password
      before continuing.
    </div>

    <form @submit.prevent="submit">
      <div>
        <InputLabel for="password" value="Password" />
        <TextInput
          id="password"
          type="password"
          class="mt-1 block w-full"
          v-model="form.password"
          required
          autocomplete="current-password"
          autofocus
        />
        <InputError class="mt-2" :message="form.errors.password" />
      </div>

      <div class="flex justify-end mt-4">
        <PrimaryButton
          class="ml-4"
          :class="{ 'opacity-25': form.processing }"
          :disabled="form.processing"
        >
          Confirm
        </PrimaryButton>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
