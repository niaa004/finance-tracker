<template>
  <ul class="list-none space-y-2">
    <li
      v-for="transaction in transactions"
      :key="transaction.id"
      class="p-2 border-b border-gray-200 flex justify-between"
    >
      <span class="font-medium">{{ transaction.description }}</span>
      <span
        :class="transaction.type === 'income' ? 'text-green-600' : 'text-red-600'"
      >
        {{ transaction.amount }} kr
      </span>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  transactions: Array,
});
</script>
