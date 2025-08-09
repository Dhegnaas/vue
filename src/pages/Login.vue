<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <form @submit.prevent="login" class="bg-white p-8 rounded shadow-md w-full max-w-sm">
      <h2 class="text-2xl mb-6 text-center font-bold text-blue-700">Login</h2>

      <div class="mb-4">
        <label class="block mb-1 font-semibold">Email</label>
        <input v-model="email" type="email" required class="w-full px-4 py-2 border rounded" />
      </div>

      <div class="mb-6">
        <label class="block mb-1 font-semibold">Password</label>
        <input v-model="password" type="password" required class="w-full px-4 py-2 border rounded" />
      </div>

      <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold">
        Login
      </button>

      <p v-if="error" class="text-red-600 mt-4 text-center">{{ error }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const login = async () => {
  error.value = ''
  try {
    const res = await axios.post('http://localhost:8000/api/login', {
      email: email.value,
      password: password.value,
    })
    localStorage.setItem('token', res.data.token)
    router.push('/customers')
  } catch (err) {
    error.value = err.response?.data?.message || 'Login failed'
  }
}
</script>
