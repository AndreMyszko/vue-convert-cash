<script setup lang="ts">
import CurrencyExchange from '../components/CurrencyExchange.vue';
</script>

<template>
    <div class="currency-exchange">
        <CurrencyExchange />
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
