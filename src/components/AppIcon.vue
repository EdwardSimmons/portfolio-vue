<script lang="ts">
import { Component, Prop, Vue } from 'vue-facing-decorator'

@Component({})
export default class AppIcon extends Vue {
    @Prop({ default: '' })
    public img!: string;

    public get classes(): Record<string, boolean> {
        return {
            'app-icon': true,
            'memoria': this.img.includes('memoria')
        }
    }
}
</script>

<template>
    <div class="app-icon-container">
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