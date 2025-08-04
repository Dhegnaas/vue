<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">
    <h2 class="text-2xl font-bold mb-6 text-center text-blue-700">Edit Sale</h2>

    <form @submit.prevent="updateSale">
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
        <input
          v-model.number="form.quantity"
          type="number"
          min="1"
          class="w-full px-4 py-2 border rounded"
          required
        />
      </div>

      <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full">
        Update Sale
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
const saleId = route.params.id

const products = ref([])
const form = ref({
  product_id: '',
  quantity: 1,
})

const message = ref('')

onMounted(async () => {
  try {
    const prodRes = await axios.get('http://localhost:8000/api/products')
    products.value = prodRes.data

    const saleRes = await axios.get(`http://localhost:8000/api/sales/${saleId}`)
    form.value = {
      product_id: saleRes.data.product_id,
      quantity: saleRes.data.quantity,
    }
  } catch (err) {
    message.value = 'Failed to load data'
  }
})

const updateSale = async () => {
  try {
    await axios.put(`http://localhost:8000/api/sales/${saleId}`, form.value)
    message.value = 'Sale updated successfully!'
    router.push('/sales')  // Halkan router ayaa la isticmaalayaa, ESLint ma qaldo
  } catch (err) {
    message.value = err.response?.data?.error || 'Something went wrong'
  }
}
</script>
