<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">
    <h2 class="text-2xl font-bold mb-6 text-center text-blue-700">Add New Product</h2>
    <form @submit.prevent="createProduct">
      <div class="mb-4">
        <label class="block mb-1 font-semibold">Name</label>
        <input v-model="form.name" type="text" class="w-full px-4 py-2 border rounded" required />
      </div>

      <div class="mb-4">
        <label class="block mb-1 font-semibold">Price</label>
        <input v-model="form.price" type="number" class="w-full px-4 py-2 border rounded" required />
      </div>

      <div class="mb-4">
        <label class="block mb-1 font-semibold">Quantity</label>
        <input v-model="form.quantity" type="number" class="w-full px-4 py-2 border rounded" required />
      </div>

      <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-700">
        Save Product
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const form = ref({
  name: '',
  price: 0,
  quantity: 0,
})

const createProduct = async () => {
  try {
    await axios.post('http://localhost:8000/api/products', form.value)
    alert('Product created successfully!')
    form.value = { name: '', price: 0, quantity: 0 }
  } catch (err) {
    alert('Something went wrong: ' + (err.response?.data?.error || err.message))
  }
}
</script>
