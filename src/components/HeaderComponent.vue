<template>
    <div>
        <p>gi</p>
        <SelectComponent @chooseRover="this.getPhotos" />
    </div>
</template>

<script>
import SelectComponent from './SelectComponent.vue';
import { dataMars } from '../dataMars.js';
export default {
    name: 'HeaderComponent',
    components: {
        SelectComponent,
    },
    data(){
        return{
        dataMars,
    }
    }
}
</script>

<style lang="scss" scoped></style>