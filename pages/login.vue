<script setup lang="ts">
import { useForm } from "laravel-precognition-vue";

useHead({
  title: 'Log In'
})

definePageMeta({
  layout: "guest",
});

defineProps({
  status: {
    type: String,
  },
  canResetPassword: {
    type: Boolean,
    default: true
  },
});


const form = useForm("post", "/login", {
  email: "",
  password: "",
  remember: false,
});

const submit = async () => {
  try {
    await form.submit();

    form.reset("password");
  } catch (error) {
    alert("An error occured");
  }
};
</script>

<template>
  <div>
    <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
      {{ status }}
    </div>

    <form @submit.prevent="submit">
      <div>
        <InputLabel for="email" value="Email" />

        <TextInput
          id="email"
          type="email"
          class="mt-1 block w-full"
          v-model="form.email"
          required
          autofocus
          autocomplete="username"
        />

        <InputError class="mt-2" :message="form.errors.email" />
      </div>

      <div class="mt-4">
        <InputLabel for="password" value="Password" />

        <TextInput
          id="password"
          type="password"
          class="mt-1 block w-full"
          v-model="form.password"
          required
          autocomplete="current-password"
        />

        <InputError class="mt-2" :message="form.errors.password" />
      </div>

      <div class="block mt-4">
        <label class="flex items-center">
          <Checkbox
            name="remember"
            class="w-3 h-3"
            v-model:checked="form.remember"
          />
          <span class="ml-2 text-sm text-gray-600">Remember me</span>
        </label>
      </div>

      <div class="flex items-center justify-end mt-4">
        <NuxtLink
          v-if="canResetPassword"
          :to="{ name: 'forgot-password' }"
          class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Forgot your password?
        </NuxtLink>

        <PrimaryButton
          class="ml-4"
          :class="{ 'opacity-25': form.processing }"
          :disabled="form.processing"
        >
          Log in
        </PrimaryButton>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
