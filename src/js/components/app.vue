<template>
  <div>
    <nippo-header></nippo-header>
    <router-view></router-view>
  </div>
</template>

<script>

import Vue from 'vue';
import Header from './header.vue';

export default {
  components: {
    'nippo-header': Header
  }
}
</script>
