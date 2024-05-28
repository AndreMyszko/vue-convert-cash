<script setup lang="ts">
import CustomItem from './CustomItem.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
</script>

<template>
    <CustomItem>
        <template #icon>
            <EcosystemIcon />
        </template>
        <template #heading>Currency Value</template>
        <div>***INSERT THE CURRENCY VALUE HERE***</div>
    </CustomItem>
    <CustomItem>
        <template #icon>
            <EcosystemIcon />
        </template>
        <template #heading>Info</template>
        <p>All currencies int this list is based on a '$1.00' exchange rate</p>
        <br>
        <p>PS.: To many requests can return an internal error for 'Too many requests', wait a moment and try agin.</p>
    </CustomItem>
</template>
