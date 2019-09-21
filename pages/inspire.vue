<template>
  <v-container grid-list-xs>    
    <v-layout>
      <v-flex class="text-center">
        <img
          src="images/v.png"
          alt="Vuetify.js"
          class="mb-5"
        >
        <blockquote class="blockquote">
          &#8220;First, solve the problem. Then, write the code.&#8221;
          <footer>
            <small>
              <em>&mdash;John Johnson</em>
            </small>
          </footer>
        </blockquote>
      </v-flex>
      
    </v-layout>
    <v-layout row wrap style="">
      <v-flex class="pa-2" xs12 md6>
          <nuxt-link class=" ma-5" to="/music">
              <v-img
                  src="images/nuxt-express-music.png">
              </v-img>
          </nuxt-link>
      </v-flex>
      <v-flex class="pa-2 " xs12 md6>
          <nuxt-link class=" ma-5" to="/movies">
              <v-img
                  src="images/nuxt-express-video.png">
              </v-img>
          </nuxt-link>
      </v-flex>
    </v-layout>
  </v-container>
</template>
