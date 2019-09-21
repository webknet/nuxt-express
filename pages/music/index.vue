<template>
  <div>
      <h2 class="font-weight-thin">Music search</h2>
      <v-form 
        autocomplete="off"
        ref="frm"
        v-on:submit.prevent
        v-model="valid">
        <v-layout>
          <v-flex>
            <v-text-field
              prepend-icon="mdi-cloud-search"
              required
              :rules="[ v => !!v || 'Field required']"
              label="Search"
              v-model="searchstr"
              hint="For example, Ed Sheeran"
              @keyup.enter="submit"
            ></v-text-field>
          </v-flex>
          <v-flex>
            <v-btn class="mt-5" icon @click="submit"><v-icon>mdi-forward</v-icon></v-btn>
          </v-flex>
        </v-layout>
      </v-form>
      <div v-if="dataItems && dataItems.length > 0">
        <v-list>
          <template v-for="(item, idx) in dataItems">
            <v-list-item
              :key="idx"
              @click="player(item)">
              <v-list-item-avatar>
                <v-img :src="item.artworkUrl100"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{ item.trackName }}</v-list-item-title>
                <v-list-item-subtitle><v-icon>mdi-album</v-icon> - {{ item.collectionName }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-icon>mdi-volume-high</v-icon>              
              </v-list-item-action>
            </v-list-item>
            <v-divider
              v-if="idx +1 < dataItems.length"
              :key="'divider'+idx"></v-divider>
          </template>  
        </v-list>
      </div>
      <div v-else>
        <h1 v-if="dataItems" class="font-weight-light">No result found for {{ searchstr }}</h1>
      </div>
      <div>

      </div>
      <v-dialog
        v-model="dialog"
        persistent :overlay="false"
        max-width="500px"
        transition="dialog-transition"
      >
        
      <sound-player @close="dialog = $event" :rec="selectedTrack"></sound-player>
  
    <!-- <v-btn @click="dialog = !dialog" color="success">close</v-btn> -->
          
       
      </v-dialog>
  </div>
</template>

<script>
  import SoundPlayer from '@/components/SoundPlayer'
  export default {
    components: {
      SoundPlayer
    },
    head () {
      return {
      
      }
    },
    data: () =>({
      dialog: false,
      valid: false,
      searchstr: '',
      dataItems: null,
      play: false,
      selectedTrack: null
    }),
    methods: {
      submit() {
        if (this.$refs.frm.validate() ) {
          this.$axios.$get(`/api/search/term=${this.searchstr}/song`)
            .then(result => {
                console.log(result)
              this.dataItems = result.data
            })
        }
      },
      player(track) {
        this.dialog = true
        this.selectedTrack = track
      }
    }
  }

  async function playVideo(video) {
    await video[0].play()
  }
</script>

<style>

</style>