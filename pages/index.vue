<template>
  <div class="p-8">
    <!-- Show Login Button if not authenticated -->
    <LoginButton v-if="!auth.user" />

    <!-- Show welcome and content if authenticated -->
    <div v-else>
      <h2 class="text-xl font-bold mb-4">Welcome, {{ auth.user.displayName }}</h2>

      <p class="mb-2 font-semibold">Programming Question:</p>
      <p class="mb-4">Write a function to print the first 100 prime numbers.</p>

      <NuxtLink to="/submit">
        <button class="bg-green-600 text-white px-4 py-2 rounded mr-4">Submit your answer</button>
      </NuxtLink>

      <!-- Logout Button -->
      <button @click="auth.logout" class="bg-red-600 text-white px-4 py-2 rounded">
        Logout
      </button>
    </div>
  </div>
</template>

<script setup>
import LoginButton from '@/components/LoginButton.vue';
import { useAuthStore } from '@/stores/auth';

const auth = useAuthStore();
</script>
