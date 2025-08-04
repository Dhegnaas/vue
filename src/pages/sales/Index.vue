<template>
  <div class="p-6 min-h-screen bg-gray-100">
    <div class="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 class="text-2xl font-bold text-blue-700 mb-6">Sales History</h2>

      <table class="w-full table-auto border-collapse">
        <thead>
          <tr class="bg-blue-100 text-left">
            <th class="p-2 border">Product</th>
            <th class="p-2 border">Quantity</th>
            <th class="p-2 border">Total Price</th>
            <th class="p-2 border">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="sale in sales" :key="sale.id" class="hover:bg-gray-50">
            <td class="p-2 border">{{ sale.product_name }}</td>
            <td class="p-2 border">{{ sale.quantity }}</td>
            <td class="p-2 border">${{ sale.total_price }}</td>
            <td class="p-2 border">{{ new Date(sale.date).toLocaleDateString() }}</td>
          </tr>
        </tbody>
      </table>

      <p v-if="sales.length === 0" class="text-center text-gray-500 mt-4">No sales found.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const sales = ref([])

const loadSales = async () => {
  try {
    const res = await axios.get('http://localhost:8000/api/sales')
    sales.value = res.data
  } catch (error) {
    console.error('Failed to load sales', error)
  }
}

onMounted(loadSales)
</script>
