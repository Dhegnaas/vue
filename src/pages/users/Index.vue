<template>
  <div class="p-6 min-h-screen bg-gray-100">
    <div class="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-2xl font-bold text-blue-700">Users</h2>
        <router-link to="/users/create" class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          + Add User
        </router-link>
      </div>

      <table class="w-full table-auto border-collapse">
        <thead>
          <tr class="bg-blue-100 text-left">
            <th class="p-2 border">Name</th>
            <th class="p-2 border">Email</th>
            <th class="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id" class="hover:bg-gray-50">
            <td class="p-2 border">{{ user.name }}</td>
            <td class="p-2 border">{{ user.email }}</td>
            <td class="p-2 border flex gap-2">
              <router-link
                :to="`/users/edit/${user.id}`"
                class="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
              >
                Edit
              </router-link>
              <button
                @click="deleteUser(user.id)"
                class="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <p v-if="users.length === 0" class="text-center text-gray-500 mt-4">No users found.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const users = ref([])

const loadUsers = async () => {
  try {
    const res = await axios.get('http://localhost:8000/api/users')
    users.value = res.data
  } catch (error) {
    console.error('Failed to load users', error)
  }
}

const deleteUser = async (id) => {
  if (confirm('Are you sure you want to delete this user?')) {
    try {
      await axios.delete(`http://localhost:8000/api/users/${id}`)
      users.value = users.value.filter(u => u.id !== id)
    } catch (error) {
      alert('Failed to delete user.')
    }
  }
}

onMounted(loadUsers)
</script>
