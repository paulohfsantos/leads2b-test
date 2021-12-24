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
      <div class="character__data">
       <div class="character__item">
          <div class="character__item__img">
            <img  :src="hero.thumbnail.path+'.'+hero.thumbnail.extension" />
          </div>
          <div class="character__item__name">
            {{ hero.name }}
          </div>
          <div class="character__date">
            {{ hero.modified }}
          </div>
        </div>
      </div>
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
}
</script>
