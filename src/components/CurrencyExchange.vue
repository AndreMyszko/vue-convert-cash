<script setup lang="ts">
import CustomItem from './CustomItem.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
</script>

<template>
    <CustomItem>
        <template #icon>
            <EcosystemIcon />
        </template>
        <template #heading>Convert Currency</template>
        <div>***INSERT THE CURRENCY EXCHANGE FOR HERE***</div>
    </CustomItem>
    <CustomItem>
        <template #icon>
            <EcosystemIcon />
        </template>
        <template #heading>Usage</template>
        <p>1- Choose the currency you want to exchange 'FROM'</p>
        <p>2- Choose the currency you want to exchange 'TO'</p>
        <P>3- Provide the exchange 'AMOUNT'</P>
        <P>4- Click on 'Exchange' button and check the exchange value</P>
        <br>
        <p>PS.: To many requests can return an internal error for 'Too many requests', wait a moment and try agin.</p>
    </CustomItem>
</template>
