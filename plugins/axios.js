/**
 *  ?to verify?
 * env.API_URL
 * cmd: now secrets add API_URL <path>
 */

 export default function({ $axios }) {
     if (process.env.NODE_ENV == 'production')
        $axios.defaults.baseURL = process.env.API_URL

    $axios.onRequest(config => {
        config.headers = {
            'Content-Type': 'application/json'
        }
    })
 }