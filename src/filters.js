import moment from 'moment'

export default {
  install: function (Vue) {
    Vue.filter('currency', function (value) {
      if (value === undefined) {
        return ''
      }
      return 'R$ ' + value.toFixed(2)
    })

    Vue.filter('moment', function (date) {
      return moment(date).format('DD/MM/YYYY hh:mm')
    })
  }
}
