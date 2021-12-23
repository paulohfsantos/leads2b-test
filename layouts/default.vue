<template>
  <v-app dark>
    <!-- navbar -->
    <v-app-bar :clipped-left="clipped" fixed app>
      <nuxt-link class="white--text" to="/">
        <v-toolbar-title v-text="title" />
      </nuxt-link>
      <!-- <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="false" app>
      <span>
        Developed by me
      </span>
    </v-footer>
  </v-app>
</template>

<script>
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
}
</script>
