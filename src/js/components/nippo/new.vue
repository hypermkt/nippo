<template>
  <div>
    <h1>new nippo</h1>
    <textarea v-model="content"></textarea>
    <button @click="createNippo">登録</button>
    <router-link :to="{ path: '/' }">back</router-lin>
  </div>
</template>

<script>

import Vue from 'vue';
import axios from 'axios';

export default {
  data: () => {
    return {
      content: ''
    }
  },
  methods: {
    createNippo() {
      axios.post('http://localhost:8000/api/nippoes', { content: this.content })
        .then((response) => {
          console.log(response);
          this.$router.push({ path: '/' });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
}

</script>
