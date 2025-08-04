<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">
    <h2 class="text-2xl font-bold mb-6 text-center text-blue-700">Edit User</h2>

    <form @submit.prevent="updateUser">
      <div class="mb-4">
        <label class="block mb-1 font-semibold">Name</label>
        <input v-model="form.name" type="text" class="w-full px-4 py-2 border rounded" required />
      </div>

      <div class="mb-4">
        <label class="block mb-1 font-semibold">Email</label>
        <input v-model="form.email" type="email" class="w-full px-4 py-2 border rounded" required />
      </div>

      <div class="mb-4">
        <label class="block mb-1 font-semibold">Password (Leave blank to keep unchanged)</label>
        <input v-model="form.password" type="password" class="w-full px-4 py-2 border rounded" />
      </div>

      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">
        Update User
      </button>

      <p v-if="message" class="text-green-600 text-center mt-4">{{ message }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const userId = route.params.id

const form = ref({
  name: '',
  email: '',
  password: '',
})

const message = ref('')

onMounted(async () => {
  try {
    const res = await axios.get(`http://localhost:8000/api/users/${userId}`)
    form.value.name = res.data.name
    form.value.email = res.data.email
  } catch (err) {
    message.value = 'Failed to load user data'
  }
})

const updateUser = async () => {
  try {
    const payload = { name: form.value.name, email: form.value.email }
    if (form.value.password) {
      payload.password = form.value.password
    }
    await axios.put(`http://localhost:8000/api/users/${userId}`, payload)
    message.value = 'User updated successfully!'
    router.push('/users')  // Redirect to users list page
  } catch (err) {
    message.value = err.response?.data?.error || 'Something went wrong'
  }
}
</script>
