<template>
  <div>
    <p><router-link :to="{ path: '/new' }">new nippo</router-link></p>
    <template v-for="nippo in nippoes">
      <p>本文：{{ nippo.content }}</p>
    </template>
  </div>
</template>

<script>

export default {
  data: () => {
    return {
      nippoes: [
        { content: '今日も一日お疲れ様でした' },
        { content: '今日も一日お疲れ様でした' },
        { content: '今日も一日お疲れ様でした' },
        { content: '今日も一日お疲れ様でした' },
        { content: '今日も一日お疲れ様でした' },
      ]
    }
  }
}

</script>
