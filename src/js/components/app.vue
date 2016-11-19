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
import axios from 'axios';

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
      axios.get('http://localhost:8000/api/nippoes')
        .then((response) => {
          console.log("success");
          this.nippoes = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
}

</script>
