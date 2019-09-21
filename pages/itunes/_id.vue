<template>
    <v-container>

        <h1>itunes page</h1>

        <span v-if="artist.results.length>0">{{ artist.results[0].artistName }}</span>
    </v-container>
</template>

<script>
export default {    
    asyncData({ $axios, req, params }) {
        const host = process.server
           ? `http://${req.headers.host}`
           : ''
        console.log(params)
        return $axios.$get(`${host}/api/search/${params.id ||''}`)
            .then(result => {
                console.log(result.results)
                return { artist: result }
            })
            .catch(e => {
                error({ statusCode: 404, message: 'Page not found'})
            })
    }
}
</script>

<style>

</style>