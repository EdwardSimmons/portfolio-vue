import { Component, Vue } from 'vue-facing-decorator'
import AppInfo from '@/components/AppInfo.vue';
import AppIcon from '@/components/AppIcon.vue'


@Component({
    components: {
        AppIcon,
        AppInfo,
    },
    options: {
        name: 'Mobile'
    },
})
export default class Mobile extends Vue {
    public apps: App[] = [
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
}

interface App {
    name: string;
    icon: string;
    description: string;
    url?: {
        android?: string;
        ios?: string;
    }
}