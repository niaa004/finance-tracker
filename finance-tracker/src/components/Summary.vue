<template>
    <div class="text-xl font-bold text-gray-800">
      Totalt: {{ totalAmount }} kr
    </div>
  </template>
  
  <script setup>
  defineProps({
    totalAmount: Number,
  });
  </script>