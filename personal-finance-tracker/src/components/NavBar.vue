<template>
  <nav class="bg-blue-600 text-white py-4 px-6 flex justify-between items-center">
    <div class="font-bold text-2xl">Finance Tracker</div>
    <ul class="flex space-x-6">
      <li><router-link to="/" class="hover:text-gray-300">Hjem</router-link></li>
      <li><router-link to="/dashboard" class="hover:text-gray-300">Dashboard</router-link></li>
      <li><router-link to="/budget" class="hover:text-gray-300">Budsjett</router-link></li>
      <li><router-link to="/reports" class="hover:text-gray-300">Rapporter</router-link></li>
      <li><router-link to="/settings" class="hover:text-gray-300">Innstillinger</router-link></li>
    </ul>
  </nav>
</template>


  
  <script setup>

  </script>
  
  <style scoped>
  nav a {
    text-decoration: none;
    font-size: 1rem;
  }
  </style>
  