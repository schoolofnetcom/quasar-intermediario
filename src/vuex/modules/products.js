import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded'

export default {
  state: {
    list: [],
    one: {}
  },
  mutations: {
    update (state, config) {
      state[config.state] = config.data
    }
  },
  actions: {
    productsList (context) {
      return axios.get('http://localhost:8765/api/products.json')
        .then((res) => {
          context.commit('update', {
            state: 'list',
            data: res.data
          })
        })
    },
    productsGet (context, id) {
      return axios.get('http://localhost:8765/api/products/' + id + '.json')
        .then((res) => {
          context.commit('update', {
            state: 'one',
            data: res.data
          })
        })
    },
    productsInsert (context, data) {
      return axios.post('http://localhost:8765/api/products.json', data)
    },
    productsUpdate (context, config) {
      return axios.put('http://localhost:8765/api/products/' + config.id + '.json', config.data)
    },
    productsDelete (context, id) {
      return axios.delete('http://localhost:8765/api/products/' + id + '.json')
    }
  }
}
