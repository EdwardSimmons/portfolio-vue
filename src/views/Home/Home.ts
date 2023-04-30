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

    //This is a vue reactive property.
    text = 'Example code'

    //This is a vue component method.
    method() {
        console.log(this.text)
    }

    //This is a vue component lifecycle hook.
    mounted() {
        this.method()
    }
}