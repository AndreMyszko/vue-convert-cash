<script setup lang="ts">
import CustomItem from './CustomItem.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
</script>

<template>
    <CustomItem>
        <template #icon>
        </template>
    </CustomItem>
    
    <CustomItem>
        <template #icon>
            <EcosystemIcon />
        </template>
        <template #heading>Currency Exchange</template>
        <div>***INSERT THE CURRENCY EXCHANGE FOR HERE***</div>
        <br>
        <p>PS.: Too many requests can exaust the application some times, wait for a while and reload the page.</p>
    </CustomItem>

    <CustomItem>
        <template #icon>
        </template>
    </CustomItem>
</template>
