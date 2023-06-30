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
        name: 'Opnametool IMG',
        icon: 'src/assets/AppIcons/opnametool.webp',
        description: 'This iOS app was a bespoke project for the Instituut Mijnbouwschade Groningen (IMG), a department of the Dutch government. It is used by their team of experts to assess the damage caused to people\'s homes by earthquakes, and to calculate any compensation that they are owed.',
        url: {
            ios: 'https://apps.apple.com/nl/app/opnametool-img/id1605604226',
        }
    },
    {
        name: 'Atabase Schade',
        icon: 'src/assets/AppIcons/atabase_schade.webp',
        description: 'This iOS app was the commercial successor to Opnametool IMG, designed by Atabix to be used by any client wishing to carry out offline damage assessments of property.',
        url: {
            ios: 'https://apps.apple.com/nl/app/atabase-schade/id1580397787?l=en',
        }
    },
    {
        name: 'Find My ULD',
        icon: 'src/assets/AppIcons/fmu.webp',
        description: 'This app, designed simultaneously for Android and iOS, allowed ACL Airshop customers to track and manage ULDs - the standardised containers used in the air freight industry.',
        url: {
            ios: 'https://apps.apple.com/us/app/find-my-uld/id1463401103',
        }
    },
    {
        name: 'WorkNed',
        icon: 'src/assets/AppIcons/workned.webp',
        description: 'Available for both Android and iOS, this app allowed part-time employers and employees of the Netherlands to build a network of connections, manage their contracts, apply for jobs, and submit timesheets. ',
        url: {
            android: 'https://play.google.com/store/apps/details?id=nl.workned.nativescript&pli=1',
            ios: 'https://apps.apple.com/app/workned/id1611735028?src=AppAgg.com',
        }
    },
    {
        name: 'Memoria',
        icon: 'src/assets/AppIcons/memoria.png',
        description: 'Developed solely for iOS, this app was designed for the Van der Spek funeral company, and is used by their employees to manage their appointments, track hours worked, and view details of the deceased. This was my first project at Atabix.',
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
