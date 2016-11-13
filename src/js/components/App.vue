<template>
  <div>
    <p><router-link :to="{ path: '/new' }">new nippo</router-link></p>
    <template v-for="nippo in nippoes">
      <p>本文：{{ nippo.content }}</p> <router-link :to="{ name: 'edit', params: { id: nippo.id } }">編集</router-link>
    </template>
  </div>
</template>

<script>

import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);

export default {
  data: () => {
    return {
      nippoes: []
    }
  },
  created() {
    this.fetchNippoes();
  },
  methods: {
    fetchNippoes() {
      console.log("fethNippoes");
      Vue.http.get('http://localhost:8000/api/nippoes').then((response) => {
        console.log("success");
        this.nippoes = response.json();
      }, (response) => {
        console.log("failure");
      });
    }
  }
}

</script>
