<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'
import TheWelcome from '@/components/TheWelcome.vue'


@Component({
    components: {
        TheWelcome,
    },
    options: {
        name: 'Home'
    },
})
export default class Home extends Vue {
    //
}
</script>

<template>
    <main>
        <TheWelcome />
    </main>
</template>
