<template>
    <div class="container">
        <router-view></router-view>
    </div>
</template>

<script>
import Questions from './components/Questions.vue'
import Finish from './components/Finish.vue'

export default {
    components: {
        'app-questions': Questions,
        'app-finish': Finish
    },
    data(){
        return {}
    },
    methods: {},
    computed: {
        done(){
            return this.$store.getters.showAnswers;
        }
    }
}
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
