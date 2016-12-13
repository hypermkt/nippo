<template>
  <div>
    <div class="card p-1">
      <h3 class="card-title">{{ toJpDate(nippo.created_at) }}の日報</h3>
      <textarea class="form-control" rows="10" v-model="nippo.content"></textarea><br />
      <button @click="updateNippo" class="btn btn-primary">更新</button>
      <button @click="deleteNippo" class="btn btn-warning">削除</button>
      <router-link :to="{ path: '/' }" class="btn btn-secondary">戻る</router-link>
    </div>
  </div>
</template>

<script>

import Vue from 'vue';
import axios from 'axios';
import NippoDate from '../../mixins/nippo-date.js';

export default {
  data: () => {
    return {
      nippo: {}
    }
  },
  mixins: [NippoDate],
  created() {
    this.fetchNippo(this.$route.params.id);
  },
  methods: {
    fetchNippo(nippoId) {
      axios.get('http://localhost:8000/api/nippoes/' + nippoId).then((response) => {
        console.log("success");
        this.nippo = response.data;
      }).catch((response) => {
        console.log("failure");
      });
    },
    updateNippo() {
      axios.put('http://localhost:8000/api/nippoes/' + this.$route.params.id, { content: this.nippo.content }).then((response) => {
        console.log("success");
        this.$router.push({ path: '/' });
      }).catch((response) => {
        console.log("failure");
      });
    },
    deleteNippo() {
      axios.delete('http://localhost:8000/api/nippoes/' + this.$route.params.id).then((response) => {
        console.log("success");
        this.$router.push({ path: '/' });
      }).catch((response) => {
        console.log("failure");
      });
    }
  }
}

</script>
