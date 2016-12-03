<template>
  <div>
    <nippo-header></nippo-header>

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
import Header from './header.vue';
import NippoDate from '../mixins/nippo-date.js';
import moment from 'moment';
import axios from 'axios';

export default {
  data: () => {
    return {
      nippoes: []
    }
  },
  mixins: [NippoDate],
  components: {
    'nippo-header': Header
  },
  created() {
    this.fetchNippoes();
  },
  methods: {
    fetchNippoes() {
      axios.get('http://localhost:8000/api/nippoes').then((response) => {
        this.nippoes = response.data;
      }).catch((response) => {
        console.log("failure");
      });
    }
  }
}
</script>
