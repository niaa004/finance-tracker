<template>
    <div class="p-8">
      <h1 class="text-3xl font-bold mb-6">Dashboard</h1>
  
      <!-- Skjema for å legge til transaksjoner -->
      <AddTransaction @transaction-added="handleAddTransaction" />
  
      <!-- Liste over transaksjoner -->
      <TransactionList 
        :transactions="transactions" 
        @transaction-removed="removeTransaction"
      />
  
      <!-- TotalAmount-komponenten -->
      <TotalAmount :transactions="transactions" />
  
      <!-- Totalbeløp -->
      
      <div class="mt-6 text-lg font-bold">
        Totalt beløp:
        <span 
          :class="totalAmount >= 0 ? 'text-green-600' : 'text-red-600'"
        >
          {{ totalAmount }} kr
        </span>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from "vue";
  import TransactionList from "../components/TransactionList.vue";
  import TotalAmount from "../components/TotalAmount.vue";
  import AddTransaction from "../components/AddTranstaction.vue";
  
  // Transaksjonsliste
  const transactions = ref([
    { id: 1, description: "Lønn", amount: 5000, type: "income" },
    { id: 2, description: "Mat", amount: 1200, type: "expense" },
  ]);
  
  // Legg til ny transaksjon
  const handleAddTransaction = (transaction) => {
    transactions.value.push({
      ...transaction,
      id: transactions.value.length + 1,
    });
  };
  
  // Fjern transaksjon
  const removeTransaction = (id) => {
    transactions.value = transactions.value.filter((t) => t.id !== id);
  };
  
  // Beregn totalbeløp
  const totalAmount = computed(() => {
    const income = transactions.value
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);
    const expense = transactions.value
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);
    return income - expense;
  });
  </script>