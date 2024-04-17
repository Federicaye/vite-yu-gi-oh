<template>
    <div>
        <p>{{ rover }}</p>
        <img :src="image" alt="">
        <p>{{ earthDate }}</p>
        <p>{{ sol }}</p>
    </div>
</template>

<script>
import { dataMars } from '../dataMars.js';
export default {
    name: 'PhotoComponent',
    props: ['image', 'earthDate', 'rover', 'id', 'sol'],
    data(){
        return{
            dataMars,
        }
    }
}
</script>

<style lang="scss" scoped>
img {
    width: 200px;
}
</style>