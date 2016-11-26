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
import VueResource from 'vue-resource';
Vue.use(VueResource);

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
      Vue.http.get('http://localhost:8000/api/nippoes/' + nippoId).then((response) => {
        console.log("success");
        response.json().then((json) => {
          this.content = json.content;
        });
      }, (response) => {
        console.log("failure");
      });
    },
    updateNippo() {
      Vue.http.put('http://localhost:8000/api/nippoes/' + this.$route.params.id, { content: this.content }).then((response) => {
        console.log("success");
        this.$router.push({ path: '/' });
      }, (response) => {
        console.log("failure");
      });
    },
    deleteNippo() {
      Vue.http.delete('http://localhost:8000/api/nippoes/' + this.$route.params.id).then((response) => {
        console.log("success");
        this.$router.push({ path: '/' });
      }, (response) => {
        console.log("failure");
      });
    }
  }
}

</script>
