<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex mb-4>
        <h1>{{ title }}</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Segments",

  data: () => ({
    title: "Estas son las estadísticas"
  })
};
</script>

<style></style>
