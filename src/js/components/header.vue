<template>
  <div>
    <h1 class="display-2 text-primary">nippo</h1>
    <h2>{{ this.currentDate() }}</h2>
  </div>
</template>

<script>
import NippoDate from '../mixins/nippo-date.js';
export default {
  mixins: [NippoDate]
}
</script>
