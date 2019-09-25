
const axios = require('axios')
const dataUrl = 'https://itunes.apple.com'

module.exports = {
    lookup(id) {
        return axios.get(`${dataUrl}/lookup?id=${id}`)
    },
    search(value) {
        //return axios.get(`${dataUrl}/search?${value}&limit=100`)
        return axios.get(`${dataUrl}/search?${value}`)
    }
}