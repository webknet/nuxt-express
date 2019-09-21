<template>
  <div class="pa-3">
    <v-card>
      <v-card-title >
        <v-icon large left>mdi-music</v-icon>
        <span class="title font-weight-light">Sound Player</span>
        <v-spacer></v-spacer>
        <v-btn @click="close" icon><v-icon>mdi-close</v-icon></v-btn>
      </v-card-title>
      <v-card-text class="mt-2">
        <div class="font-weight-thin title mb-2">{{ rec.trackName }}</div>
        <v-layout row wrap>
          <v-flex xs4>
            <v-slider class="mr-3"
              v-model="volume"
              color="white" 
              prepend-icon="mdi-volume-high"></v-slider>
          </v-flex>
          <v-flex xs8>
            <v-slider 
              v-model="progress"
              @change="progressChange"
              color="white" 
              :label="progressTimer | time"></v-slider>
          </v-flex>
          
        </v-layout>
        <span class="caption font-weight-thin">album/collection name</span>
        <div>{{ rec.collectionName }}</div>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="play" text :disabled="playing"><v-icon>mdi-play</v-icon></v-btn>
        <v-btn @click="pause" text :disabled="!playing"><v-icon>mdi-pause</v-icon></v-btn>
      </v-card-actions>
    </v-card>
    <video style="display:none;" ref="trackPlayer" :src="rec.previewUrl"></video>
  </div>
</template>

<script>
  let updateSeek
  export default {
    props: {
      rec: Object
    },
    data: () => ({
      track: null,
      volume: 100,
      playing: false,
      seek: 0,
      progress: 0
    }),
    computed: {
      progressTimer() {
        if (!this.track) return 0      
        this.progress = this.seek / (this.track.duration /100)
        return this.seek 
      }
    },
    watch: {
      volume(value) {
        this.track.volume = value /100
      },
      playing(playing) {
        this.seek = this.track.currentTime        
        if (playing) {
          updateSeek = setInterval(() => {
            this.seek = this.track.currentTime
          }, 250)
        } else {
            clearInterval(updateSeek)
        }
      }
    },
    methods: {
      onChange() {
        
      },
      play() {
        this.track.play()
        this.playing = true       
      },
      pause() {
        this.track.pause()
        this.playing = false
      },
      close() {
        this.track.pause()
        this.playing = false
        this.$emit('close', false)
      },
      progressChange(value) {
        this.track.currentTime = value * (this.track.duration /100)
      }

    }, 
    mounted() {      
      this.track = this.$refs.trackPlayer
      
      this.track.onended = () =>{
        this.playing = false
      }
      this.track.onloadeddata = () => { 
        this.play()
      }
    },
    filters: {
      time(value) {
        value = value * 1000
        const seconds = (value - value % 1000) / 1000
        const mils = parseInt((value % 1000)/10)
        const sc = seconds >= 10 ? seconds : `0${seconds}`
        const ms = mils >= 10 ? mils : `0${mils}`
        return `${sc}:${ms}`
      }
    }
  }
</script>

<style>

</style>