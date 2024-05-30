<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import CustomItem from './CustomItem.vue';
import EcosystemIcon from './icons/IconEcosystem.vue';

interface ExchangeResult {
    from: string;
    amount: string;
    to: string;
    exchange: number;
}

const fromCurrency = ref<string>('USD');
const toCurrency = ref<string>('BRL');
const amount = ref<number>(1.00000000);
const exchangeResult = ref<ExchangeResult | null>(null);
const currencies = ref<string[]>([]);

const fetchExchangeRate = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/exchange/', {
            params: {
                from: fromCurrency.value,
                to: toCurrency.value,
                amount: amount.value,
            },
        });
        exchangeResult.value = response.data.exchange;
    } catch (error) {
        console.error('Error fetching exchange rate:', error);
    }
};

const fetchCurrencies = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/');
        currencies.value = Object.keys(response.data.currency);
    } catch (error) {
        console.error('Error fetching currencies:', error);
    }
};

onMounted(() => {
    fetchCurrencies();
});
</script>

<template>
    <CustomItem>
        <template #icon></template>
        <template #heading></template>
        <h1>Currency Exchange</h1>
    </CustomItem>

    <CustomItem>
        <template #icon>
            <EcosystemIcon />
        </template>
        <template #heading></template>
        <br>
        <div>
            <form @submit.prevent="fetchExchangeRate">
                <div>
                    <label>
                        FROM
                        <select v-model="fromCurrency" required>
                            <option v-for="currency in currencies" :key="currency" :value="currency">{{ currency }}
                            </option>
                        </select>
                    </label>
                    <label>
                        TO
                        <select v-model="toCurrency" required>
                            <option v-for="currency in currencies" :key="currency" :value="currency">{{ currency }}
                            </option>
                        </select>
                    </label>
                    <label>
                        AMOUNT
                        <input v-model="amount" type="number" step="1.00000000" required />
                    </label>
                </div>
                <br>
                <button type="submit">Exchange</button>
            </form>
        </div>
        <br>
        <div v-if="exchangeResult">
            <h1 style="color: whitesmoke;">{{ exchangeResult.exchange }} {{exchangeResult.to }}</h1>
        </div>
    </CustomItem>

    <CustomItem>
        <template #icon></template>
        <template #heading></template>
    </CustomItem>
</template>

<style scoped>
input {
    border-radius: 3px;
    padding-left: 10px;
    color: whitesmoke;
    border: 1px solid grey;
    background-color: #222020;
    height: 28px;
    width: 140px;
}

select {
    border-radius: 3px;
    padding-left: 10px;
    color: whitesmoke;
    border: 1px solid grey;
    background-color: #222020;
    height: 28px;
}

button {
    border-radius: 3px;
    color: whitesmoke;
    border: 1px solid grey;
    background-color: hsl(150.06deg 77.65% 30.67%);
    height: 32px;
    width: 128px;
}

button:hover{
    background-color: #222020;
}
</style>
