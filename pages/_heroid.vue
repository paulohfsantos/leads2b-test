<template>
  <section class="hero__id">
    <v-row>
      <v-col>
        <v-card-title>
          Character Information
        </v-card-title>
      </v-col>
    </v-row>
    <v-col v-for="(character, index) in hero" :key="index" class="character__data">
      <v-col md="6" sm="12">
        <v-card>
          <v-row>
            <v-col md="6">
              <img :src="getHeroImg" :alt="character.name" />
            </v-col>
            <v-col md="6">
              teste
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col md="4" class="character__name">
        {{ character.name }}
      </v-col>
    </v-col>
  </section>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'HeroId',

  computed: {
    ...mapGetters([
      'hero'
    ]),
    getHeroImg() {
      return this.hero.map(hero => {
        return `${hero.thumbnail.path}.${hero.thumbnail.extension}`
      })
    }
  },

  mounted() {
    Promise.all([
      this.$store.dispatch('getHeroById', this.$route.params.heroid),
    ])
  },
}
</script>
