import { defineStore } from 'pinia';
import { signInWithPopup, signOut } from 'firebase/auth';

interface User {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
  }),
  actions: {
    async login() {
      try {
        const { $auth, $provider } = useNuxtApp();
        const result = await signInWithPopup($auth, $provider);
        const u = result.user;

        this.user = {
          uid: u.uid,
          displayName: u.displayName,
          email: u.email,
          photoURL: u.photoURL,
        };
      } catch (err) {
        console.error('Login error:', err);
        throw err;
      }
    },

    async logout() {
      try {
        const { $auth } = useNuxtApp();
        await signOut($auth);
        this.user = null;
      } catch (err) {
        console.error('Logout error:', err);
        throw err;
      }
    },
  },
});
