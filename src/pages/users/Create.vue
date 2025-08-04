<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">
    <h2 class="text-2xl font-bold mb-6 text-center text-blue-700">Add New User</h2>

    <form @submit.prevent="createUser">
      <div class="mb-4">
        <label class="block mb-1 font-semibold">Name</label>
        <input v-model="form.name" type="text" class="w-full px-4 py-2 border rounded" required />
      </div>

      <div class="mb-4">
        <label class="block mb-1 font-semibold">Email</label>
        <input v-model="form.email" type="email" class="w-full px-4 py-2 border rounded" required />
      </div>

      <div class="mb-4">
        <label class="block mb-1 font-semibold">Password</label>
        <input v-model="form.password" type="password" class="w-full px-4 py-2 border rounded" required />
      </div>

      <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-700">
        Save User
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const form = ref({
  name: '',
  email: '',
  password: '',
})

const createUser = async () => {
  try {
    await axios.post('http://localhost:8000/api/users', form.value)
    alert('User created successfully!')
    form.value = { name: '', email: '', password: '' }
  } catch (err) {
    alert('Error: ' + (err.response?.data?.error || err.message))
  }
}
</script>
