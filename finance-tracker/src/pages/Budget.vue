<template>
    <div class="p-8">
      <h1 class="text-3xl font-bold mb-6">Budsjett</h1>
      <p class="mb-6">Sett opp et månedlig budsjett for ulike kategorier.</p>
  
      <!-- Budsjettoversikt -->
      <div 
        v-for="(budget, index) in budgets" 
        :key="index" 
        class="mb-6 p-4 border rounded-lg shadow bg-white dark:bg-gray-800"
      >
        <!-- Kategorinavn og beløp -->
        <div class="flex justify-between items-center mb-2">
          <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-100">
            {{ budget.category }}
          </h2>
          <span class="text-gray-600 dark:text-gray-300">
            {{ budget.spent }} / {{ budget.amount }} kr
          </span>
        </div>
  
        <!-- Progress bar -->
        <div class="w-full bg-gray-200 rounded h-4 dark:bg-gray-700">
          <div
            class="bg-blue-600 h-4 rounded"
            :style="{ width: `${(budget.spent / budget.amount) * 100}%` }"
          ></div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const budgets = ref([
    { category: "Mat", amount: 5000, spent: 2000 },
    { category: "Transport", amount: 2000, spent: 1200 },
    { category: "Bolig", amount: 10000, spent: 8000 },
    { category: "Fritid", amount: 3000, spent: 1500 },
  ]);
  </script>
  
  <style scoped>
  h1, h2 {
    line-height: 1.4;
  }
  
  div {
    font-family: "Inter", system-ui, Arial, sans-serif;
  }
  </style>