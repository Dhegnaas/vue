<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">
    <h2 class="text-2xl font-bold mb-6 text-center text-blue-700">Add New Sale</h2>

    <form @submit.prevent="createSale">
      <div class="mb-4">
        <label class="block mb-1 font-semibold">Product</label>
        <select v-model="form.product_id" class="w-full px-4 py-2 border rounded" required>
          <option value="" disabled>Select a product</option>
          <option v-for="product in products" :key="product.id" :value="product.id">
            {{ product.name }} - ${{ product.price }}
          </option>
        </select>
      </div>

      <div class="mb-4">
        <label class="block mb-1 font-semibold">Quantity</label>
        <input v-model.number="form.quantity" type="number" min="1" class="w-full px-4 py-2 border rounded" required />
      </div>

      <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-700">
        Save Sale
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const products = ref([])
const form = ref({
  product_id: '',
  quantity: 1,
})

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:8000/api/products')
    products.value = res.data
  } catch (error) {
    alert('Failed to load products')
  }
})

const createSale = async () => {
  try {
    await axios.post('http://localhost:8000/api/sales', form.value)
    alert('Sale recorded successfully!')
    form.value = { product_id: '', quantity: 1 }
  } catch (err) {
    alert('Error: ' + (err.response?.data?.error || err.message))
  }
}
</script>
