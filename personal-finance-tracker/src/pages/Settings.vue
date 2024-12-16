<template>
    <div class="p-8">
      <h1 class="text-3xl font-bold text-gray-700 mb-6">Innstillinger</h1>
  
      <!-- Valuta -->
      <div class="mb-6">
        <label class="block text-gray-600 mb-2">Velg valuta:</label>
        <select v-model="currency" class="border p-2 rounded">
          <option value="NOK">NOK</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
  
      <!-- Tema -->
      <div class="mb-6">
        <label class="block text-gray-600 mb-2">Velg tema:</label>
        <button @click="toggleTheme" class="bg-blue-600 text-white px-4 py-2 rounded">
          {{ theme === 'light' ? 'Mørkt tema' : 'Lyst tema' }}
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const currency = ref("NOK");
  const theme = ref("light");
  
  const toggleTheme = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("dark");
  };
  </script>
  
  <style>
  /* Mulig CSS for å håndtere mørkt og lyst tema */
  </style>
  