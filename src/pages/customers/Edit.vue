<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <div class="w-full max-w-md bg-white rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-bold text-center text-blue-700 mb-6">Edit Customer</h2>

      <form @submit.prevent="updateCustomer">
        <div class="mb-4">
          <label class="block font-medium mb-1">Name</label>
          <input v-model="form.name" type="text" class="w-full px-4 py-2 border rounded" required />
        </div>

        <div class="mb-4">
          <label class="block font-medium mb-1">Email</label>
          <input v-model="form.email" type="email" class="w-full px-4 py-2 border rounded" required />
        </div>

        <div class="mb-4">
          <label class="block font-medium mb-1">Phone</label>
          <input v-model="form.phone" type="text" class="w-full px-4 py-2 border rounded" />
        </div>

        <div class="mb-4">
          <label class="block font-medium mb-1">Address</label>
          <input v-model="form.address" type="text" class="w-full px-4 py-2 border rounded" />
        </div>

        <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Update
        </button>

        <p v-if="message" class="text-green-600 text-center mt-4">{{ message }}</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import apiClient from '../../apiClient'

const route = useRoute()
const id = route.params.id

const form = ref({
  name: '',
  email: '',
  phone: '',
  address: '',
})

const message = ref('')

onMounted(async () => {
  try {
    const res = await apiClient.get(`/customers/${id}`)
    form.value = res.data
  } catch (err) {
    message.value = 'Failed to load customer data'
  }
})

const updateCustomer = async () => {
  try {
    await apiClient.put(`/customers/${id}`, form.value)
    message.value = 'Customer updated successfully!'
  } catch (err) {
    message.value = err.response?.data?.error || 'Something went wrong'
  }
}
</script>
