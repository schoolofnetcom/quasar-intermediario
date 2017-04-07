import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export default {
  actions: {
    stockInInsert (context, data) {
      return axios.post('http://localhost:8765/api/stock-in.json', data)
    },
    stockOutInsert (context, data) {
      return axios.post('http://localhost:8765/api/stock-out.json', data)
    }
  }
}
