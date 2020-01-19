<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex mb-4 mt-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Clasificación
        </h1>
        <p class="subheading font-weight-regular">
          de KOMs conseguidos por los atletas del club
          <br />
          <a :href="club.url" target="_blank">{{ club.name }}</a>
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
        <v-layout justify-center v-if="!viewType">
          <v-list>
            <v-list-item-group v-for="(ath, index) in athlets" :key="index">
              <v-list-item>
                <v-list-item-avatar>
                  <v-img :src="ath.avatar"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title v-text="ath.name"></v-list-item-title>
                </v-list-item-content>

                <v-list-item-icon>
                  {{ ath.koms }}
                </v-list-item-icon>
              </v-list-item>
              <v-divider
                inset
                v-if="index + 1 < athlets.length"
                :key="index"
              ></v-divider>
            </v-list-item-group>
          </v-list>
        </v-layout>
        <v-timeline :dense="$vuetify.breakpoint.xsOnly" v-else reverse>
          <v-timeline-item
            v-for="(ath, i) in athlets"
            :key="i"
            :color="i == 0 ? 'orange darken-4' : 'amber'"
            :icon="i == 0 ? 'mdi-crown' : i + 1 + 'º'"
            fill-dot
          >
            <span slot="opposite"
              ><h2>{{ ath.koms }}</h2>
              KOMs</span
            >
            <v-card :color="i == 0 ? 'orange darken-3' : 'orange lighten-1'">
              <v-card-title>
                <v-avatar>
                  <img :src="ath.avatar" :alt="ath.name" />
                </v-avatar>
                <h2
                  class="white--text font-weight-light ml-5"
                  v-if="!$vuetify.breakpoint.smAndDown"
                >
                  {{ ath.name }}
                </h2>
                <h5 class="col-7 text-truncate white--text font-weight-light ml-5" v-else>
                  {{ ath.name }}
                </h5>
              </v-card-title>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "KOMClasification",

  data: () => ({
    viewType: false
  }),

  computed: {
    club() {
      return this.$store.state.club;
    },
    athlets() {
      return this.$store.getters.orderByKom;
    }
  }
};
</script>
