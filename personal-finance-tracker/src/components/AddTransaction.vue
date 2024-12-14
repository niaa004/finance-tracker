<template>
    <form @submit.prevent="addTransaction">
      <input v-model="description" placeholder="Beskrivelse" required />
      <input v-model.number="amount" placeholder="Beløp" required />
      <select v-model="type">
        <option value="income">Inntekt</option>
        <option value="expense">Utgift</option>
      </select>
      <button type="submit">Legg til</button>
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
      addTransaction() {
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
  