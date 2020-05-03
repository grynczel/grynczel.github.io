var stibApiKey = 'Bearer d22f95087a02bb41a6745f225d5f1bff';

// import Vue from 'vue'
// import App from './components/App.vue'

// new Vue({
//   el: '#app',
//   vuetify: new Vuetify(),
//   render: h => h(App)
// })


// Vue.component('stib', {
//   data: function () {
//     return {
//       count: 0
//     }
//   },
//   template: '<button v-on:click="count++">Vous m\'avez cliqué {{ count }} fois.</button>'
// })

var app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        message: 'Hello Vue!',
        drawer: null,
        info: [],
        stopsIds: null
    },
    mounted() {
        axios
            .get('https://opendata-api.stib-mivb.be/OperationMonitoring/4.0/PassingTimeByPoint/2917%2C2975%2C6204%2C6258',
            { 'headers': { 'Authorization': stibApiKey } })
            .then(response => (this.info = response.data))
    }
})

