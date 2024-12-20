<template>
    <button 
      @click="toggleTheme" 
      class="px-4 py-2 rounded"
      :style="{
        backgroundColor: 'var(--toggle-button)',
        color: 'var(--box-text-color)'
      }"
    >
      {{ isDarkMode ? 'Lyst Tema' : 'Mørkt Tema' }}
    </button>
  </template>

  <script setup>
import { ref, onMounted } from 'vue';

// Lagre nåværende state
const isDarkMode = ref(false);


const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;

  // Legg til eller fjern 'dark' klassen på <html>
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark'); // Setter dark mode
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove('dark'); // Setter light mode
    localStorage.setItem("theme", "light");
  }
};

onMounted(() => {
  const savedTheme = localStorage.getItem("theme") || "light";
  isDarkMode.value = savedTheme === "dark";
  
  if (isDarkMode.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
});

</script>

<style scoped>
button {
    transition: background-color 0.3s, color 0.3s;
    cursor: pointer;
}
</style>