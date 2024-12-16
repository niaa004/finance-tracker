<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold text-gray-700 mb-6">Dashboard</h1>

    <!-- Skjema for å legge til transaksjoner -->
    <AddTransaction @transaction-added="addTransaction" />

    <!-- Liste over transaksjoner -->
    <TransactionList :transactions="transactions" />

    <!-- TotalAmount-komponenten -->
    <TotalAmount :transactions="transactions" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import AddTransaction from "../components/AddTransaction.vue";
import TransactionList from "../components/TransactionList.vue";
import TotalAmount from "../components/TotalAmount.vue";

const transactions = ref([
  { id: 1, description: "Lønn", amount: 5000, type: "income" },
  { id: 2, description: "Mat", amount: 1200, type: "expense" },
]);

const addTransaction = (transaction) => {
  transactions.value.push({
    ...transaction,
    id: transactions.value.length + 1,
  });
};
</script>
