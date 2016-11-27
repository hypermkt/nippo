<template>
  <div>
    <h1 class="display-2 text-primary">nippo</h1>
    <h2>{{ this.currentDate() }}</h2>
    <p><router-link :to="{ path: '/new' }" class="btn btn-info">new nippo</router-link></p>
    <template v-for="nippo in nippoes">
      <div class="card p-1">
        <h3 class="card-title">{{ toJpDate(nippo.created_at) }}</h3>
        <p class="card-text">{{ nippo.content }}</p> <router-link :to="{ name: 'edit', params: { id: nippo.id } }" class="btn btn-info">編集</router-link>
      </div>
    </template>
  </div>
</template>

<script>

import Vue from 'vue';
import VueResource from 'vue-resource';
import moment from 'moment';
import NippoDate from '../mixins/nippo-date.js';
Vue.use(VueResource);

export default {
  mixins: [NippoDate],
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
