<script setup lang="ts">
import AppInfo from '@/components/AppInfo.vue';
import AppIcon from '@/components/AppIcon.vue'

interface App {
    name: string;
    icon: string;
    description: string;
    url?: {
        android?: string;
        ios?: string;
    }
}

const apps: App[] = [
    {
        name: 'Atabase Schade',
        icon: 'src/assets/AppIcons/atabase_schade.webp',
        description: 'This is a description',
        url: {
            ios: 'https://apps.apple.com/nl/app/atabase-schade/id1580397787?l=en',
        }
    },
    {
        name: 'Opnametool IMG',
        icon: 'src/assets/AppIcons/opnametool.webp',
        description: 'This is a description',
        url: {
            ios: 'https://apps.apple.com/nl/app/opnametool-img/id1605604226',
        }
    },
    {
        name: 'Find My ULD',
        icon: 'src/assets/AppIcons/fmu.webp',
        description: 'This is a description',
        url: {
            ios: 'https://apps.apple.com/us/app/find-my-uld/id1463401103',
        }
    },
    {
        name: 'WorkNed',
        icon: 'src/assets/AppIcons/workned.webp',
        description: 'This is a description',
        url: {
            android: 'https://play.google.com/store/apps/details?id=nl.workned.nativescript&pli=1',
            ios: 'https://apps.apple.com/app/workned/id1611735028?src=AppAgg.com',
        }
    },
    {
        name: 'Memoria',
        icon: 'src/assets/AppIcons/memoria.png',
        description: 'This is a description',
    }
];
</script>

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
