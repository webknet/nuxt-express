<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      fixed
      app
    >
      <div class="text-center pa-3">
        <v-icon large>mdi-nuxt</v-icon>
      </div>
      <v-list>
        <template v-for="(item, i) in items">
          <v-subheader v-if="item.subheader" :key="'sb'+i">{{ item.title }}</v-subheader>
          <v-list-item
          v-else
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />      
      <v-toolbar-title 
        class="text-center font-weight-light"
        style="width:100%;" 
        v-text="title" /> 
      <v-spacer></v-spacer>
      <v-btn icon><v-icon>mdi-github-circle</v-icon></v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>    
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
            subheader: true,
            title: 'Express API ex:'
        },
        {
          icon: 'mdi-music',
          title: 'Music search',
          to: '/music'
        },
        {
          icon: 'mdi-movie-filter',
          title: 'Movies search',
          to: '/movies'
        },
        {
          subheader:true,
          title: 'Static pages'
        },
        {
          icon:'mdi-grain',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      title: 'Nuxt & express app'
    }
  }
}
</script>
