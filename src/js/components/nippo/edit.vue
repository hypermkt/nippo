<template>
  <div>
    <h1>edit nippo</h1>
    <textarea v-model="content"></textarea>
    <button @click="updateNippo">更新</button>
    <button @click="deleteNippo">削除</button>
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
  created() {
    this.fetchNippo(this.$route.params.id);
  },
  methods: {
    fetchNippo(nippoId) {
      axios.get('http://localhost:8000/api/nippoes/' + nippoId)
        .then((response) => {
          console.log("success");
          this.content = response.data.content;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateNippo() {
      axios.put('http://localhost:8000/api/nippoes/' + this.$route.params.id, { content: this.content })
        .then((response) => {
          console.log("success");
          this.$router.push({ path: '/' });
        }).catch((error) => {
          console.log(error);
        });
    },
    deleteNippo() {
      axios.delete('http://localhost:8000/api/nippoes/' + this.$route.params.id)
        .then((response) => {
          console.log("success");
          this.$router.push({ path: '/' });
        }).catch((response) => {
          console.log("failure");
        });
    }
  }
}

</script>
