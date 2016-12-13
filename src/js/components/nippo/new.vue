<template>
  <div>
    <div class="card p-1">
      <textarea class="form-control" rows="10" v-model="content"></textarea><br />
      <button @click="createNippo" class="btn btn-primary">登録</button>
      <router-link :to="{ path: '/' }" class="btn btn-secondary">戻る</router-link>
    </div>
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
      axios.post('http://localhost:8000/api/nippoes', { content: this.content }).then((response) => {
        console.log("success");
        this.$router.push({ path: '/' });
      }).catch((response) => {
        console.log("failure");
      });
    }
  }
}

</script>
