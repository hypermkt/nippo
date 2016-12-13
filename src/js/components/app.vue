<template>
  <div id="app" class="container">
    <div class="center-block">
      <nippo-header></nippo-header>
      <router-view></router-view>
    </div>
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
