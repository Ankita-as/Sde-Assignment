<template>
  <div class="p-8">
    <h2 class="text-xl font-bold mb-4">Submit Your Answer</h2>

    <p class="mb-2 font-semibold">Logged in as: {{ auth.user?.email }}</p>

    <textarea
      v-model="answer"
      rows="10"
      class="w-full border p-2 mb-4"
      placeholder="Write your answer here..."
    ></textarea>

    <button class="bg-blue-600 text-white px-4 py-2 rounded" @click="submit">
      Submit
    </button>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth' // 🔒 Protect this route
});

import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';

const auth = useAuthStore();
const answer = ref('');

const submit = () => {
  if (!answer.value.trim()) {
    alert('Please write your answer before submitting.');
    return;
  }

  alert('Submitted:\n\n' + answer.value);

  // Optional Firestore saving logic goes here if needed
};
</script>
