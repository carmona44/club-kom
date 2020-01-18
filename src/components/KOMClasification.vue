<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex mb-4 mt-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Clasificación
        </h1>
        <p class="subheading font-weight-regular">
          De KOMs conseguidos por los atletas del club
          <br />
          <a :href="club.url" target="_blank">{{ club.nombre }}</a>
        </p>
      </v-flex>
      <v-flex mb-5 xs12>
        <v-layout justify-center>
          <v-switch
            v-model="viewType"
            prepend-icon="mdi-view-list"
            append-icon="mdi-arrange-send-to-back"
            color="orange darken-3"
          ></v-switch>
        </v-layout>
      </v-flex>
      <v-flex mb-5 xs12>
        <h1 v-show="!viewType">Otro titulo</h1>
        <h1 v-show="viewType">Otro titulo 2</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "KOMClasification",

  data: () => ({
    viewType: false,
    club: {
      nombre: "La Mafia del KOM",
      url: "https://www.strava.com/clubs/Lamafiadelkom"
    }
  })
};
</script>
