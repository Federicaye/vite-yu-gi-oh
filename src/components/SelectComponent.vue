<template>
    <select name="" id="" v-model="dataMars.endPoint" @change="$emit('chooseRover')">
        <option value="">All rovers</option>
        <option value="curiosity/photos">Curiosoty</option>
        <option value="opportunity/photos">Opportunity</option>
        <option value="spirit/photos">Spirit</option>
    </select>
</template>

<script>
import { dataMars } from '../dataMars.js';
    export default {
        name:'SelectComponent',
        data(){
            return{
            dataMars,
        }
        }
    }
</script>

<style lang="scss" scoped>

</style>