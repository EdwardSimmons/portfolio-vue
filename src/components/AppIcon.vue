<script setup lang="ts">
import { computedEager } from '@vueuse/core'

const props = defineProps<{
    img: string
}>();

const classes = computedEager(() => {
    return {
        'app-icon': true,
        'memoria': props.img.includes('memoria')
    }
});
</script>

<template>
    <div class="app-icon-container shadow-md">
        <img :src="img" alt="app-icon" :class="classes" />
    </div>
</template>

<style scoped>
.app-icon-container {
    background-color: white;
    height: 4rem;
    width: 4rem;
    border-radius: 8px;
}

.app-icon {
    height: 4rem;
    width: 4rem;
    border-radius: 8px;
}

.memoria {
    padding: 4px;
}
</style>