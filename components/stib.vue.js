var stibApiKey = 'Bearer d22f95087a02bb41a6745f225d5f1bff';

Vue.component('stib', {
  data: function () {
    return {
      info: [],
      stopsIds: null,
      count: 0
    }
  },
  mounted() {
    axios
        .get('https://opendata-api.stib-mivb.be/OperationMonitoring/4.0/PassingTimeByPoint/2917%2C2975%2C6204%2C6258',
        { 'headers': { 'Authorization': stibApiKey } })
        .then(response => (this.info = response.data))
  },
  template: '<div>{{info}}</div>'
})