<template>
  <v-app dark>
    <!-- snackbar -->
    <v-snackbar v-model="snackbar.show" :timeout="snackbar.timeout" :color="snackbar.color">
      {{ snackbar.text }}
      <template #action="{attrs}">
        <v-btn text icon v-bind="attrs" dark @click.native="snackbar.show = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
    <!-- navbar -->
    <v-app-bar :clipped-left="clipped" fixed app>
      <nuxt-link class="white--text" to="/">
        <v-toolbar-title v-text="title" />
      </nuxt-link>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="false" app>
      <span>
        Under development by @paulohfsantos_
      </span>
    </v-footer>
  </v-app>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Marvel heroes',
    }
  },

  computed: {
    ...mapGetters(['snackbar'])
  }
}
</script>
