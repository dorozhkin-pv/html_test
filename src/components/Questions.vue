<template>
    <div class="test mt-5">
        <app-title>{{ getTitle }}</app-title>
        <hr>
        
        <component :is="myComponent"
                   :key="getKey"
                   @full="onFull($event)">
        </component>
        <hr>
        <button class="btn btn-success"
                @click="nextPage"
                :disabled="!isButton">
            Далее
        </button>
    </div>
</template>

<script>
import Title from './Title.vue'
import Checkbox from './Checkbox.vue'
import Radio from './Radio.vue'

export default {
    components: {
        'app-title': Title,
        'app-checkbox': Checkbox,
        'app-radio': Radio
    },
    data(){
        return {
            isButton: false
        }
    },
    methods: {
        nextPage(){
            this.$store.commit('increment');
            this.isButton = false;

            if(this.toFinalPage) {
                this.$router.push({ path: 'fin' });
                this.$store.commit('testAgain');
            }
        },
        onFull(obj){
            this.isButton = false;
            for(let item in obj) {
                if (obj[item]) this.isButton = true;
            }
        }
    },
    computed: {
        toFinalPage(){
            return this.$store.getters.finalPage;
        },
        getTitle(){
            return this.$store.getters.title;
        },
        getKey(){
            return this.$store.getters.iterator;
        },
        myComponent(){
            return this.$store.getters.type === 'checkbox' ? 'app-checkbox' : 'app-radio';
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>