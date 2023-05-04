<!-- Mobile.vue -->
<template>
    <main>
        <AppInfo v-for="app in apps" :key="app.name">
            <template #icon>
                <AppIcon :img="app.icon" :url="app?.url" />
            </template>
            <template #heading>{{ app.name }}</template>
            {{ app.description }}
        </AppInfo>
    </main>
</template>

<script lang="ts" src="./Mobile.ts" />
<style scoped lang="scss" src="./Mobile.scss" />