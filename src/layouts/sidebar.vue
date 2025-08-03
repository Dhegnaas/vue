<template>
  <aside class="bg-blue-900 h-screen w-[220px] flex flex-col shadow-lg">
    <!-- Logo & Title -->
    <div class="flex items-center p-4 border-b border-blue-700">
      <img src="@/assets/pr.png" class="w-[50px] h-[50px] object-cover rounded-full" alt="logo">
      <h1 class="text-[18px] text-white ml-3 font-semibold tracking-wide">AL-FURQAN</h1>
    </div>

    <!-- Navigation Links -->
    <nav class="flex flex-col mt-6 space-y-2 px-4">
      <router-link
        to="/Dhashboard"
        class="text-white px-3 py-2 rounded hover:bg-blue-800 transition duration-200"
      >
        Dashboard
      </router-link>
      <router-link
        to="/Customers"
        class="text-white px-3 py-2 rounded hover:bg-blue-800 transition duration-200"
      >
        Customers
      </router-link>
      <router-link
        to="/Sales"
        class="text-white px-3 py-2 rounded hover:bg-blue-800 transition duration-200"
      >
        Sales
      </router-link>
      <router-link
        to="/Products"
        class="text-white px-3 py-2 rounded hover:bg-blue-800 transition duration-200"
      >
        Products
      </router-link>
      <router-link
        to="/Create"
        class="text-white px-3 py-2 rounded hover:bg-blue-800 transition duration-200"
      >
        Create
      </router-link>
    </nav>
  </aside>
</template>

<script setup>
// waxba lagama baahna halkan hadda
</script>

<style scoped>
/* Haddii aad rabto styles gaar ah, waxaad ku dari kartaa halkan */
</style>
