import { reactive } from "vue";
export const dataMars = reactive({
apiUrl: 'https://api.nasa.gov/mars-photos/api/v1/rovers/',
endPoint: {
    curiosity: "curiosity/photos",
    opportunity: "opportunity/photos",
   spirit: "spirit/photos"
   },
   params: {
    earth_date: '2015-6-3',
    api_key: 'nogy1jh5NYHBOH74Ulx6PItrBShUfQXLEwbQ18nb',
  },
photos: [],
});