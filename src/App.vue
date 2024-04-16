<template>
  <div>
    <HeaderComponent />
    <MainComponent />
    <GalleryComponent/>
  </div>
</template>

<script>
import { dataMars } from './dataMars.js';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import GalleryComponent from './components/GalleryComponent.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent,
    GalleryComponent
  },
  data() {
    return {
      dataMars,
    }
  },
  methods: {
    getPhotos() {
axios.get(this.dataMars.apiUrl+this.dataMars.endPoint.curiosity+ '?sol=1000&api_key=nogy1jh5NYHBOH74Ulx6PItrBShUfQXLEwbQ18nb').then((res) =>
 {this.dataMars.photos = res.data.photos;})
    }
  },
  created() {
    this.getPhotos()
  }
}
</script>

<style lang="scss" scoped></style>
