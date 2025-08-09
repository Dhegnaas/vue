<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">
    <h2 class="text-2xl font-bold mb-6 text-center text-blue-700">Add New Customer</h2>

    <form @submit.prevent="createCustomer">
      <div class="mb-4">
        <label class="block mb-1 font-semibold">Name</label>
        <input v-model="form.name" type="text" class="w-full px-4 py-2 border rounded" required />
      </div>

      <div class="mb-4">
        <label class="block mb-1 font-semibold">Email</label>
        <input v-model="form.email" type="email" class="w-full px-4 py-2 border rounded" required />
      </div>

      <div class="mb-4">
        <label class="block mb-1 font-semibold">Phone</label>
        <input v-model="form.phone" type="text" class="w-full px-4 py-2 border rounded" />
      </div>

      <div class="mb-4">
        <label class="block mb-1 font-semibold">Address</label>
        <input v-model="form.address" type="text" class="w-full px-4 py-2 border rounded" />
      </div>

      <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full">
        Save Customer
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import apiClient from '../../apiClient'

const form = ref({
  name: '',
  email: '',
  phone: '',
  address: '',
})

const createCustomer = async () => {
  try {
    await apiClient.post('/customers', form.value)
    alert('Customer created successfully!')
    form.value = { name: '', email: '', phone: '', address: '' }
  } catch (err) {
    alert('Something went wrong: ' + (err.response?.data?.error || err.message))
  }
}
</script>
