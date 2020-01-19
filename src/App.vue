<template>
  <v-app>
    <v-content>
      <v-flex xs12>
        <v-img
          :src="this.$store.state.club.logo"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>
      <v-tabs fixed-tabs background-color="orange" dark>
        <v-tab
          v-for="(tab, index) in tabs"
          :key="index"
          @click="tabSelected = index"
        >
          {{ tab.name }}
        </v-tab>
      </v-tabs>
      <KOMClasification v-show="tabSelected == 0" />
      <Segments v-show="tabSelected == 1" />
      <Stats v-show="tabSelected == 2" />
    </v-content>
  </v-app>
</template>

<script>
import KOMClasification from "./components/KOMClasification";
import Segments from "./components/Segments";
import Stats from "./components/Stats";

export default {
  name: "App",

  components: {
    KOMClasification,
    Segments,
    Stats
  },

  data: () => ({
    tabs: [
      { name: "ClasificaKOM" },
      { name: "Segmentos recomendados" },
      { name: "Estadísticas" }
    ],
    tabSelected: 0
  })
};
</script>
