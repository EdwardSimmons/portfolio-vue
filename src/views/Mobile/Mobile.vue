<!-- Mobile.vue -->
<template>
    <main>
        <AppInfo v-for="app in apps" :key="app.name">
            <template #icon>
                <AppIcon :img="app.icon" />
            </template>
            <template #heading>{{ app.name }}</template>
            {{ app.description }}
            <template #links v-if="app?.url">
                <div v-if="app?.url?.android">
                    <a :href="app.url.android" target="_blank" rel="noopener">Android</a>
                </div>
                <div v-if="app?.url?.ios">
                    <a :href="app.url.ios" target="_blank" rel="noopener">iOS</a>
                </div>
            </template>
        </AppInfo>
    </main>
</template>

<script lang="ts" src="./Mobile.ts" />
<style scoped lang="scss" src="./Mobile.scss" />