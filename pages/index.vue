<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          Nuxt.js & Express <span class="font-weight-thin">&nbsp;&nbsp;Server-Side Rendering example</span> 
        </v-card-title>
        <v-card-text>
          <div>
              <span>Serverless</span>
              <a href="https://zeit.co/" target="_blank">
                <v-img src="images/zeit-white-full-logo.svg" width="100px"></v-img>
              </a>
          </div>
          <div class="mt-5">
                <span>Main feature</span>
            <ul>
                <li class="font-weight-thin">Client data calls through express server middleware api</li>
            </ul>           
          </div>
          <div class="mt-5">
              <span>Repository</span>
              <a href="">
              <v-img src="images/github.png" width="30px"></v-img>
              </a>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
          <v-btn
            @click="getinfo"
          >
            get info
          </v-btn>          
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data: () => ({
      
  }),
  methods: {
      getinfo() {
          this.$axios.get('/api/lookup/909253')
            .then(result => console.log(result.data))
      },
      search() {
          this.$axios.get('/api/search/jack johnson')
            .then(result => console.log(result.data))
      }
  }
}
</script>
