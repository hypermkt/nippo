<template>
  <div>
    {{ this.currentDate() }}
    <h1>new nippo</h1>
    <textarea v-model="content"></textarea>
    <button @click="createNippo">登録</button>
    <router-link :to="{ path: '/' }">back</router-lin>
  </div>
</template>

<script>

import Vue from 'vue';
import VueResource from 'vue-resource';
import NippoDate from '../../mixins/nippo-date.js';
Vue.use(VueResource);

export default {
  mixins: [NippoDate],
  data: () => {
    return {
      content: ''
    }
  },
  methods: {
    createNippo() {
      Vue.http.post('http://localhost:8000/api/nippoes', { content: this.content }).then((response) => {
        console.log("success");
        this.$router.push({ path: '/' });
      }, (response) => {
        console.log("failure");
      });
    }
  }
}

</script>
