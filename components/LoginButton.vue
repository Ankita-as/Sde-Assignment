<template>
  <div>
    <button @click="login" class="bg-blue-600 text-white px-4 py-2 rounded">
      Sign in with Google
    </button>
  </div>
</template>

<script setup lang="ts">
import { signInWithPopup } from 'firebase/auth';
import { useNuxtApp } from '#app';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
const { $auth, $provider } = useNuxtApp();

const login = async () => {
  try {
    const result = await signInWithPopup($auth, $provider);
    const user = result.user;

    // Update store (optional)
    authStore.setUser({
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL
    });

    console.log('User signed in:', user);
  } catch (error) {
    console.error('Error during sign-in:', error);
  }
};
</script>
