import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    club: {
      name: "La Mafia del KOM",
      url: "https://www.strava.com/clubs/Lamafiadelkom",
      logo:
        "https://dgalywyr863hv.cloudfront.net/pictures/clubs/554556/12986637/4/large.jpg"
    },
    athlets: [
      {
        name: "Daniel Carmona [CCR Team]",
        avatar:
          "https://dgalywyr863hv.cloudfront.net/pictures/athletes/6878230/2466899/6/large.jpg",
        koms: 34
      },
      {
        name: "Pedro Pablo Carrillo",
        avatar:
          "https://dgalywyr863hv.cloudfront.net/pictures/athletes/28974494/12990780/1/large.jpg",
        koms: 3
      },
      {
        name: "Samuel David Lopez Ortiz",
        avatar:
          "https://dgalywyr863hv.cloudfront.net/pictures/athletes/3682993/1188048/2/large.jpg",
        koms: 7
      },
      {
        name: "Luis Escudero",
        avatar:
          "https://dgalywyr863hv.cloudfront.net/pictures/athletes/42196409/12095624/2/large.jpg",
        koms: 0
      }
    ]
  },
  getters: {
    orderByKom: state => {
      return state.athlets.sort((a, b) => b.koms - a.koms);
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
