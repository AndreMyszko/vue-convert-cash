<template>
    <div id="currency-values">
        <br>
        <h1>Currency Value</h1>
        <p>Currecies based in USD $1.00 exchange rate. </p>
        <br>
        <p>
            <label>Filter
                <input type="text" v-model="filter" placeholder="filter by Currency Type" />
            </label>
        </p>
        <br>
        <table>
            <thead>
                <tr>
                    <th>Currency Type</th>
                    <th>Currency Value</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(value, key) in filteredCurrencyValues" :key="key">
                    <td>{{ key }}</td>
                    <td>{{ value }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue';
import api from '@/services/api';

export default defineComponent({
    name: 'CurrencyValues',
    setup() {
        const currencyValues = ref<{ [key: string]: string }>({});
        const filter = ref<string>('');

        const fetchCurrencyValues = async () => {
            try {
                const response = await api.get('/');
                currencyValues.value = response.data['currency'];
            } catch (error) {
                console.error('Error fetching currency values:', error);
            }
        };

        onMounted(() => {
            fetchCurrencyValues();
        });

        const filteredCurrencyValues = computed(() => {
            if (!filter.value) {
                return currencyValues.value;
            }
            const filterLower = filter.value.toLowerCase();
            return Object.fromEntries(
                Object.entries(currencyValues.value).filter(([key]) =>
                    key.toLowerCase().includes(filterLower)
                )
            );
        });

        return {
            currencyValues,
            filter,
            filteredCurrencyValues,
        };
    },
});
</script>

<style scoped>
#currency-values{
    padding: 25px;
    margin: auto;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin:auto;
}

th,
td {
    border: 1px solid #222020;
    padding: 8px;
}

th {
    background-color: #222020;
    text-align: left;
}

input {
    color: grey;
    border: 1px solid grey;
    width: 100%;
    background-color: #222020;
    height: 28px;
}

@media (min-width: 1024px) {
    #currency-values {
        width: 500px;
    }
}
</style>