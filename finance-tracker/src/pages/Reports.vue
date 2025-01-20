<template>
    <div class="p-8">
      <h1 class="text-3xl font-bold text-gray-700 mb-6">Rapporter</h1>
      <p class="text-gray-600 mb-4">Se rapporter over dine inntekter og utgifter.</p>
  
      <!-- Filter for tidsperiode -->
      <div class="mb-6">
        <label for="period" class="block text-gray-600 mb-2">Velg tidsperiode:</label>
        <select id="period" v-model="selectedPeriod" class="border p-2 rounded">
          <option value="week">Siste uke</option>
          <option value="month">Siste måned</option>
          <option value="year">Siste år</option>
        </select>
      </div>
  
      <!-- Rapportinnhold -->
      <div class="border rounded p-4 shadow">
        <h2 class="text-xl font-semibold mb-2">Totalt:</h2>
        <p class="text-green-600">Inntekter: {{ totalIncome }} kr</p>
        <p class="text-red-600">Utgifter: {{ totalExpense }} kr</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const selectedPeriod = ref("month");
  const totalIncome = ref(12000);
  const totalExpense = ref(4000);
  </script>
  