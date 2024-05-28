<script setup lang="ts">
import CurrencyValue from '../components/CurrencyValue.vue';
</script>

<template>
  <div class="currency-value">
    <CurrencyValue />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .value {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
