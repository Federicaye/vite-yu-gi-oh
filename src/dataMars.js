import { reactive } from "vue";
export const dataMars = reactive({
  apiUrl: 'https://api.nasa.gov/mars-photos/api/v1/rovers/',
  endPoints: {
    curiosity: "curiosity/photos",
    opportunity: "opportunity/photos",
    spirit: "spirit/photos"
  },
  options: {
    params: {
      earth_date: '2019-6-3',
      api_key: 'nogy1jh5NYHBOH74Ulx6PItrBShUfQXLEwbQ18nb',
    }
  },
  endPoint: 'curiosity/photos',
  photos: [],
  actions: {
    getPhotos() {
      axios.get(dataMars.apiUrl + dataMars.endPoint, { params: dataMars.options.params }).then((res) => { dataMars.photos = res.data.photos; })
    }

  } 
});