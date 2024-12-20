<template>
  <div id="app" class="min-h-screen transition-all" :class="{ 'dark': isDarkMode }">
    <!-- Navbar -->
    <NavBar :isDarkMode="isDarkMode" />
    
    <!-- Sideinnhold håndteres av router -->
    <div class="container mx-auto p-8">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
