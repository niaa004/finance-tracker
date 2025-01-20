<template>
    <nav
      class="py-4 px-6 flex justify-between items-center bg-blue-600 text-white"
    >
      <div class="font-bold text-2xl text-white">
        Finance Tracker
      </div>
      <ul class="flex space-x-6">
        <li>
          <router-link 
            to="/" 
            class="hover:text-gray-300 transition-all text-white"
          >
            Hjem
          </router-link>
        </li>
        <li>
          <router-link 
            to="/dashboard" 
            class="hover:text-gray-300 transition-all text-white"
          >
            Dashboard
          </router-link>
        </li>
        <li>
          <router-link 
            to="/budget" 
            class="hover:text-gray-300 transition-all text-white"
          >
            Budsjett
          </router-link>
        </li>
        <li>
          <router-link 
            to="/settings" 
            class="hover:text-gray-300 transition-all text-white"
          >
            Innstillinger
          </router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  // Ingen endringer nødvendig i script
  </script>