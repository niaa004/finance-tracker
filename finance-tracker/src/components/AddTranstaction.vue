<template>
    <form @submit.prevent="handleSubmitTransaction" class="space-y-4">
      <input
        v-model="description"
        placeholder="Beskrivelse"
        class="border p-2 rounded w-full placeholder-gray-400"
        required
      />
      <input
        v-model.number="amount"
        placeholder="Beløp"
        class="border p-2 rounded w-full placeholder-gray-400"
        required
      />
      <select v-model="type" class="border p-2 rounded w-full">
        <option value="income">Inntekt</option>
        <option value="expense">Utgift</option>
      </select>
      <button type="submit" class="w-full">Legg til</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        description: '',
        amount: null,
        type: 'income',
      };
    },
    methods: {
      handleSubmitTransaction() {
        const transaction = {
          description: this.description,
          amount: this.amount,
          type: this.type,
          date: new Date().toISOString(),
        };
        this.$emit('transaction-added', transaction);
        this.description = '';
        this.amount = null;
        this.type = 'income';
      },
    },
  };
  </script>
  