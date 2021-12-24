<template>
  <div class="heroes__container">
    <div v-for="(heroesData, index) in heroes.results" :key="index">
      <nuxt-link :to="{ name: 'heroid', params: { heroid: heroesData.id }}">
        <v-card class="heroes__item text-center mb-2 px-2 py-2">
          <div class="heroes__item__img">
            <img :src="heroesData.thumbnail.path + '.' + heroesData.thumbnail.extension" :alt="heroesData.name" />
          </div>
          <div class="heroes__item__name">
            <h2>{{ heroesData.name }}</h2>
          </div>
          <div class="heroes__date">
            {{ modifiedDate(heroesData.modified) }}
          </div>
        </v-card>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'IndexPage',

  computed: {
    ...mapGetters([
      'heroes'
    ])
  },

  mounted() {
    Promise.all([
      this.$store.dispatch('getHeroes'),
    ]).then().catch(() => {
      this.$store.commit('showSnackbar', {
        show: true,
        text: 'No heroes found',
        color: 'error'
      })
    });
  },

  methods: {
    modifiedDate(date) {
      let dt = new Date(date).toUTCString()
      dt = dt.split(' ').slice(0, 4).join(' ')
      return dt
    }
  },
}
</script>
