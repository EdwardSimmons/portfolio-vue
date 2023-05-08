<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'


@Component({
    options: {
        name: 'Surfacing'
    },
})
export default class Surfacing extends Vue {
    //
}
</script>
<template>
    <main>
        <div class="container">
            <iframe src="https://drive.google.com/file/d/117Rth24HJ_2CoFY_BauEI6MOasxuErMR/preview" class="pdf-iframe"
                allow="autoplay">
            </iframe>
        </div>
    </main>
</template>

<style scoped>
.pdf-iframe {
    width: 100%;
    height: 500px;
    border: none;
    padding: 0;
}

.container {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    padding: 0.8rem 0.8rem 0.4rem;
    background-color: #7a7a7a;
    border-radius: 0.5rem;
}
</style>