<template>
  
    <div class="p-8">
      <h1 class="text-3xl font-bold mb-6">Innstillinger</h1>
  
      <div class="mb-6">
    <label class="block mb-2">Velg valuta:</label>
    <select v-model="currency" 
            class="border p-2 rounded bg-white text-gray-800 dark:bg-gray-700 dark:text-white">
      <option value="NOK">NOK</option>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
    </select>
  </div>
  
      <!-- Tema -->
    
      <div class="mb-6">
        <label class="block mb-2">Velg tema:</label>
        <button 
          @click="toggleTheme"
          class="px-4 py-2 rounded"
        >
          {{ isDarkMode ? 'Lyst Tema' : 'Mørkt Tema' }}
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  
  const currency = ref("NOK");
  const isDarkMode = ref(false);
  
  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;
    document.documentElement.setAttribute("data-theme", isDarkMode.value ? "dark" : "light");
    localStorage.setItem("theme", isDarkMode.value ? "dark" : "light");
  };
  
  onMounted(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    isDarkMode.value = savedTheme === "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
  });
  </script>
  
  <!--css / tailwind-->
  
  <style scoped>
  button {
    transition: background-color 0.3s, color 0.3s;
  }
  </style>