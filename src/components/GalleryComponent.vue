<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-6 col-lg-3" v-for="photo in dataMars.photos">
                <PhotoComponent :image="photo.img_src" alt="" :earthDate="photo.earth_date"/>
            </div>
        </div>
    </div>
</template>

<script>
import { dataMars } from '../dataMars';
import PhotoComponent from './PhotoComponent.vue';
export default {
    name: 'GalleryComponent',
    components: {
        PhotoComponent,
    },
    data() {
        return {
            dataMars,
        }
    }
}
</script>

<style lang="scss" scoped></style>