<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <v-data-table
          v-model="selected"
          :items="heroes.results"
          :headers="headers"
          :options="options"
        >
        </v-data-table>
      </v-card>
    </v-col>
  </v-row>
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
      this.$store.commit('resetHeroes'),
      this.$store.dispatch('getHeroes'),
    ])
  },
}
</script>
