<template>
  <div>
    <nippo-header></nippo-header>

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
import VueResource from 'vue-resource';
import Header from '../header.vue';
import NippoDate from '../../mixins/nippo-date.js';
Vue.use(VueResource);

export default {
  data: () => {
    return {
      nippo: {}
    }
  },
  mixins: [NippoDate],
  components: {
    'nippo-header': Header
  },
  created() {
    this.fetchNippo(this.$route.params.id);
  },
  methods: {
    fetchNippo(nippoId) {
      Vue.http.get('http://localhost:8000/api/nippoes/' + nippoId).then((response) => {
        console.log("success");
        response.json().then((json) => {
          this.nippo = json;
        });
      }, (response) => {
        console.log("failure");
      });
    },
    updateNippo() {
      Vue.http.put('http://localhost:8000/api/nippoes/' + this.$route.params.id, { content: this.nippo.content }).then((response) => {
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
