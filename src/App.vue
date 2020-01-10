<template>
  <v-app>
    <v-content>
      <v-flex xs12>
        <v-img
          :src="require('@/assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>
      <v-tabs fixed-tabs background-color="orange" dark>
        <v-tab v-for="(tab, index) in tabs" :key="index">
          {{ tab }}
        </v-tab>
      </v-tabs>
      <KOMClasification />
    </v-content>
  </v-app>
</template>

<script>
import KOMClasification from "./components/KOMClasification";

export default {
  name: "App",

  components: {
    KOMClasification
  },

  data: () => ({
    tabs: ["ClasificaKOM", "Segmentos recomendados", "Estadísticas"]
  })
};
</script>
