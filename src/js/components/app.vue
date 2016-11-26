<template>
  <div>
    <p><router-link :to="{ path: '/new' }">new nippo</router-link></p>
    <template v-for="nippo in nippoes">
      <p>日付け: {{ toJpDate(nippo.created_at) }}</p>
      <p>本文：{{ nippo.content }}</p> <router-link :to="{ name: 'edit', params: { id: nippo.id } }">編集</router-link>
    </template>
  </div>
</template>

<script>

import Vue from 'vue';
import VueResource from 'vue-resource';
import moment from 'moment';
Vue.use(VueResource);

export default {
  data: () => {
    return {
      nippoes: []
    }
  },
  computed: {
    $Vue() { return Vue; }
  },
  created() {
    this.fetchNippoes();
  },
  methods: {
    toJpDate(datetime) {
      return moment(datetime).format('YYYY年MM月DD日');
    },
    fetchNippoes() {
      Vue.http.get('http://localhost:8000/api/nippoes').then((response) => {
        console.log("success");
        response.json().then((nippoes) => {
          this.nippoes = nippoes;
        });
      }, (response) => {
        console.log("failure");
      });
    }
  }
}

</script>
