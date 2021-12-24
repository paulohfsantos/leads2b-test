<template>
  <div class="heroes__container">
    <div v-for="(heroesData, index) in heroes.results" :key="index">
      <nuxt-link :to="{ name: 'heroid', params: { heroid: heroesData.id }}">
        <div class="heroes__item">
          <div class="heroes__item__img">
            <img :src="heroesData.thumbnail.path + '.' + heroesData.thumbnail.extension" :alt="heroesData.name" />
          </div>
          <div class="heroes__item__name">
            {{ heroesData.name }}
          </div>
          <div class="heroes__date">
            {{ modifiedDate(heroesData.modified) }}
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'IndexPage',

  data: () => ({
    headers: [
      {
        text: 'Hero',
        value: 'name',
        align: 'center'
      },
      {
        text: 'Modified',
        value: 'modified',
        align: 'center'
      },
      {
        text: 'View',
        value: 'actions',
        align: 'center',
        sortable: false
      }
    ],
    options: {},
    selected: []
  }),

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
      // console.log(err);
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
