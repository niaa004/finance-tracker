<template>
    <ul class="list-none space-y-2">
      <li
        v-for="transaction in transactions"
        :key="transaction.id"
        class="p-2 border-b border-gray-200 flex justify-between"
      >
        <div>
          <span class="font-medium">{{ transaction.description }}</span>
          <span
            :class="transaction.type === 'income' ? 'text-green-600' : 'text-red-600'"
          >
            {{ transaction.amount }} kr
          </span>
        </div>
  
        <!-- Fjern-knapp -->
        <button 
          @click="removeTransaction(transaction.id)"
          class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Fjern
        </button>
      </li>
    </ul>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  defineProps({
    transactions: Array,
  });
  
  const emit = defineEmits(["transaction-removed"]);
  
  const removeTransaction = (id) => {
    emit("transaction-removed", id);
  };
  </script>