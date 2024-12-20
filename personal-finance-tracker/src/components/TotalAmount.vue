<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  transactions: {
    type: Array,
    required: true,
    default: () => [], // Sikrer at props ikke er undefined
  },
});


const totalIncome = computed(() => {
  return props.transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);
});

const totalExpense = computed(() => {
  return props.transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);
});

const removeInput = computed(() => {
  
})

const netTotal = computed(() => totalIncome.value - totalExpense.value);
</script>