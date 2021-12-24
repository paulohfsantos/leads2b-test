<template>
  <section class="hero__id">
    <v-row>
      <v-col sm="12">
        <v-card-title>
          Character Information
        </v-card-title>
      </v-col>
    </v-row>
    <div class="character__container">
      <v-card class="character__data">
       <v-col sm="12" class="character__item">
          <v-row>
            <v-col md="6" sm="12" class="text-center">
              <div class="character__item__img">
                <img :src="hero.thumbnail.path+'.'+hero.thumbnail.extension" />
              </div>
            </v-col>
            <v-col md="6" sm="12">
              <div class="infos">
                <div class="character__item__name">
                  <h1>
                    {{ hero.name }}
                  </h1>
                </div>
                <div class="character__date">
                  <h3>
                    {{ modifiedDate(hero.modified) }}
                  </h3>
                </div>
                <div class="character__desc">
                  <v-alert v-if="hero.description == ''" class="mt-2" color="warning" outlined>
                    Description not found
                  </v-alert>
                  {{ hero.description }}
                </div>
              </div>
              <div class="more">
                <div v-for="(link, i) in hero.urls" :key="i" class="mr-3">
                  <a target="_blank" :href="link.url">{{ link.type }}</a>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-card>
    </div>
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
  },

  mounted() {
    Promise.all([
      // this.$store.commit('resetHero'),
      this.$store.dispatch('getHeroById', this.$route.params.heroid),
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
