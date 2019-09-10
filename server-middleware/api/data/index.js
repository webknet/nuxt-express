
const axios = require('axios')
const dataUrl = 'https://itunes.apple.com'

module.exports = {
    lookup(id) {
        return axios.get(`${dataUrl}/lookup?id=${id}`)
    }
}